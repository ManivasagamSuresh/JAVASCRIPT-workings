// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

 var a = parseInt(userInput[0]);
 var b = userInput[1].split(" ").map(val=>Number(val));
 var c = Number(userInput[2]);
 let e ="";
 

var d = [b.slice(0,3),b.slice(1,4),b.slice(2,5),b.slice(3,6),b.slice(4,7)];
console.log(d);
console.log(d[2][0]);

// let r =(num)=>{
//     let re =(element)=>{
//         return element>0;
//     }
//     re(num);
// }
// console.log(d.every(r));


d.forEach((element)=>{
    
    
    var ans = element.find(element=>element<0);
    e=e+ans+" ";
    
});
let f =e.split(" ").map((num)=>Number(num));
 f.pop();
 if(e==""){console.log(0);}
 else{
console.log(...f);}

 
 

  //end-here
});