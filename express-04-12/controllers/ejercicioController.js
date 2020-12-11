const axios = require("axios");

class AxiosController{

     calcularPrimos(req, res){        
        let primes = []
        for (var x = 1; x <= 150; x++) {
            
            var notPrime = false;
            for (var i = 2; i <= x; i++) {
                if (x%i===0 && i!==x) {
                    notPrime = true;
                }
            }
            if (notPrime === false) {
                primes.push(x);
            }
        }
        
        // res.send(`Existen ${primes.length} numeros primos hasta el 150 y son ${primes}`)

        const numerosData = {
            "cantidad" : `${primes.length}`,
            "numeros" : `${primes}`
        }

        res.json(numerosData)
}
    checkPrime(num) {
        let isPrime = true;
        for (let i = 2; i <= 150; i++) {
            if (num%i===0 && i!==num) {
                isPrime = false;
            }
        } 
        return isPrime
    } 

    async primosPokemon(req, res){
    
        const data = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=150`)
        const results = data.data.results
        
 
    let pokemon = results
        .map((num, i) => { 
        const id = i+1
        if(this.checkPrime(id)) {
            return {
                "primeNumber": `${id}`,
                "pokemonName":`${results[i].name}`
            }
        } 
    }) 
        .filter((item)=>{
            if(item !== null){
                return item
            }
    })

    res.json(pokemon)
}

}

module.exports = AxiosController