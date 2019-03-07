import React from 'react';
import '../styles/DoneTask.css';
import Task from './Task.js'

const DoneTasks = (props) => {

    const notactive = props.tasks.filter(task => !task.za)

    const notactiveTask = notactive.map(task => ( <
        Task key = {
            props.id
        }
        delete = {
            props.delete
        }
        task = {
            task
        }
        />
    ))
    return (

        <
        div > {
            notactiveTask
        } <
        /div>
    )

}

export default DoneTasks;