const btm=document.getElementById("click")
const count=document.getElementById("count")
let value=0

btm.addEventListener("click", () =>
{
   value += 1;
   count.innerText=value  ;
})



