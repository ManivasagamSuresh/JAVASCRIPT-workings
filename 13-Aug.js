// let n = NaN;
// console.log(typeof n);
// console.log("abc"/2);
// console.log("abc"+2);
// console.log("abc"-3);
// console.log("abc"*2);
// console.log('5'+5); //concatinations happens
// console.log('5'-5);
// console.log('5'/5);
// console.log('5'*5);
// var n = '5' ;
// console.log(typeof +n);
// console.log(typeof Number(n));
// console.log(typeof parseInt(n));
// var n = [2,3,4];
// var m = [2,3,4];
// // console.log(m==n);
// // console.log(m===n);
// var o = m;
// // console.log(m,n,o);
// // var o = [...m];
// // var o = m.concat();
// console.log(m==o);
// // n.push(10);
// // m.push(20);
// // o.push(30);
// // console.log(n,m,o);
// var m ={
//     name : 'mani',
//     age : 23,
//     edu : 'BE Auto',
//     city : 'Madurai' ,
// }
// m.status="brealup";
// // console.log(m);
// // console.log(m.city);
// // console.log(m['edu']);
// // var n = "age";
// // console.log(m[n]);
// // m.age = 23+2;
// // console.log(m.age);
// console.log(typeof m);
// m=JSON.stringify(m);
// console.log(m);

// console.log(typeof m);
// var marks=[45,56,78,83,90];
// // for (var i in marks)
// {
//     console.log(i,marks[i]);
// }


// for (var i of marks)
// {
//     console.log(i);
// }

// marks.forEach( function
// (i){
//     console.log(i);
// })

// var m = -Infinity ;
// for (var i of marks)
// {
//     if(i>m){m=i;}
// }
// console.log(m);

// var m = Infinity ;
// for (var i of marks)
// {
//     if(i<m){m=i;}
// }
// console.log(m);

var m ={
    name : 'mani',
    age : 23,
    edu : 'BE Auto',
    city : 'Madurai' ,
}
// for (var i in m)
// {console.log(i,m[i]);

    
// }
console.log(Object.keys(m));
console.log(Object.values(m));