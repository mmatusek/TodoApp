import React from 'react';
import "../styles/List.css";


const WaitingTasks = (props) => {

        const style = {
            color: 'red'
        }
    const active = props.tasks.filter(task => task.active);
    const activeTask = active.map(task => (
        <ul className="list">
        <li><h3 style={task.priority ? style: null}>{task.title}</h3></li>
        <li><p> <strong>Deadline : </strong>{task.date}</p></li>
        <li><button className="delete" onClick={() => props.delete(task.id)}>Delete</button></li>
        <li><button className="add" onClick={() => props.status(task.id)}>Done</button></li>
        </ul>
    ));

    return (

        <div className="waitingTask"> {activeTask}</div>
    )

}

export default WaitingTasks;