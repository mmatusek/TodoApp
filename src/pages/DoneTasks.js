import React from 'react';


const DoneTasks = (props) => {

    const notactive = props.tasks.filter(task => !task.active)
    const notactiveTask = notactive.map(task => ( 
        <div className="list">
        <h1>{task.title}</h1>
        <button onClick={()=> props.delete(task.id)}>Delete</button>
        </div>)
    );

    return (
        <div > { notactiveTask} </div>
    )

}

export default DoneTasks;