const { Router } = require("express");
const NiveisController = require("../controllers/NivelController.js");

const router = Router();

router.get("/niveis", NiveisController.listarNiveis);
router.get("/niveis/:id", NiveisController.listarNivelPorId);
router.post("/niveis", NiveisController.cadastrarNivel);
router.put("/niveis/:id", NiveisController.atualizarNivel);
router.delete("/niveis/:id", NiveisController.deletarNivel);

module.exports = router;
