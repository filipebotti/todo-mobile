import React from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import styled from 'styled-components';
import { Colors } from '../../shared';
import PropTypes from 'prop-types'
import TaskContainer from './container';

const TaskText = styled.Text`
    fontSize: 18;
    color: ${props => props.isProcessing && Colors.LIGHT_PURPLE || Colors.DARK_GREY};
    flex: 1;
    marginLeft: 10px;
`;

class Task extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isChecked: props.task.deleted_at != null,
            animOpacity: new Animated.Value(0) 
        }

        this.renderCheckIcon = this.renderCheckIcon.bind(this);
        this.onChecked = this.onChecked.bind(this);
    }

    componentDidMount() {
        Animated.timing(this.state.animOpacity,{
            toValue: 1,
            timing: 500
        }).start();
    }

    renderCheckIcon() {
        color = this.props.task.isProcessing && Colors.LIGHT_PURPLE || Colors.DARK_GREY;
        if(this.state.isChecked)
            return <FontAwesome style={{fontSize: 24, color }}>{Icons.checkSquareO}</FontAwesome>
        else
            return <FontAwesome style={{fontSize: 24, color }}>{Icons.squareO}</FontAwesome>
    }

    onChecked() {
        this.setState ({
            isChecked: true
        });

        Animated.timing(this.state.animOpacity, {
            toValue: 0,
            timing: 500
        }).start(() => {
            if(this.props.onCheckTask)
                this.props.onCheckTask(this.props.task);
        });
    }

    render() {
        return (
            <TaskContainer opacity={this.state.animOpacity}>
                <TouchableOpacity disabled={this.state.isChecked || this.props.task.isProcessing} onPress={this.onChecked}>
                    {this.renderCheckIcon()}
                </TouchableOpacity>
                <TaskText isProcessing={this.props.task.isProcessing}>{this.props.task.description}</TaskText>           
            </TaskContainer>
        )
    }
}

Task.propTypes = {
    task: PropTypes.object,
    onCheckTask: PropTypes.func
}

export default Task;