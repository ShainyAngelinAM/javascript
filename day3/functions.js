function give(){
    console.log("hello");
}
give();

// return  a value
function get(){
    return "hello world";
}
let over=get();
console.log(over)

//passing a value
function come(d,a){
    console.log("good morning")
    return `hello ${d} 
    ${a}`
}
let user="shainy";
let t ="Have a good day"
let out=come(user,t);
console.log(out)

//function expression
function myFunction(a, b) {
  return a + b;
}
let y =myFunction(4,3);
console.log(y);

//anonymous function
let div=function(y1,y2){
    return y1/y2;
}
let answer=div(8,2);
console.log(answer);

//arrow function
let num= (p1,p2) => p1+p2;
console.log(num(4,5));
