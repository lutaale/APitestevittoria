import { model, Schema } from 'mongoose'

const Cores = new Schema({
    cor: String
})

export default new model('Cores', Cores)