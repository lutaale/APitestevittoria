import { Schema, model } from "mongoose";

const Produtos = new Schema({
  produto: String,
  precomaior: String,
  preco: String,
  modelo: String,
  marca: String,
  tipo: String,
  categoria: String,
  descricao: String,
  promocao: Boolean,
  promocao2: Boolean,
  qtdpromocao2: Number,
  desconto: String,
  subcategoria1: String,
  subcategoria2: String,
  subcategoria3: String,
  subcategoria4: String,
  cores: {
    corPrimary: {
      imgurl: String,
      imgurl2: String,
      imgurl3: String,
      cor1: String,

      tamanhos: {
        tamanhoOne: { tamanho1: String, quantidade: String },
        tamanhoTwo: { tamanho2: String, quantidade2: String },
        tamanhoThree: { tamanho3: String, quantidade3: String },
        tamanhoFour: { tamanho4: String, quantidade4: String },
      },
    },
    corSecondary: {
      imgurl4: String,
      imgurl5: String,
      imgurl6: String,
      cor2: String,
      tamanhos: {
        tamanhoOne: { tamanho5: String, quantidade5: String },
        tamanhoTwo: { tamanho6: String, quantidade6: String },
        tamanhoThree: { tamanho7: String, quantidade7: String },
        tamanhoFour: { tamanho8: String, quantidade8: String },
      },
    },
    corTertiary: {
      imgurl7: String,
      imgurl8: String,
      imgurl9: String,
      cor3: String,
      tamanhos: {
        tamanhoOne: { tamanho9: String, quantidade9: String },
        tamanhoTwo: { tamanho10: String, quantidade10: String },
        tamanhoThree: { tamanho11: String, quantidade11: String },
        tamanhoFour: { tamanho12: String, quantidade12: String },
      },
    },
    corQuaternary: {
      imgurl10: String,
      imgurl11: String,
      imgurl12: String,
      cor4: String,
      tamanhos: {
        tamanhoOne: { tamanho13: String, quantidade13: String },
        tamanhoTwo: { tamanho14: String, quantidade14: String },
        tamanhoThree: { tamanho15: String, quantidade15: String },
        tamanhoFour: { tamanho16: String, quantidade16: String },
      },
    },
    corFive: {
      imgurl13: String,
      imgurl14: String,
      imgurl15: String,
      cor5: String,
      tamanhos: {
        tamanhoOne: { tamanho17: String, quantidade17: String },
        tamanhoTwo: { tamanho18: String, quantidade18: String },
        tamanhoThree: { tamanho19: String, quantidade19: String },
        tamanhoFour: { tamanho20: String, quantidade20: String },
      },
    },
    corSix: {
      imgurl16: String,
      imgurl17: String,
      imgurl18: String,
      cor6: String,
      tamanhos: {
        tamanhoOne: { tamanho21: String, quantidade21: String },
        tamanhoTwo: { tamanho22: String, quantidade22: String },
        tamanhoThree: { tamanho23: String, quantidade23: String },
        tamanhoFour: { tamanho24: String, quantidade24: String },
      },
    },
  },
});

export default model("Produtos", Produtos);
