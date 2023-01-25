import Produtos from "../schemas/Produtos";

class ProdutoController {
  async index(req, res) {
    const Produtolist = await Produtos.find();

    return res.json(Produtolist);
  }

  async index2(req, res) {
    const { _id } = req.query;
    const Produtolist = await Produtos.findOne({ _id: _id });
    return res.json(Produtolist);
  }

  async index3(req, res) {
    const { produto } = req.query;
    const Produtolist = await Produtos.find({ produto: produto });
    return res.json(Produtolist);
  }

  async index4(req, res) {
    const { preco } = req.query;
    const Produtolist = await Produtos.find({ preco: preco });
    return res.json(Produtolist);
  }
  async index5(req, res) {
    const { marca } = req.query;
    const Produtolist = await Produtos.find({ marca: marca });
    return res.json(Produtolist);
  }
  async index6(req, res) {
    const { modelo } = req.query;
    const Produtolist = await Produtos.find({ modelo: modelo });
    return res.json(Produtolist);
  }
  async index7(req, res) {
    const { promocao } = req.query;
    const Produtolist = await Produtos.find({ promocao: promocao });
    return res.json(Produtolist);
  }
  async index8(req, res) {
    const { promocao2 } = req.query;
    const Produtolist = await Produtos.find({ promocao2: promocao2 });
    return res.json(Produtolist);
  }
  async index9(req, res) {
    const { desconto } = req.query;
    const Produtolist = await Produtos.find({ desconto: desconto });
    return res.json(Produtolist);
  }

  async store(req, res) {
    const {
      produto: {
        modelo,
        marca,
        descricao,
        promocao,
        promocao2,
        qtdpromocao2,
        precomaior,
        preco,
        desconto,
        categoria,
        subcategoria1,
        subcategoria2,
        subcategoria3,
        subcategoria4,
        cor: {
          cor1,
          T1: { tamanho1, quantidade1 },
          T2: { tamanho2, quantidade2 },
          T3: { tamanho3, quantidade3 },
          T4: { tamanho4, quantidade4 },
          foto1,
          foto2,
          foto3,
          foto4,
        },
        cor: {
          cor2,
          T5: { tamanho5, quantidade5 },
          T6: { tamanho6, quantidade6 },
          T7: { tamanho7, quantidade7 },
          T8: { tamanho8, quantidade8 },
          foto5,
          foto6,
          foto7,
          foto8,
        },
        cor: {
          cor3,
          T9: { tamanho9, quantidade9 },
          T10: { tamanho10, quantidade10 },
          T11: { tamanho11, quantidade11 },
          T12: { tamanho12, quantidade12 },
          foto9,
          foto10,
          foto11,
          foto12,
        },
        cor: {
          cor4,
          T13: { tamanho13, quantidade13 },
          T14: { tamanho14, quantidade14 },
          T15: { tamanho15, quantidade15 },
          T16: { tamanho16, quantidade16 },
          foto13,
          foto14,
          foto15,
          foto16,
        },
        cor: {
          cor5,
          T17: { tamanho17, quantidade17 },
          T18: { tamanho18, quantidade18 },
          T19: { tamanho19, quantidade19 },
          T20: { tamanho20, quantidade20 },
          foto17,
          foto18,
          foto19,
          foto20,
        },
        cor: {
          cor6,
          T21: { tamanho21, quantidade21 },
          T22: { tamanho22, quantidade22 },
          T23: { tamanho23, quantidade23 },
          T24: { tamanho24, quantidade24 },
          foto21,
          foto22,
          foto23,
          foto24,
        },
      }

    } = req.body;

    const Produtolist = await Produtos.create({
      produto: {
        modelo,
        marca,
        descricao,
        promocao,
        promocao2,
        qtdpromocao2,
        precomaior,
        preco,
        desconto,
        categoria,
        subcategoria1,
        subcategoria2,
        subcategoria3,
        subcategoria4,
        cor: {
          cor1,
          T1: { tamanho1, quantidade1 },
          T2: { tamanho2, quantidade2 },
          T3: { tamanho3, quantidade3 },
          T4: { tamanho4, quantidade4 },
          foto1,
          foto2,
          foto3,
          foto4,
        },
        cor: {
          cor2,
          T5: { tamanho5, quantidade5 },
          T6: { tamanho6, quantidade6 },
          T7: { tamanho7, quantidade7 },
          T8: { tamanho8, quantidade8 },
          foto5,
          foto6,
          foto7,
          foto8,
        },
        cor: {
          cor3,
          T9: { tamanho9, quantidade9 },
          T10: { tamanho10, quantidade10 },
          T11: { tamanho11, quantidade11 },
          T12: { tamanho12, quantidade12 },
          foto9,
          foto10,
          foto11,
          foto12,
        },
        cor: {
          cor4,
          T13: { tamanho13, quantidade13 },
          T14: { tamanho14, quantidade14 },
          T15: { tamanho15, quantidade15 },
          T16: { tamanho16, quantidade16 },
          foto13,
          foto14,
          foto15,
          foto16,
        },
        cor: {
          cor5,
          T17: { tamanho17, quantidade17 },
          T18: { tamanho18, quantidade18 },
          T19: { tamanho19, quantidade19 },
          T20: { tamanho20, quantidade20 },
          foto17,
          foto18,
          foto19,
          foto20,
        },
        cor: {
          cor6,
          T21: { tamanho21, quantidade21 },
          T22: { tamanho22, quantidade22 },
          T23: { tamanho23, quantidade23 },
          T24: { tamanho24, quantidade24 },
          foto21,
          foto22,
          foto23,
          foto24,
        },
      }
    });

    return res.json(Produtolist);
  }

