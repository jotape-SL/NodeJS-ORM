const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController.js");

const router = Router();

router.get("/pessoas", PessoaController.listarPessoas);
router.get("/pessoas/:id", PessoaController.listarPessoasPorId);
router.get(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.listarMatriculaPorId
);
router.post("/pessoas", PessoaController.cadastrarPessoa);
router.post("/pessoas/:estudanteId/matricula", PessoaController.criarMatricula);
router.put("/pessoas/:id", PessoaController.atualizarPessoa);
router.put(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.atualizarMatricula
);
router.delete("/pessoas/:id", PessoaController.deletarPessoa);
router.delete(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.deletarMatricula
);

module.exports = router;
