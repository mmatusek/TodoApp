import React from 'react';
import "../styles/List.css";


const WaitingTasks = (props) => {

        const style = {
            color: 'red'
        }
    const active = props.tasks.filter(task => task.active);

    if(active.length >= 3){
        active.sort((a,b) => {
            a = a.title.toLowerCase();
            b = b.title.toLowerCase();
            if (a > b) return 1;
            if (a < b) return -1;
            return 0
        })
    }

    const activeTask = active.map(task => (
        <ul className="list">
        <li><p style={task.priority ? style: null}><strong>{task.title}</strong></p></li>
        <li><p> <strong>Deadline : </strong>{task.date}</p></li>
        <li><button className="delete" onClick={() => props.delete(task.id)}>Delete</button>
        <button className="add" onClick={() => props.status(task.id)}>Done</button></li>
        </ul>
    ));

    return (

        <div className="waitingTask"> {activeTask}</div>
    )

}

export default WaitingTasks;