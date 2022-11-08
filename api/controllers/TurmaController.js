const db = require("../models");

class TurmaController {
  static async listarTurmas(req, res) {
    try {
      const turmas = db.Turmas.findAll();
      res.status(200).json(turmas);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  static async listarTurmasPorId(req, res) {
    const id = req.params.id;
    try {
      const turma = db.Turmas.findOne({ where: { id: Number(id) } });
      res.status(200).json(turma);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async cadastrarTurma(req, res) {
    const turma = req.body;
    try {
      const turmaCriada = await db.Turmas.create(turma);
      return res.status(200).json(turmaCriada);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async atualizarTurma(req, res) {
    const info = req.body;
    const id = req.params.id;
    try {
      await db.Turmas.update(info, { where: { id: Number(id) } });
      return res.status(200).send({ message: "Dados atualizados" });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async deletarTurma(req, res) {
    const id = req.params.id;
    try {
      await db.Turmas.destroy({ where: { id: Number(id) } });
      return res.status(200).send({ message: `Turma ${id} deletada.` });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

module.exports = TurmaController;
