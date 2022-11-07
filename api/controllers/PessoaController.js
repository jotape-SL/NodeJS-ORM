const db = require("../models");

class PessoaController {
  static async listarPessoas(req, res) {
    try {
      const todasPessoas = await db.Pessoas.findAll();
      return res.status(200).json(todasPessoas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async listarPessoasPorId(req, res) {
    const id = req.params.id;
    try {
      const umaPessoa = await db.Pessoas.findOne({ where: { id: Number(id) } });
      return res.status(200).json(umaPessoa);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;
