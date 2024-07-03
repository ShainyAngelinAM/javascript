//for
var i=1;
for(i=1;i<=10;i++){
    console.log(i);
}

//while
var b=2,a=3;
while(a>b){
    console.log(b);
    break;
}

//do-while
do{
    console.log(a+b);
    break;
}
while(a>b)

//for of each
const fruits=["apple","orange","cherry"];
for(const f of fruits){
    console.log(f);
}

//for in each
const veg={'t' : 'tomato' , 'p' : 'potato', 'c' : 'carrot'};
for(const v in veg){
     console.log(v);
     console.log(veg[v]);
     console.log(`the key is ${v} and the values are ${veg[v]}`);
 }

 //break
 for(let i=1;i<6;i++){
    if(i==4){
        break;
    }
    console.log(i);
 }

 //continue
 for(let i=1;i<6;i++){
    if(i==4){
        continue;
    }
    console.log(i);
 }

 //labelled statement
 let str = '';

loop1: for (let i = 0; i < 6; i++) {
  if (i === 1) {
    continue loop1;
  }
  str = str + i;
}
console.log(str);
