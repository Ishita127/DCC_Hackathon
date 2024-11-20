document.addEventListener("DOMContentLoaded", () => {
    const tasks = [
      {
        id: 1,
        title: "Create Chatbot",
        description:
          "Design and develop a chatbot using NLP libraries like Rasa or Dialogflow. Implement intents and responses, and deploy the chatbot on a website or messaging platform.",
        completed: false,
      },
      {
        id: 2,
        title: "Data Analysis Dashboard",
        description:
          "Create a dashboard for data visualization using Python (Dash or Plotly) or Power BI/Tableau. Include charts, filters, and drill-down features to analyze datasets.",
        completed: false,
      },
      {
        id: 3,
        title: "Email Tests",
        description: "Sending times",
        completed: false,
      },
      {
        id: 4,
        title: "Content",
        description: "Notes from the workshop:\nStrong themes\nChoose distinctive imagery...",
        completed: false,
      },
    ];
  
    const pastelColors = ["#FFECB3", "#C8E6C9", "#FFCDD2", "#BBDEFB"];
    const taskContainer = document.getElementById("task-container");
  
    const renderTasks = () => {
      taskContainer.innerHTML = "";
      tasks.forEach((task, index) => {
        const taskDiv = document.createElement("div");
        taskDiv.className = `task ${task.completed ? "completed" : ""}`;
        taskDiv.style.backgroundColor = pastelColors[index % pastelColors.length];
  
        taskDiv.innerHTML = `
          <h3>${task.title}</h3>
          <p>${task.description}</p>
          <label>
            <input type="checkbox" ${task.completed ? "checked" : ""}>
            Mark as Done
          </label>
        `;
  
        const checkbox = taskDiv.querySelector("input");
        checkbox.addEventListener("change", () => {
          task.completed = !task.completed;
          renderTasks();
        });
  
        taskContainer.appendChild(taskDiv);
      });
    };
  
    renderTasks();
  });
  