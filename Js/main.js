console.log('en', 'un', 'lugar', 'de', 'la', 'Mancha');
console.info('Info');
console.warn('Warning');
console.error('Error');


const nombre = prompt("Stephen", "Smith", "Max", "Luciano")
var btn = document.querySelector("button");
console.log(nombre);

const config = confirm("yes or no")
console.log(prompt('Answer', config))

btn.addEventListener("click", function(){
    alert("WHere are you from Chico!");
   
})