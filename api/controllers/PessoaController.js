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

  static async cadastrarPessoa(req, res) {
    const pessoa = req.body;
    try {
      const pessoaCriada = await db.Pessoas.create(pessoa);
      return res.status(201).json(pessoaCriada);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async atualizarPessoa(req, res) {
    const info = req.body;
    const id = req.params.id;
    try {
      await db.Pessoas.update(info, { where: { id: Number(id) } });
      return res.status(200).send({ message: "Dados atualizados" });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async deletarPessoa(req, res) {
    const id = req.params.id;
    try {
      await db.Pessoas.destroy({ where: { id: Number(id) } });
      return res.status(200).send({ message: `Pessoa ${id} deletada.` });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

module.exports = PessoaController;
