const fs = require("fs")
const data = require("./data")
var catMe = require('cat-me')

console.log("Primer console.log")

let mensaje = `Hola, soy ${data.persona.name} y tengo ${data.persona.age} anios`

console.log(mensaje)

console.log(catMe())

fs.writeFile("mensaje.txt", mensaje, ()=>{
    console.log("archivo creado")
})