// document.querySelector(".main").addEventListener("mouseover",fun);
// function fun (event){
//  console.log(event);
// };

// var a = document.createElement("button");
// a.setAttribute("class","main1");
// a.setAttribute("type","button")
// a.innerHTML= "hello All";
// a.addEventListener("mouseover",fun);
// document.body.append(a);
//  function fun(ele)
// {
//     console.log(ele);
   
// }


// var a = document.querySelector('#txt');
// console.log(a);

var b =document.createElement("textarea")
b.setAttribute("class","b");
b.addEventListener("keyup",(fun)=>{
    console.log(fun.target.value.length);
})

document.body.append(b);


// function fun(ele){
//     console.log(ele.target.value.length);
// };