  async delete(req, res) {
    const { _id } = req.params;
    const Produtolist = await Produtos.deleteOne({ _id: _id });
    return res.json(Produtolist);
  }

  async update(req, res) {
    const { _id } = req.params;

    const {
      produto: produto,
      preco: preco,
      modelo: modelo,
      marca: marca,
      tipo: tipo,
      categoria: categoria,
      descricao: descricao,
      promocao: promocao,
      promocao2: promocao2,
      qtdpromocao2: qtdpromocao2,
      desconto: desconto,
      cores: {
        corPrimary: {
          imgurl: imgurl,
          imgurl2: imgurl2,
          cor1: cor1,
          tamanhos: {
            tamanhoOne: { tamanho1: tamanho1, quantidade: quantidade },
            tamanhoTwo: { tamanho2: tamanho2, quantidade2: quantidade2 },
            tamanhoThree: { tamanho3: tamanho3, quantidade3: quantidade3 },
            tamanhoFour: { tamanho4: tamanho4, quantidade4: quantidade4 },
          },
        },
        corSecondary: {
          imgurl3: imgurl3,
          imgurl4: imgurl4,
          cor2: cor2,
          tamanhos: {
            tamanhoOne: { tamanho5: tamanho5, quantidade5: quantidade5 },
            tamanhoTwo: { tamanho6: tamanho6, quantidade6: quantidade6 },
            tamanhoThree: { tamanho7: tamanho7, quantidade7: quantidade7 },
            tamanhoFour: { tamanho8: tamanho8, quantidade8: quantidade8 },
          },
        },
        corTertiary: {
          imgurl5: imgurl5,
          imgurl6: imgurl6,
          cor3: cor3,
          tamanhos: {
            tamanhoOne: { tamanho9: tamanho9, quantidade9: quantidade9 },
            tamanhoTwo: { tamanho10: tamanho10, quantidade10: quantidade10 },
            tamanhoThree: { tamanho11: tamanho11, quantidade11: quantidade11 },
            tamanhoFour: { tamanho12: tamanho12, quantidade12: quantidade12 },
          },
        },
        corQuaternary: {
          imgurl7: imgurl7,
          imgurl8: imgurl8,
          cor4: cor4,
          tamanhos: {
            tamanhoOne: { tamanho13: tamanho13, quantidade13: quantidade13 },
            tamanhoTwo: { tamanho14: tamanho14, quantidade14: quantidade14 },
            tamanhoThree: { tamanho15: tamanho15, quantidade15: quantidade15 },
            tamanhoFour: { tamanho16: tamanho16, quantidade16: quantidade16 },
          },
        },
      },
    } = req.body;
    const Produtolist = await Produtos.updateOne(
      { _id: _id },
      {
        produto: produto,
        preco: preco,
        modelo: modelo,
        marca: marca,
        tipo: tipo,
        categoria: categoria,
        descricao: descricao,
        promocao: promocao,
        promocao2: promocao2,
        qtdpromocao2: qtdpromocao2,
        desconto: desconto,
        cores: {
          corPrimary: {
            imgurl: imgurl,
            imgurl2: imgurl2,
            cor1: cor1,
            tamanhos: {
              tamanhoOne: { tamanho1: tamanho1, quantidade: quantidade },
              tamanhoTwo: { tamanho2: tamanho2, quantidade2: quantidade2 },
              tamanhoThree: { tamanho3: tamanho3, quantidade3: quantidade3 },
              tamanhoFour: { tamanho4: tamanho4, quantidade4: quantidade4 },
            },
          },
          corSecondary: {
            imgurl3: imgurl3,
            imgurl4: imgurl4,
            cor2: cor2,
            tamanhos: {
              tamanhoOne: { tamanho5: tamanho5, quantidade5: quantidade5 },
              tamanhoTwo: { tamanho6: tamanho6, quantidade6: quantidade6 },
              tamanhoThree: { tamanho7: tamanho7, quantidade7: quantidade7 },
              tamanhoFour: { tamanho8: tamanho8, quantidade8: quantidade8 },
            },
          },
          corTertiary: {
            imgurl5: imgurl5,
            imgurl6: imgurl6,
            cor3: cor3,
            tamanhos: {
              tamanhoOne: { tamanho9: tamanho9, quantidade9: quantidade9 },
              tamanhoTwo: { tamanho10: tamanho10, quantidade10: quantidade10 },
              tamanhoThree: { tamanho11: tamanho11, quantidade11: quantidade11 },
              tamanhoFour: { tamanho12: tamanho12, quantidade12: quantidade12 },
            },
          },
          corQuaternary: {
            imgurl7: imgurl7,
            imgurl8: imgurl8,
            cor4: cor4,
            tamanhos: {
              tamanhoOne: { tamanho13: tamanho13, quantidade13: quantidade13 },
              tamanhoTwo: { tamanho14: tamanho14, quantidade14: quantidade14 },
              tamanhoThree: { tamanho15: tamanho15, quantidade15: quantidade15 },
              tamanhoFour: { tamanho16: tamanho16, quantidade16: quantidade16 },
            },
          },
        },
      }
    );
    return res.json(Produtolist);
  }
}

export default new ProdutoController();
