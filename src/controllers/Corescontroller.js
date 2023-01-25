import Cores from "../schemas/Cores";


class Corescontroller {
    async post(req, res) {
        const { cor } = req.body
        const coreslist = await Cores.create({
            cor: cor
        })
        return res.json(coreslist)
    }

    async get(req, res) {
        const coreslist = await Cores.find()
        return res.json(coreslist)
    }

}

export default new Corescontroller();