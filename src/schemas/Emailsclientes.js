import { model, Schema } from 'mongoose'


const Emailsclientes = new Schema({
    nome: String,
    telefone: String,
    
})
export default new model('Emailsclientes',Emailsclientes)
