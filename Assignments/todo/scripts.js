
const inputTask=document.getElementById("task-input")
const form=document.getElementById("task-form")
const list=document.getElementById("task-list")


form.addEventListener("submit",(event)=>
{
    event.preventDefault();
    const newtask=document.createElement("li")
    newtask.textContent = inputTask.value;
    list.appendChild(newtask)
    inputTask.value="";
})