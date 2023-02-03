import { model, Schema } from 'mongoose'

const Categorias = new Schema({
    categoria: String
})
export default new model('Categorias', Categorias)