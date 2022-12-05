const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController.js");

const router = Router();

router
  .get("/pessoas", PessoaController.listarPessoasAtivas)
  .get("/pessoas/todos", PessoaController.listarTodasPessoas)
  .get("/pessoas/:id", PessoaController.listarPessoasPorId)
  .get(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.listarMatriculaPorId
  )
  .get(
    "/pessoas/:estudanteId/matricula",
    PessoaController.listarMatriculaPorId
  )
  .get(
    "/pessoas/matricula/:turmaId/confirmadas",
    PessoaController.listarMatriculaPorTurma 
  )
  .post("/pessoas", PessoaController.cadastrarPessoa)
  .post("/pessoas/:estudanteId/matricula", PessoaController.criarMatricula)
  .put("/pessoas/:id", PessoaController.atualizarPessoa)
  .put(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.atualizarMatricula
  )
  .post("/pessoas/:id/restaura", PessoaController.restaurarPessoa)
  .delete("/pessoas/:id", PessoaController.deletarPessoa)
  .delete(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.deletarMatricula
  );

module.exports = router;
