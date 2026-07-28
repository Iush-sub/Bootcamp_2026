
// loop
a=0 
do {
    
    console.log("hello world")
    a++;
}while(a==0);

while(a<5)
{
    console.log("hello iush")
    a++
}
for(let i=0;i<5;i++)
{
    console.log("hello sakar")
}
//aray 
const studentname = ["Ram","sakar","hari","joker","mohan"]
studentname.push("sakar")
console.log(studentname)

//other method 
//foreach
//map
//filter
//reduce

studentname.forEach(num => console.log(num));
studentname.map(num => console.log(num.toUpperCase()));


//
const evennumber=[1,2,3,4,5,6,7].filter((value)=>{
    return value%2==0;
})
console.log(evennumber)
