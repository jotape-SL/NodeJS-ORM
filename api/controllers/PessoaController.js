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
}

module.exports = PessoaController;
