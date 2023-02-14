// var saludos = function (persona) {
//     return "Hola, " + persona;
//     };
//     var usuario = "Marcos";
//     console.log(usuario);
//     document.body.innerHTML = saludos(usuario);


const h1 = document.querySelector("h1");


h1.addEventListener("click", () =>{
    h1.style.color = "red";
    h1.style.transform= "translateX(300px)";

    const div = document.createElement("div");
    div.innerText = "Hello"
    h1.append(div);

})