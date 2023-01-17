import React, { useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import toast from 'react-hot-toast';
import "./TaskItem.css";

const TaskItem = ({task, deleteTask}) => {
const [isCompleted, setIsCompleted] = useState(task.completed);
const [isLoading, setIsLoading] = useState(false);

const handleCheckboxClick = async() => {
try {
setIsLoading(true);
await axios.put(`/api/tasks/${task._id}`, {
completed: !isCompleted,   
});
setIsCompleted(!isCompleted);
toast.success("Task updated successfuly");    
} catch (error) {
console.log(error)   
}finally{
    setIsLoading(false);
}    
};

return (
<tr className='task_item'>
<td className='task_name'>
    <div className='checkbox' onChange={handleCheckboxClick} role="checkbox" aria-checked>
        <input type="checkbox" checked={isCompleted} disabled={isLoading} readOnly tabIndex={-1}/>
    </div>
    <p>{task.title}</p>
</td>
<td>{isCompleted ? "Tarea Completada" : "Tarea Incompleta"}</td>
<td>{moment(task.createdAt).format('DD/MM/YYYY')}</td>
<td>
<button
type="button"
className="deleteBtn"
onClick={() => deleteTask(task._id)}>
Delete
</button>
</td>
</tr>
)
}

export default TaskItem