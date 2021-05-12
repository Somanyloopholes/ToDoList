let newTask = document.getElementById("addToList");
let newTaskButton = document.getElementById("addToListButton");
let mainList = document.getElementById("taskList");
let removeTasksButton = document.getElementById("removeButton");


// Button to add a new task
newTaskButton.addEventListener("click",()=>{
    let task = document.createElement("li");
    task.innerHTML = newTask.value;
    mainList.append(task);

    // click on task to strike it out (complete it)
    task.addEventListener("click",  () => {
        task.style.textDecoration = "line-through";
    })
    // double click to remove task
    task.addEventListener("dblclick" , ()=>{
    mainList.removeChild(task);
    })
})


let firstElement = mainList.firstChild;
mainList.removeChild(firstElement); 


// button to remove all tasks
removeTasksButton.addEventListener("click", ()=>{
    mainList.parentNode.removeChild(mainList);
})






