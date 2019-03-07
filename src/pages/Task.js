import React from 'react';

const Task = (props) => {

    const style = {
        color: 'red'
    }
    const { id } = props.task
    if (props.task.active)
        return (
            <div className="list">
                <h1>{props.task.title}</h1>
                <button onClick={() => props.delete(id)} >Delete</button>
                <button onClick={() => props.status(id)} >Done</button>
            </div>
        );
    if (props.task.active === false)
        return (
            <div className="list">
                <h1 style={props.task.priority ? style : null}>{props.task.title}</h1>
                <button onClick={() => props.delete(id)} >Delete</button>
            </div>
        );
}

export default Task;