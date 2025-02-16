const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

const taskData = JSON.parse(localStorage.getItem("data")) || [];
let currentTask = {};

openTaskFormBtn.addEventListener('click',()=>{
    localStorage.setItem("key",123)
    taskForm.classList.toggle('hidden');
})

closeTaskFormBtn.addEventListener('click',()=>{
    const formInputsContainValues = (titleInput.value==""||dateInput.value===""||descriptionInput.value==="");
    const formInputValuesUpdated = titleInput.value!=currentTask.title||dateInput.value!=currentTask.date||descriptionInput.value!=currentTask.description
    if(formInputsContainValues && formInputValuesUpdated){
        confirmCloseDialog.showModal();
   }else{
              reset();
   }
})

cancelBtn.addEventListener('click',()=>{
    confirmCloseDialog.close();
})

discardBtn.addEventListener('click',()=>{
    confirmCloseDialog.close();
    reset();
})

taskForm.addEventListener('submit',(e)=>{
e.preventDefault()

addOrUpdateTask();

})

const reset = ()=>{
    titleInput.value=""
    dateInput.value=""
    descriptionInput.value=""

    taskForm.classList.toggle('hidden')

    currentTask={}
    addOrUpdateTaskBtn.innerText = "Add Task"
}

const addOrUpdateTask = ()=>{
    const dataArrIndex = taskData.findIndex((item)=>item.id === currentTask.id)

    const taskObj = {
        id: `${titleInput.value.toLowerCase().split(" ").join('-')}`,
        title: titleInput.value,
        date: dateInput.value,
        description: descriptionInput.value
    }
    
    if(dataArrIndex===-1){
        taskData.unshift(taskObj);
    }else{
        taskData[dataArrIndex] = taskObj 
    }
    
    localStorage.setItem("data",JSON.stringify(taskData))
    updateTaskContainer()
    reset()
}

const updateTaskContainer = ()=>{
    tasksContainer.innerHTML=''
    taskData.forEach(({id,title,date,description})=>{
        
        tasksContainer.innerHTML += 
        `<div class="task" id=${id}>
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Description:</strong> ${description}</p>
        <button type="button" class="btn" onclick="editTask(this)">Edit</button>
        <button type="button" class="btn" onclick="deleteTask(this)">Delete</button>
        </div>`
    })
}

const deleteTask = (buttonEl)=>{
    const dataArrIndex = taskData.findIndex((item)=>{
        return buttonEl.parentElement.id === item.id
    })

    taskData.splice(dataArrIndex,1)
    localStorage.setItem("data",JSON.stringify(taskData))
    buttonEl.parentElement.remove()
//    console.log(buttonEl.parentElement.id)
//    taskData = taskData.filter((e)=>{
//     console.log(buttonEl.parentElement.id === e.id)
//     return buttonEl.parentElement.id === e.id
//    }) 
//    updateTaskContainer()
}

const editTask = (buttonEl)=>{
    const dataArrIndex = taskData.findIndex((item)=>{
        return buttonEl.parentElement.id === item.id
    })
    currentTask = taskData[dataArrIndex]
    titleInput.value = currentTask.title
    dateInput.value = currentTask.date
    descriptionInput.value = currentTask.description

    addOrUpdateTaskBtn.innerText = "Update Task"

    taskForm.classList.toggle('hidden')
}

if(taskData.length){
    updateTaskContainer();
}

