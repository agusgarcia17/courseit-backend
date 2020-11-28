const fs = require("fs")
const persona = require("./persona")
var catMe = require('cat-me')


console.log("Primer console.log")

let mensaje = `Hola, soy ${persona.name} y tengo ${persona.age} anios`

console.log(mensaje)

console.log(catMe())

fs.writeFile("mensaje.txt", mensaje, ()=>{
    console.log("archivo creado")
})