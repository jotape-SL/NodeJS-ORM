const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController.js");

const router = Router();

router.get("/pessoas", PessoaController.listarPessoas);
router.get("/pessoas/:id", PessoaController.listarPessoasPorId);
router.post("/pessoas", PessoaController.cadastrarPessoa);

module.exports = router;
