// const frutas = ['Banana', 'Orange', 'Apple', 'Mango'];
// const lon = frutas.length;
// // for clásico
// for (let i = 0; i < lon; i++) {
// console.log(frutas[i])
// }
// // for...of
// for (let fruta of frutas) {
// console.log(fruta)
// }

// const coches = ['Saab', 'Volvo', 'BMW'];

// for(let coche in coches){
//     console.log(coche + "" +  "  cars")
// }

// const coches = ['Saab', 'Volvo', 'BMW'];
// // 4
// console.log(coches.push('Renault'));
// // ["Saab", "Volvo", "BMW", "Renault"]
// console.log(coches);


// const coche2 = ['Saab', 'Volvo', 'BMW'];
// coche2[coche2.length] = 'Renault';
// // ["Saab", "Volvo", "BMW", "Renault"]
// console.log(coche2);


// let price = 95;

// let money = 150;
// if(price >= 20 && price <= 80){
//     console.log('that is an average price')
// } else if(money >=100 || price <= 90){

//     console.log("you can afford this item");
// } else{
//     console.log("that's too expensive")
// }

let program = ["css", "java", "javascript", "html"]
// program.push("python")

// console.log(program.pop());
// program.unshift()

// console.log(program    )
// delete program[2]

// program.forEach(function(i){
//     console.log(i)
// })

// program.map((p)=>{
//     return document.write("<br >"+ p, "<br >")
// })
// const myGirls = ['Cecilie', 'Lone'];
// const myBoys = ['Emil', 'Tobias', 'Linus'];
// const myChildren = myGirls.concat(myBoys);
// ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]
// console.log(myChildren);


// let codes = ['phone', "books", "pen", "pencil", 2, "code"];
// let codes = [1,2,3,455,6,7]
// for(let code of codes ){
//     document.write("<br >"+ code, "<br >")
    
// }
// const puntos = [40, 100, 1, 5, 25, 10];
// // función para ordenación ascendente
// const puntos2 = puntos.sort((a, b) => a - b);

// document.write("<br>" + puntos2 + "<br>")


const btn = document.querySelector("button");

const h1 = document.querySelector("h1");
h1.addEventListener("click", function(){
    h1.style.color = "red";
    h1.style.textAlign = "center";
    h1.style.fontSize= "200px";
    btn.innerHTML = "Hello"
    btn.style.color = "teal";
    btn.ontoggle("move")
    
   


})


btn.addEventListener("click", function(){
 btn.setAttribute("style", "color: white")

})

// let array1 = [1, 2, 3, 4, 5];
// let array2 = [1, 2, 4, 6, 7];

// let count = (array1, array2);

// console.log(count); // 3






// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let lower = 2;
// let higher = 7;

// let extractedArray = (array, lower, higher);

// console.log(extractedArray); // [3, 4, 5, 6, 7, 8]


// let dataModels = [
//     {
//       id: 1,
//       name: "John Doe",
//       age: 30,
//       job: "Developer"
//     },
//     {
//       id: 2,
//       name: "Jane Doe",
//       age: 25,
//       job: "Designer"
//     },
//     {
//       id: 3,
//       name: "Jim Smith",
//       age: 35,
//       job: "Manager"
//     }
//   ];

//   for (let i = 0; i < dataModels.length; i++) {
//     let model = dataModels[i];
  
//     console.log("ID: " + model.id);
//     console.log("Name: " + model.name);
//     console.log("Age: " + model.age);
//     console.log("Job: " + model.job);
//     console.log("---");
//   }