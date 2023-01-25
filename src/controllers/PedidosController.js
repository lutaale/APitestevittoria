import Pedidos from "../schemas/Pedidos";

class PedidosController {

    async post(req, res) {
        const { idpedido,idLojafranqueada, nomecliente, email, uid, cpf, produto: { modelo: modelo }, endereco, cep, data, hora, status, valor, codrastreio } = req.body
        const pedidolist = await Pedidos.create({
            idpedido: idpedido,
            idLojafranqueada:idLojafranqueada,
            nomecliente: nomecliente,
            email: email,
            uid: uid,
            cpf: cpf,
            produto: {
                modelo: modelo,
            },
            endereco: endereco,
            cep: cep,
            data: data,
            hora: hora,
            status: status,
            valor: valor,
            codrastreio: codrastreio

        })
        return res.json(pedidolist)
    }

    async get(req, res) {
        const pedidolist = await Pedidos.find()
        return res.json(pedidolist)
    }
    async get2(req, res) {
        const { uid } = req.query;
        const pedidolist = await Pedidos.find({ uid: uid })
        return res.json(pedidolist)
    }
    async get3(req, res) {
        const { idpedido } = req.query;
        const pedidolist = await Pedidos.find({ idpedido: idpedido })
        return res.json(pedidolist)
    }
    async get4(req, res) {
        const { status } = req.query;
        const pedidolist = await Pedidos.find({ status: status })
        return res.json(pedidolist)
    }
    async get5(req, res) {
        const { nomecliente } = req.query;
        const pedidolist = await Pedidos.find({ nomecliente: nomecliente })
        return res.json(pedidolist)
    }
    async get6(req, res) {
        const { cpf } = req.query;
        const pedidolist = await Pedidos.find({ cpf: cpf })
        return res.json(pedidolist)
    }
    async get7(req, res) {
        const { valor } = req.query;
        const pedidolist = await Pedidos.find({ valor: valor })
        return res.json(pedidolist)
    }
      async get8(req, res) {
        const { data } = req.query;
        const pedidolist = await Pedidos.find({ data: data })
        return res.json(pedidolist)
    }
       async get9(req, res) {
        const { idLojafranqueada } = req.query;
        const pedidolist = await Pedidos.find({ idLojafranqueada: idLojafranqueada })
        return res.json(pedidolist)
    }
        async get10(req, res) {
        const { idLojafranqueada,uid } = req.query;
        const pedidolist = await Pedidos.find({ idLojafranqueada: idLojafranqueada,uid:uid })
        return res.json(pedidolist)
    }
       async get11(req, res) {
        const { idLojafranqueada,status } = req.query;
        const pedidolist = await Pedidos.find({ idLojafranqueada: idLojafranqueada,status:status })
        return res.json(pedidolist)
    }
        async get12(req, res) {
        const { idLojafranqueada,cpf } = req.query;
        const pedidolist = await Pedidos.find({ idLojafranqueada: idLojafranqueada,cpf:cpf })
        return res.json(pedidolist)
    }
   
   
       async delete(req, res) {
        const { _id } = req.params;
        const pedidolist = await Pedidos.deleteOne({ _id: _id })
        return res.json(pedidolist)
    }
    
    async update(req, res) {
        const { idpedido } = req.params
        const { idLojafranqueada,nomecliente, email, uid, cpf, produto: { modelo: modelo }, endereco, cep, data, hora, status, valor, codrastreio } = req.body
        const pedidolist = await Pedidos.updateOne({ idpedido: idpedido }, {
            idpedido: idpedido,
            idLojafranqueada:idLojafranqueada,
            nomecliente: nomecliente,
            email: email,
            uid: uid,
            cpf: cpf,
            produto: {
                modelo: modelo,
            },
            endereco: endereco,
            cep: cep,
            data: data,
            hora: hora,
            status: status,
            valor: valor,
            codrastreio: codrastreio
        })

        return res.json(pedidolist)
    }
}
export default new PedidosController();
