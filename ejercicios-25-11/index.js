//Queremos hacer que la funci�n vowelCounter retorne la cantidad de vocales que tiene el array 'arr'

/*
function vowelCounter(arr) {
  let vowels = "aeiou"

  let counter = 0

  arr.forEach(letter => {
        vowels.includes(letter.toLowerCase()) ? counter ++ : ""
  })

  return counter
}

const firstArr = vowelCounter(['a','b','c','d','e'])
console.log(firstArr)

const secondArr = vowelCounter(['c', 'o', 'u', 'r', 's', 'e', 'i', 't'])
console.log(secondArr)
*/

// Queremos hacer que la funci�n vowelCounter retorne la cantidad de vocales que tiene el par�metro 'str'

/*
function vowelCounter(str) {
    let vowels = "aeiou"

  let counter = 0

  for(let i=0; i<str.length; i++){
    vowels.includes(str[i].toLowerCase()) ? counter ++ : ""
  } 

  return counter
}

const vowelsJuani = vowelCounter('juani')
console.log(vowelsJuani)

const vowelsCourseIt = vowelCounter('courseit')
console.log(vowelsCourseIt)
*/

// La funcion fixMe no esta devolviendo el resultado esperado, queremos modificarla para que devuelva la multiplicacion entre a y b
/*
function fixMe(a, b) { 
  return a * b 
}

const mult = fixMe(2, 2)
console.log(mult)
*/

// Crear una clase contador que tenga la funcionalidad para sumar numeros, restar numeros, resetear el contador y acceder al valor actual del contador.

function counter(){

    let value = 1

    return{
        sumarValue: a => value + a,
        restarValue: a => value - a,
        resetValue: () => value = 0,
        value: () => value,

    }
}



/*Crear una funcion que diga todos los elementos que aparecen mas de una vez en un array.

Ejemplo:

const arr = [1,2,3,2,3,4,1] // [2,3,1]

*/
/*
function repetido(arr){

    let duplicados = [];
    const sorted = arr.sort((a, b) => a - b);
  
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] == sorted[i + 1]) {
        duplicados.push(sorted[i]);
      }
    }
    const newSet = [...new Set(duplicados)];
    return newSet;
}

repetido([1,2,3,2,3,4,1] )
*/

/*
Crear una funcion que devuelva el mayor numero dentro de un array

Ejemplo

const arr = [3,5,1,10,23,13] // 23

*/

function mayor(arr){

    let ordenado = arr.sort((a,b)=>a-b)
 
    return ordenado.pop()

}

// console.log( mayor([3,5,1,10,23,13]))

/*
Crear una funcion que devuelva los dos numeros mas grandes dentro de un array

Ejemplo

const arr = [3,5,1,10,23,13] // 23,13

*/

function dosMayores(arr){

    let ordenado = arr.sort((a,b)=>a-b)


    return( ordenado.pop() + "," + ordenado.pop()) 

}

// console.log(dosMayores([3,5,1,10,23,13]))

/*Crear una funcion que diga todos los elementos que aparecen solo una vez en un array.

Ejemplo:

const arr = [1,2,3,2,3,4,1] // 4

*/

function noRepetido(arr){

    let unicos = [];
    const sorted = arr.sort((a, b) => a - b);
  
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] !== sorted[i + 1] && sorted[i] !== sorted[i - 1] ) {
        unicos.push(sorted[i]);
      }
    }
    
    return unicos;
}

// console.log(noRepetido([-1, 'a', 'b', 'a', 0]))

// function findDuplicates(arr) {
//   const items = []
//   const dup = [] 
  
//   for (let i = 0; i < arr.length; i++) {
//     const actual = arr[i]
//     if (items.includes(actual) && !dup.includes(actual)) {
//       dup.push(actual)
//     } else {
//       items.push(actual)
//     }
//   } 
 
//   return dup
// }


function unique(arr) { 
  
  let unicos = []

  for(let i=0; i<arr.length; i++){
  
  let newArr = [...arr]
  
  newArr.splice(i, 1)
    
    if(!newArr.includes(arr[i])){
       
       unicos.push(arr[i])
  }
  } 
  return unicos
}

console.log(unique([-1, 'a', 'b', 'a', 0]))


/*
Crear una funcion que devuelva el string que le enviamos pero invertido.

reverse('juani') // inauj

*/


function reverse(str){

    let newStr = []

    for(let i=0; i<str.length; i++){

        newStr.unshift(str[i])
    }

    return(newStr.join("").toLowerCase())
}

// console.log(reverse('juani'))

/*Crear una funcion que determine si una palabra es palindromo o no.

Ejemplo

palindrome('juani') // false palindrome('sugus') // true

*/

function palindrome(str){

    let revertida = reverse(str) 

    if(revertida === str.toLowerCase()){
        return true
    } else {
        return false
    }


}

// console.log(palindrome('sugus'))