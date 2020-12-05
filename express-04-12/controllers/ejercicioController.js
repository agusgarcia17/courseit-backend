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
            "cantidad" :  `${primes.length}`,
            "numeros" : `${primes}`
        }

        res.json(numerosData)
}

async primosPokemon(req, res){
    const data = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=150`)
    const results = data.data.results
    
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

    // let pokemon = []

    // primes.forEach(num => {
    //     pokemon.push({
    //         "primeNumber": `${num}`,
    //         "pokemonName":`${results[num].name}`
    //     })

    // })


    let pokemon = primes.map(num => {
                return {
                    "primeNumber": `${num}`,
                    "pokemonName":`${results[num].name}`
                }
    })

    res.json(pokemon)
}

}

module.exports = AxiosController