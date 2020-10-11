import React, { useEffect, useState } from 'react'
import Form from './components/Form'
import TaskList from './components/TaskList';

function App() {

    // state stuff
    const [taskInput, setTaskInput] = useState("");
    const [tasks, setTasks] = useState([]);
    const [edit, setEdit] = useState(false);
    const [currentId, setCurrentId] = useState(-1);
    const [status, setStatus] = useState('all');
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        filteredTasks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status, tasks])

    const handleEdit = (task) => {
        setTaskInput(task.text)
        setCurrentId(task.id);
        setEdit(!edit);
    }
    const handleRemove = (id) => {
        setTasks(tasks.filter(item => item.id !== id))
    }
    const handleComplete = (task) => {
        const tempTasks = tasks.map((item) => {
            return item.id === task.id ? { ...task, complete: !task.complete } : item
        })
        setTasks(tempTasks);
    }
    const handleStatus = (e) => {
        setStatus(e.target.value)
    }

    const filteredTasks = () => {
        switch (status) {
            case 'completed':
                setFiltered(tasks.filter(item => item.complete === true));
                break;
            case 'unCompleted':
                setFiltered(tasks.filter(item => item.complete === false));
                break;
            default:
                setFiltered(tasks);
                break;
        }
    }

    return (
        <div>
            <Form
                currentId={currentId}
                taskInput={taskInput}
                setTaskInput={setTaskInput}
                tasks={tasks}

                setTasks={setTasks}
                edit={edit}
                setEdit={setEdit}
                handleStatus={handleStatus}
            />
            <TaskList
                tasks={tasks}
                filtered={filtered}
                handleEdit={handleEdit}
                handleRemove={handleRemove}
                handleComplete={handleComplete}
            />
        </div>
    )
}

export default App
