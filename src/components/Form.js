import React from 'react'

function Form({ taskInput, setTaskInput, tasks, setTasks, edit, setEdit, currentId, handleStatus }) {

    const handleInputChange = e => {
        setTaskInput(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskInput.length > 0) {
            if (edit === true && currentId !== null) {
                const mapTasks = (tasks.map((item) => {
                    return item.id === currentId ? { ...item, text: taskInput } : item
                }))
                setTasks(mapTasks);
                setEdit(false);
            } else {
                const newTask = {
                    id: Date.now(),
                    text: taskInput,
                    complete: false
                }
                setTasks([newTask, ...tasks]);
            }
        }
        setTaskInput('');
        setEdit(false);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" autoFocus value={taskInput} onChange={handleInputChange} />
                <button type="submit">{edit ? 'Edit' : 'Add'}</button>
                <select onChange={handleStatus}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="unCompleted">UnCompleted</option>
                </select>
            </form>
        </div>
    )
}

export default Form
