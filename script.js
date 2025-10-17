const inputLabel = document.getElementById("inputLabel");
const ul = document.getElementById("taskList");


function addTask(){
    const inputTask = inputLabel.value.trim();
    if (inputTask === ""){
        toastMSg("Please enter a task");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.classList.add("task-item");
    
    // span to store text part in li
    const taskText = document.createElement("span");
    taskText.textContent = inputTask;
    taskText.classList.add("taskText");

    // Create done button
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("doneBtn");
    doneBtn.textContent = "❌";
    doneBtn.style.marginLeft = "10px";

    doneBtn.onclick = () =>{
        ul.removeChild(li);
        toastMSg(`Task completed`);
    };

    li.appendChild(taskText);
    li.appendChild(doneBtn);
    ul.appendChild(li);
    inputLabel.value = "";

    toastMSg("Task added!")

}


inputLabel.addEventListener("keydown", event =>{
    if (event.key === 'Enter'){
        addTask();
    }
});

function toastMSg(message){
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove('show');
    toast.classList.add('show');
    setTimeout(() =>{ toast.classList.remove('show'); }, 2000);
   
}