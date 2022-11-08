const db = require("../models");

class NivelController {
  static async listarNiveis(req, res) {
    try {
      const niveis = await db.Niveis.findAll();
      return res.status(200).json(niveis);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async listarNivelPorId(req, res) {
    const id = req.params.id;
    try {
      const nivel = await db.Niveis.findOne({ where: { id: Number(id) } });
      return res.status(200).json(nivel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async cadastrarNivel(req, res) {
    const nivel = req.body;
    try {
      const nivelCriado = await db.Niveis.create(nivel);
      return res.status(200).json(nivelCriado);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async atualizarNivel(req, res) {
    const info = req.body;
    const id = req.params.id;
    try {
      await db.Niveis.update(info, { where: { id: Number(id) } });
      return res.status(200).send({ message: "Dados atualizados" });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async deletarNivel(req, res) {
    const id = req.params.id;
    try {
      await db.Niveis.destroy({ where: { id: Number(id) } });
      return res.status(200).send({ message: `Nivel ${id} deletado.` });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

module.exports = NivelController;
