// const Person = function (name) {
//   // atributo público porque está declarado con this
//   this.name = name || "";
//   // atributo privado porque está declarado con const
//   const lastname = "González";
//   // atributo privado porque está declarado con const
//   const myName = this.name;
//   // método privado porque está declarado con const
//   const fullName = () => {
//     return myName + " " + lastname;
//   };
//   // método público porque está declarado con this
//   this.introduce = () => {
//     return "Hola, mi nombre es " + fullName();
//   };
// };
// const oscar = new Person("Óscar");

// const stephen = new Person("Stephen");
// // Óscar
// console.log(oscar.name);
// // Hola, mi nombre es Óscar González
// console.log(oscar.introduce());
// // undefined porque el atributo es privado
// console.log(oscar.lastname);
// console.log(stephen.introduce());
// // error porque el método no privado y no se puede acceder a él (es undefined) e invocar
// //a undefined genera un error
// console.log(oscar.fullName());

// const student =  { name : "David Rayy", sclass : "VI", rollno : 12};
// const person = Object.keys(student);
// for (const p of person) {
//   console.log(p);
// }

// let obj = { x: 1, y: 2 };

// delete obj.x;

// obj.z = 5;

// console.log(obj);

// let obj1 = { x: 1, y: 2, z: 3 };
// let obj2 = { a: 1, y: 2, z: 1 };

// let value1 = [];
// let valu2 = [];

// for (let key in obj1) {
//     if (obj2.hasOwnProperty(key)) {
//         value1.push(key);
//         if (obj1[key] === obj2[key]) {
//             valu2.push(key);
//         }
//     }
// }

// console.log(`the value: ${value1}`);
// console.log(`the value: ${valu2}`);


// Object for Handler
// let handler1 = {
//     id: 1,
//     name: "John Doe",
//     position: "Manager"
//   };
  

  
//   // Object for Client

  
//   let client = {
//     id: 102,
//     name: "Client B",
//     address: "456 Market Street"
//   };
  
 
  
//   // Object for Message
//   let message = {
//     id: 1001,
//     sender: "John Doe",
//     recipient: "Jane Doe",
//     subject: "Meeting Scheduled",
//     body: "We have a meeting scheduled at 10 AM tomorrow."
//   };
  

  

  
//   // Object for Transfer
//   let transfer = {
//     id: 5001,
//     sender: "Client A",
//     recipient: "Client B",
//     amount: 1000,
//     date: "2022-12-01"
//   };
  

//   let transfer1= Object.keys(transfer);
//   for(let trns of transfer1){
//     console.log(trns)
//   }

  
 


// function sum(a, b){
//     return  a+b;
// }
// console.log(sum(4,5))

// function restar(a, b){
//     return  a-b;
// }

// console.log(restar(7,6))

// function multiple(a, b){
//     return  a*b;
// }

// console.log(multiple(3,5))
// function divide(a, b){
//     return  a/b;
// }

// console.log(divide(30,5))


// function add(a, b, callback) {
//     let result = a + b;
//     callback(result);
// }
// console.log(add(7,6))

// function subtract(a, b, callback) {
//     let result = a - b;
//     callback(result);
// }
// console.log(subtract(7,6))

// function multiply(a, b, callback) {
//     let result = a * b;
//     callback(result);
// }
// console.log(multiply(7,6))

// function divide(a, b, callback) {
//     let result = a / b;
//     callback(result);
// }

function add(a, b, callback) {
    setTimeout(() => {
      callback(a + b);
    }, 1000);
  }
  
  function subtract(a, b, callback) {
    setTimeout(() => {
      callback(a - b);
    }, 2000);
  }

  subtract(10,8, (res)=>{
    console.log(res)
  })
  
  function multiply(a, b, callback) {
    setTimeout(() => {
      callback(a * b);
      console.log("Multiple")
    }, 3000);
  }

  multiply(3,4, (res)=>{
    console.log(res)
  })
  
  function divide(a, b, callback) {
    setTimeout(() => {
      callback(a / b);
      console.log("last to divide  ")
    }, 4000);
  }

  divide(30, 7, (res)=>{
    console.log(res)
  })
  
  console.log("Program completed.");