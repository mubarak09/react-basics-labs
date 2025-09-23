import React from 'react';

const Task = (props) => {
    
    return (
        <div className="card">
        <p>{props.title}</p>
        <p>Due: {props.deadline}</p>
        <p className="description">{props.description}</p>
        <p>{props.priority}</p>
        </div>
    )
}

export default Task;
