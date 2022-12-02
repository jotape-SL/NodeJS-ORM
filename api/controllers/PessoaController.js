const db = require("../models");

class PessoaController {
  static async listarPessoasAtivas(req, res) {
    try {
      const todasPessoasAtivas = await db.Pessoas.findAll();
      return res.status(200).json(todasPessoasAtivas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async listarTodasPessoas(req, res) {
    try {
      const todasPessoas = await db.Pessoas.scope("todos").findAll();
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

  static async restaurarPessoa(req, res) {
    const id = req.params.id;
    try {
      await db.Pessoas.restore({ where: { id: Number(id) } });
      return res.status(200).send({ message: `Id: ${id} resturado.` });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async listarMatriculaPorId(req, res) {
    const { estudanteId, matriculaId } = req.params;
    try {
      const matricula = await db.Matriculas.findOne({
        where: { id: Number(matriculaId), estudante_id: Number(estudanteId) },
      });
      return res.status(200).json(matricula);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async criarMatricula(req, res) {
    const { estudanteId } = req.params;
    const matricula = { ...req.body, estudante_id: Number(estudanteId) };
    try {
      const matriculaCriada = await db.Matriculas.create(matricula);
      return res.status(201).json(matriculaCriada);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async atualizarMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    const info = req.body;
    try {
      await db.Matriculas.update(info, {
        where: { id: Number(matriculaId), estudante_id: Number(estudanteId) },
      });
      return res.status(200).send({ message: "Matricula atualizada" });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async deletarMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    try {
      await db.Matriculas.destroy({
        where: { id: Number(matriculaId) },
      });
      return res.status(200).send({
        message: `Matricula ${matriculaId} do estudante ${estudanteId} deletada.`,
      });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

module.exports = PessoaController;
