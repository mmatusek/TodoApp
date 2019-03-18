import React from 'react';
import "../styles/ListDone.css";


const DoneTasks = (props) => {

    const notactive = props.tasks.filter(task => !task.active)

    if (notactive.length >= 2) {
        notactive.sort((a, b) => b.finishDate - a.finishDate)
    }
    
    const notactiveTask = notactive.map(task =>
        ( <ul className="listD">
        <li><p><strong>{task.title}</strong></p>
        <h6>Done on: {task.finishDate}</h6>
        </li>
        <li><button className="delete" onClick={()=> props.delete(task.id)}>Delete</button></li>
        </ul>)
    );
    
    return (
        <div className="doneTasks"> { notactiveTask} </div>
    )

}

export default DoneTasks;