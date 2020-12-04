class UserController {
    getUser(req,res) {
        res.send(`Hola ${req.params.name}`)
    }
}

module.exports = UserController