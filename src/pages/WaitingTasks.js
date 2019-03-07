import React from 'react';
import '../styles/DoneTask.css';
import Task from './Task.js'

const WaitingTasks = (props) => {

    const active = props.tasks.filter(task => task.active)

    const activeTask = active.map(task => (
        <Task key={props.id} delete={props.delete} task={task} status={props.status} />
    ))
    return (

        <div>
            {activeTask}
        </div>
    )

}

export default WaitingTasks;