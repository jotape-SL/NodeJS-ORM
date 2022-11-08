const { Router } = require("express");
const TurmaController = require("../controllers/TurmaController.js");

const router = Router();

router.get("/turma", TurmaController.listarTurmas);
router.get("/turma/:id", TurmaController.listarTurmaPorId);
router.post("/turma", TurmaController.cadastrarTurma);
router.put("/turma/:id", TurmaController.atualizarTurma);
router.delete("/turma/:id", TurmaController.deletarTurma);

module.exports = router;
