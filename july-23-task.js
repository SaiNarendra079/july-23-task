let student={
  name:'Sai Narendra',
  Branch:'CSE',
  age:20,
  address:{
    pincode:530026,
    city:'Visakhapatnam',
  }
}
//with spread operator
let student_shallow= {...student}
student_shallow.name=' katta Vamsi'


//with assign operator
let obj_assign=Object.assign({},student)
obj_assign.name='Vinay',
obj_assign.address.city='vizinagram'
console.log('original object',student)
console.log('shallow_object',student_shallow)
console.log('Assign Operator',obj_assign)



//deep copy example
let cricketers={
  name:'Virat Kohli',
  age:'35',
  nationality:'Indian',
  World_cups_won:{
    t20_worldcup:true,
    odi_worldcup:true,
    world_testChampionship:false

  }
}
let deep_copy=JSON.parse(JSON.stringify(cricketers))
deep_copy.name='Joe Root',
deep_copy.nationality='England',
deep_copy.World_cups_won.t20_worldcup=false
console.log('original object',cricketers)
console.log('deep copy',deep_copy)



//adding two arrays using spread operator and assigning them to other
let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9,10]

let arr3=[...arr1,...arr2]
console.log(arr3)


//adding two objects using spread operator and assigning them

let obj1={
  name:'sai',
  age:20,
  email:'sai@gmail.com'
}
let obj2={
  phn:6748398023,
  address:{
    pincode:530026,
    city:'vizag'
  }
}
let obj3={...obj1,...obj2}
console.log(obj3)

//rest in function

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(10,20,30,40,50))

let arr=['sai','Durga prasad','Vamsi','Prasanth','Rohit Vinay']
let [firstElement, secondElement, ...remainingElements] = arr;
console.log(firstElement, secondElement,remainingElements)