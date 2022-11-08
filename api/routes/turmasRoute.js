const { Router } = require("express");
const TurmaController = require("../controllers/TurmaController.js");

const router = Router();

router.get("/turmas", TurmaController.listarTurmas);
router.get("/turmas/:id", TurmaController.listarTurmaPorId);
router.post("/turmas", TurmaController.cadastrarTurma);
router.put("/turmas/:id", TurmaController.atualizarTurma);
router.delete("/turmas/:id", TurmaController.deletarTurma);

module.exports = router;
