import React from 'react';
import { ScrollView, RefreshControl, AppState } from 'react-native';
import styled from 'styled-components';
import { NewTask, Task } from '../shared';
import uuid from 'uuid/v4';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as taskActions from '../../actions/task';

const Container = styled.View`
    flex: 1;
    padding: 10px;
`;



class TaskList extends React.Component {

    constructor() {
        super();

        this.handleNewTask = this.handleNewTask.bind(this);
        this.handleRemoveTask = this.handleRemoveTask.bind(this);
        this.state = {
            newTaskDescription: '',
            appState: AppState.currentState
        }

        this.onRefresh = this.onRefresh.bind(this);
        this.handleAppState = this.handleAppState.bind(this);
    }

    componentDidMount() {
        AppState.addEventListener('change', this.handleAppState);
      }
    
      componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppState);
      }

    handleAppState(nextAppState) {
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
            this.onRefresh();
        }

        this.setState({appState: nextAppState});
    }

    handleNewTask() {
        if(this.state.newTaskDescription) {
            this.props.taskActions.addTask({
                description: this.state.newTaskDescription,
                uuid: uuid(),
                isProcessing: true
            });
            this.setState({ newTaskDescription: '' })
            this._taskInput.focus();
        }
    }

    handleRemoveTask(task) {
        this.props.taskActions.removeTask(task);
    }

    onRefresh() {
        this.props.taskActions.fetchTasks();
    }

    render() {
        return( 
            <Container>
                <NewTask
                    value={this.state.newTaskDescription}
                    onChangeText={(newTaskDescription) => this.setState({ newTaskDescription })}
                    onSubmitEditing={this.handleNewTask}
                    textRef={ref => this._taskInput = ref}                      
                />                    
                <ScrollView style={{ flex: 1 }}                    
                    refreshControl={
                        <RefreshControl
                            onRefresh={this.onRefresh}
                            refreshing={this.props.task.isFetching}
                        />
                    }
                >
                    {this.props.task.tasks.length > 0 && this.props.task.tasks.map((item) => {
                        return (
                            <Task key={item.uuid} task={item} onCheckTask={() => this.handleRemoveTask(item)}/>
                        )
                    })}
                </ScrollView>
            </Container>
        )
    }
}

export default connect(
    state => ({
        task: state.task
    }),
    dispatch => ({
        taskActions: bindActionCreators(taskActions, dispatch)
    })
)(TaskList);
