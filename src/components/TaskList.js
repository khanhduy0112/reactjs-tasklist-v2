import React from 'react'
import Task from './Task'

function TaskList({ tasks, handleEdit, handleRemove, handleComplete, filtered }) {
    return (
        <div>
            {
                filtered.map((task, index) => (
                    <Task key={index} task={task} handleEdit={handleEdit} handleRemove={handleRemove} handleComplete={handleComplete} />
                ))
            }
        </div>
    )
}

export default TaskList
