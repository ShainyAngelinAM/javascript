const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    
  };
  console.log(person)
  console.log(person.id);
  let p=person.firstName
  console.log(p);
  let q=console.log(person.lastName)
  let r=person["id"]
  console.log(r);

  //adding new property
  person.age=22;
  console.log(person)

  //deleting the property
  delete person.lastName
console.log(person)

//nested objects
const fruit={
    a:"apple",
    b:"banana",
     veggies : {
        c:"carrot",
        p:"potato"
    }
}
console.log(fruit.veggies.p)
console.log(fruit["veggies"]["c"])
console.log(fruit["a"])
console.log(fruit.b)
console.log(fruit)
console.log(fruit.veggies)

//
const bike={
    y:"yamaha",
    p:"pulsar"
}
function biker(){
    return bike.y;
}
let bb=biker()
console.log(bb)

//function as property
let stud={name:"shainy",class:"js",
    studdet:function(){
        return this.name +""+ this.class +"";
    }
}
console.log("student" +stud.studdet())

