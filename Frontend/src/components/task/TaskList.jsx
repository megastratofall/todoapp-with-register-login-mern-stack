import axios from 'axios';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import TaskItem from './TaskItem';
import "./TaskList.css";

const TaskList = () => {
const [taskList, setTaskList] = useState([]);
const [isAddingNew, setIsAddingNew] = useState(false);
const [newTask, setNewTask] = useState('');

const getTasks = async () => {
try {
const { data } = await axios.get('/api/tasks/mytasks');
setTaskList(
data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
);
} catch (err) {
console.log(err);
}
};
    
useEffect(() => {
getTasks();
}, []);
    
const addNewButtonClick = () => {
setIsAddingNew(!isAddingNew);
};
const addNewTask = async (e) => {
e.preventDefault();
if (newTask.length <= 0) {
toast.error('Task is empty');
return;
}
try {
const { data } = await axios.post('/api/tasks/', {
title: newTask,
});
toast.success('New task added');
//cerramos nuestro formulario
setIsAddingNew(false);
//vaciamos, dejamos en valor inicial neWTask
setNewTask('');
setTaskList([{ ...data }, ...taskList]);
} catch (err) {
console.log(err);
}
};

const deleteTask = async (id) => {
try {
await axios.delete(`/api/tasks/${id}`);
toast.success('Task deleted');
setTaskList(taskList.filter((task) => task._id !== id));
} catch (err) {
console.log(err);
}
};

return (
    <>
<div>
    <div className="topBar">
    <button type='button' className='addNew' onClick={addNewButtonClick}>
        Add New
    </button>    
    </div>
{isAddingNew && (
<form className="addNewForm" onSubmit={addNewTask}>
    <input
    type="text"
    value={newTask}
    onChange={(e) => setNewTask(e.target.value)}
    placeholder="Task name"/>
<button type="submit">Add</button>
</form>
)}
{taskList.length > 0 ? (<table className='taskList_table'>
<tbody>
{taskList.map((task) =>(
<TaskItem key={task._id} task={task} deleteTask={deleteTask}/>
))}
</tbody>
</table>):("No task Found, create a new Task")}
</div>
</>
);
}


export default TaskList