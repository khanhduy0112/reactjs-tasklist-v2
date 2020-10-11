import React from 'react'
import { TiDeleteOutline, TiEdit } from 'react-icons/ti'
import '../App.css';
function Task({ task, handleEdit, handleRemove, handleComplete }) {

    return (
        <div>
            <div className={task.complete ? 'complete' : 'task'} onClick={() => handleComplete(task)}>{task.text}</div>
            <div className="btns">
                <TiDeleteOutline onClick={() => handleRemove(task.id)} />
                <TiEdit onClick={() => handleEdit(task)} />
            </div>
        </div>
    )
}

export default Task
