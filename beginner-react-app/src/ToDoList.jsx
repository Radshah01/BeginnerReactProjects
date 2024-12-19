
import React, {useState} from "react";


function ToDoList(){

    const [tasks, setTasks] = useState(["Feed the Dog", "Read a Book", "Eat Dinner"]);

    function handleAddTask(){

        const newTask = document.getElementById("taskInput").value;
        document.getElementById("taskInput").value = "";
        
        if ( newTask.trim !== ""){
            if (tasks.includes(newTask)) {
                alert("Task already exists!");
                document.getElementById("taskInput").value = "";
            }
            else{
                setTasks(t => ([...t, newTask]));
            }
        }
        else{
            alert("Task cannot be empty!");
        }  
    }

    // function handleKeyPress(event) {
    //     const newTask = document.getElementById("taskInput").value;
    //     if (event.key === "Enter"){
    //         newTask != ""
    //         ? setTasks(t => [...t, newTask])    
    //         : alert("Task cannot be empty!");
    //         document.getElementById("taskInput").value = "";
    //     }
    // }

    function handleRemoveTask(index){

        setTasks(tasks.filter((_,i) => i !== index))
    }

    function handleIncreaseIndex(index){
        if (index < tasks.length - 1){
            const updatedTasks = [...tasks];

            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks)
        
        }
    }

    function handleReduceIndex(index){
        
        if (index > 0){
            const updatedTasks = [...tasks];

            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index -1], updatedTasks[index]];
            setTasks(updatedTasks)
        
        }
    }

    return(
        <>
            <div className="user-section">
                <input className="txtInput" type="text" id="taskInput" placeholder="Enter a task..">
                </input>
                <button className="btnAdd" onClick={handleAddTask}>+</button>
            </div>
             <ul className="ul-todo">
                {tasks.map((task, index) =>
                <li className="task-item" key={index}>
                    <p>{task}</p>
                    <button className="task-button" onClick={() =>
                         handleRemoveTask(index)}>Delete
                    </button>
                    <button className="task-button" onClick={() => handleReduceIndex(index)}>Up</button>
                    <button className="task-button" onClick={() => handleIncreaseIndex(index)}>Down</button>
                </li>)}
            </ul>
        </>
    );
}

export default ToDoList