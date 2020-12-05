const axios = require("axios");

class UserController {
    async getUser(req, res) {

        const github = await axios.get(`https://api.github.com/users/${req.params.id}`);
        // console.log(data)
        res.send(github.data)
    }

    async getUserInfo(req, res) {

        const github = await axios.get(`https://api.github.com/users/${req.params.id}`);
        // console.log(data)

        const modelData = {
            "Nombre": `${github.data.name}`,
            "Empresa": `${github.data.company}`,
            "Bio": `${github.data.bio}`,
            "Edad" : 28,
            "Gusto de helado" : "Menta granizada"
        }

        res.json(modelData)
    }
}

module.exports = UserController;