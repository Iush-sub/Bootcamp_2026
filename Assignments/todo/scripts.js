
const inputTask=document.getElementById("task-input")
const form=document.getElementById("task-form")
const list=document.getElementById("task-list")
const clearbutton=document.getElementById("cleartask")



form.addEventListener("submit",(event)=>
{
    event.preventDefault();
    if(inputTask.value!="")
    {
        
        const newtask=document.createElement("li")
        
        
            
        const checkbox=document.createElement("input")
        checkbox.type="checkbox"
        const span = document.createElement("span");
        span.textContent= inputTask.value;
        newtask.appendChild(checkbox)
        newtask.appendChild(span)
        list.appendChild(newtask)
        inputTask.value="";
    }  
    
   

    
    
})

clearbutton.addEventListener("click",(event)=>
{
    list.innerHTML=""
})