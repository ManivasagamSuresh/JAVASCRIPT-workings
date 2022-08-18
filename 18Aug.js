

// // let b = [ "hello","guvi"];
// // console.log(...b)

// // let a = [1,2,3,4,5];
// // console.log(Math.max(...a));
// // console.log(Math.min(...a));

// // const  sub= [ "tam","eng",["sci","soc"],"gk","math","bio"];

// // const [a,b,c,d,...otherinfo]= sub;
// // console.log(c);
// // const [e,f] = c;
// // console.log(f);
// // console.log(otherinfo);

// // let person = {name: 'JohN Smith'};
// // let tpl = `My name is ${person.name}.`;
// // let MyVar = "My name is " + person.name + ".";

// // console.log("template literal= " + tpl);
// // console.log("my variable = " + MyVar);


// // let a = "MANI";
// // console.log(a.toLowerCase());


// // let input = function(arr){
// //     let uniqueChars = [...new Set(arr)];
    
// //     console.log(uniqueChars);
        
// //     }
// //     input(['A', 'B', 'A', 'C', 'B']);

// // let a =[1,2,3,4,5];

// // console.log(a.unshift(9,6));
// // console.log(a);

// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

// console.log(plants.pop());
// console.log(plants);



//   (function(nums, k)
//   {
//         for (let i = 0; i < k; i++) {
//             let b =nums.pop();
//         nums.unshift(b);
//     }
  
//     console.log(...nums);
//   })
//   ([1,2,3,4,5],3);
// let a = [1,8,3];
// let b = [21,4,6];

// let c = [...a, ...b]
// let d = c.sort((c,d) => d - c);
// console.log(c);
// // console.log(d);

// const median = (a, b) => {

//     let c = [...a, ...b].sort((a, b) => a - b);
    
  
//     const half = c.length / 2;
    
    
//     if (c.length % 2) {
    
    
//     console.log(c[half] + c[half - 1]) / 2;
        
//     }
//     else{  
//         console.log(c[half.round()]);
        
//     }
// }

// median([1,2,3],[4,5,6,7]);

// let input= [1,2,3,4,5];
// console.log(input[ Math.round(2.5) - 1])
// console.log( Math.round(3.5));
// console.log( Math.round(6.5));
// console.log( Math.round(7.5));
// let a = 5.5;
// ab= Math.round(a);
// console.log(ab);