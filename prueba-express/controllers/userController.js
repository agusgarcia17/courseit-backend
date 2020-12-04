class UserController {
    getUser(req,res) {
        res.send(`Hola ${req.params.name}`)
    }

    multiplyNumber(req,res) {
        res.send(`El numero multiplicado por dos es: ${req.params.number * 2} `);
    }

    checkPalindrome(req,res){
        const word = req.params.palabra

        const palindromo = word.split("").reverse().join("")
      
          if(palindromo === word) {
            res.send(`La frase ${word} es un palíndromo ya que al revés se lee: ${palindromo}.`);
          } else {
            res.send(`La frase ${word} NO es un palíndromo ya que al revés se lee: ${palindromo}`);
          }
    }
}

module.exports = UserController