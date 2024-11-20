import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {

  const [tasks, setTasks] = useState([
    { id: 1, title: 'create Chatbot', description: 'Design and develop a chatbot using NLP libraries like Rasa or Dialogflow. Implement intents and responses, and deploy the chatbot on a website or messaging platform.', completed: false },
    { id: 2, title: 'Data Analysis Dashboard', description: 'Create a dashboard for data visualization using Python (Dash or Plotly) or Power BI/Tableau. Include charts, filters, and drill-down features to analyze datasets.', completed: false },
    { id: 3, title: 'Email Tests', description: 'Sending times', completed: false },
    { id: 4, title: 'Content', description: 'Notes from the workshop:\nStrong themes\nChoose distinctive imagery...', completed: false },
  ]);

  const pastelColors = ['#FFECB3', '#C8E6C9', '#FFCDD2', '#BBDEFB']; //for different colors of each box

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
};

  return (
    <div className="todo">
      <h1>Sticky TO-DO Wall</h1>
      <div className="task-container">
        {tasks.map((task, index) => (
          <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`}
          style={{ backgroundColor: pastelColors[index % pastelColors.length] }} //for different colors of each box
        >
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <label>
              <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)}/>
              Mark as Done
            </label>
          </div>
        ))}
        <div className="task add-task">
          <p className='toadd'>+</p>
        </div>
      </div>
    </div>
  );
};

export default Todo;
