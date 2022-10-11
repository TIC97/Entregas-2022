const nombre = prompt("Ingrese su  nombre")
const apellido = prompt("Ingrese su  apellido")
const edad = prompt("Ingrese su edad")
const pais = prompt("Ingrese su pais")
const cuidad = prompt("Ingrese su  cuidad")
const email = prompt("Ingrese su email")
const telefono = prompt("Ingrese  su  telefono")
const identificacionMax = 10000;
const identificacionMin = 0;
function numberUser(min, max){
    return Math.floor(Math.random() * (max - min) + min);
};



const datosUsuarios = [];

function Formulario (nombre, apellido, edad, pais, cuidad, email, telefono) {
    this.id = numberUser(identificacionMin, identificacionMax),
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad,
    this.pais = pais,
    this.cuidad = cuidad,
    this.email = email,
    this.telefono = telefono
}

const nuevoUsuario = new Formulario(nombre, apellido, edad, pais, cuidad, email,telefono)

console.log(nuevoUsuario);



function cargarUsuario (arr, valor) {
    arr.push(valor);
}
cargarUsuario(datosUsuarios, nuevoUsuario);

console.log(datosUsuarios);
 
// FOR OF ? PARA RECORRER EL ARRAY, FILTER PARA DEVOLVER ID DE USER A TRAVEZ DE UN MAP

const cantidadUsers = datosUsuarios.map((el) => { return el.id})

console.log(cantidadUsers);


/* function filtrarUsuario(arr, filtro) {
    const filtrar = arr.filter ((el)=>{
        return el.id
    })
}
console.log(filtrarUsuario(datosUsuarios, numberUser)); */