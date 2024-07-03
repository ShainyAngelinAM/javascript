//primitive datatypes

//number
let a=2;
console.log(a);

//string
let fruit="apple";
console.log(fruit);

//boolean
let x,y;
x=true;
y=false;
console.log(x , y) ;

//null
let b=null;
if(b){
    console.log(b);
}
else{
    console.log("hi");
}

//undefined
let g;
console.log(g);

//bigInt
let h=BigInt(5555555555555555555555555555);
console.log(typeof h);


//non primitive datatypes

//object
const flower={'r':'rose','l':'lotus'};
console.log(flower.r);
console.log(flower.r  +" "+  flower.l);

//array
const no=[1,2,3,4,5];
console.log(no[1]);
no[2]=8;
console.log(no);

//function
let m="shainy";
function come(d){
    return `hello , ${d}!`;
}
console.log(come(m));
