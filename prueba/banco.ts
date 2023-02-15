//Ejercicio 1 de Proyecto
// interface Person{
// nombre: string,
// dinero: number,
// numero: string, 

// }

type Persona = {
nombre: string,
dinero: number,
cuenta: string | number, 
}

let gestor: Persona = {
    nombre:"Pepito",
    dinero: 200,
    cuenta: "Cuenta X"
};
// interface Cliente{
//     nombre: string,
//     numCuenta: number,
//     saldoDisponible: number
//     }
//    type Cliente ={
//         nombre: string,
//         : number,
//         saldoDisponible: number
//         } 

let cliente:Persona = {
    nombre: "Juanito",
    dinero: 8074583224323,
    cuenta: 300
};

interface Mensaje{
    emisor: string | number,
    receptor: string| number,
    mensaje: string| number
}
let mensaje: Mensaje = {
    emisor: "Juanito",
    receptor: "Pepito",
    mensaje: "Hola gestor"
};


let transferencia: Mensaje = {
    emisor: 4324234,
    receptor: 5435435,
    mensaje: 400
};
//Ejercicio 2 de Proyecto
// let gestor3 = Object.keys(gestor);
// for (const key of gestor3) {
//     console.log(key);
// }
// let cliente3 = Object.keys(cliente);
// for (const key of cliente3) {
//     console.log(key);
// }
// let mensaje3 = Object.keys(mensaje);
// for (const key of mensaje3) {
//     console.log(key);
// }
// let transferencia3 = Object.keys(transferencia);
// for (const key of transferencia3) {
//     console.log(key);
// }