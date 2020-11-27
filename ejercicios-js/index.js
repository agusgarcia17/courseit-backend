//ejercicio 1
function diasDeLaSemana(a){

    // switch (a) {
    //     case 1:
    //     console.log("lunes")
    //         break;
    //     case 2:
    //         console.log("martes")
    //         break;
    //     case 3:
    //         console.log("miercoles")
    //         break;
    //     case 4:
    //         console.log("jueves")
    //         break;
    //     case 5:
    //         console.log("viernes")
    //         break;
    //     case 6:
    //         console.log("sabado")
    //         break;
    //     case 7:
    //         console.log("domingo")
    //         break;
    //     default:
    //         console.log("No es un dia válido")
    //     break;
    //     }


    const dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]

    if(a>0 && a<=7) {
        console.log(dias[a-1])
    } else {
        console.log("no es valido")
    }
  
}

// diasDeLaSemana(3)
// diasDeLaSemana(6)
// diasDeLaSemana(1)
// diasDeLaSemana(7)

//ejercicio 2

function diasDelMes(mes){
    const treinta = ["noviembre", "abril", "junio", "septiembre"]
    const treintayuno = ["enero", "diciembre", "marzo", "mayo", "julio", "agosto", "octubre" ]
    const veintiocho = ["febrero"]

    const mesLower=mes.toLowerCase()

    if(treinta.includes(mesLower)){
        console.log("Tiene 30 dias")
    } else if(treintayuno.includes(mesLower)){
        console.log("Tiene 31 dias")
    } else if(veintiocho.includes(mesLower)){
        console.log("Tiene 28 días")
    } else {
        console.log("no es un mes válido")
    }
}


// diasDelMes("Enero")
// diasDelMes("Marzo")
// diasDelMes("Agosto")
// diasDelMes("Pepe")
// diasDelMes("Abril")

// ejercicio 3

function positivoNegativo(num) {
    if(num>0){
        console.log("positivo")
    } else if(num<0){
        console.log("negativo")
    } else if(num === 0){
        console.log("es cero")
    } else {
        console.log("no es válido")
    }
}

// positivoNegativo(3)
// positivoNegativo(-3)
// positivoNegativo(-10)
// positivoNegativo(10)
// positivoNegativo("agus")

//ejercicio 4

function vocal(letra){
    const vocales = "aeiou"

    const letraLower = letra.toLowerCase()

    if(vocales.includes(letraLower)){
        console.log("es vocal")
    } else {
        console.log("no es vocal")
    }
}

// vocal("a")
// vocal("E")
// vocal("I")
// vocal("p")

// ejercicio 5

function mayor(x,y) {
    
    if(x === y) {
        console.log("son iguales")
    } else if( x>y) {
        console.log(`${x} es mayor`)
    } else if (x<y) {
        console.log(`${y} es mayor`)
    } else {
        console.log("no son validos")
    }
}

// mayor(7,8)
// mayor(15,8)
// mayor(16,23)
// mayor(16,16)
// mayor("agus",16)

// ejercicio 6

function unoAlDiez() {
for(let i=1; i<=10; i++){
    console.log(i)
}
}

// unoAlDiez()

// ejercicio 7

function imprimirNumeros(num){

    if(num >=0 ){
        for(let i = 0; i<=num; i++){
            console.log(i)
        }
    } else {
        console.log("no es valido")
    }
}

// imprimirNumeros(8)

// ejercicio 8 

function cuotas(tarjeta) {

    const tarjetaLower = tarjeta.toLowerCase()

    switch (tarjetaLower) {
        case "mastercard":
        console.log("hasta 6 cuotas s/interes")
        break;
        case "visa":
        console.log("hasta 9 cuotas s/interes")
        break;
        case "amex":
        console.log("hasta 3 cuotas s/interes")
        break;

        default:
        console.log("1 cuota sin interes")
        break;
    }
}

// cuotas("mastercard")
// cuotas("Visa")
// cuotas("Amex")
// cuotas("amex")
// cuotas("diners")

// ejercicio 9

function whileDiez(){
    let contador = 1

    while(contador <=10) {
        console.log(contador)
        contador ++
    }
}

// whileDiez()

//ejercicio 9.1

function cincuentaPares(){
    let cont = 0

    let num = 1

    while(cont < 50) {
        if(num%2 === 0){
            console.log(num)
            cont ++
        }
        num ++
    }
}

// cincuentaPares()

// ejercicio 9.2

function fizzBuzz(num){
    
    for(let i=0; i<=num; i++){
        if(i%3 === 0 && i%5 === 0){
            console.log("Fizzbuzz")
        } else if(i%5 === 0){
            console.log("Fizz")
        }else if(i%3 === 0){
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }

}

// fizzBuzz(3)
// fizzBuzz(5)
// fizzBuzz(15)

console.log(process.argv)