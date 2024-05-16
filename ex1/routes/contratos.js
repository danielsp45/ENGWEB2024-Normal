
var express = require("express");
var router = express.Router();
var Contratos = require("../controllers/contratos");

router.get("/tipos", function(req, res, next) {
  Contratos.listTipos()
    .then((dados) => res.jsonp(dados))
    .catch((error) =>
      res.status(500).jsonp({ error: "There was an error with the server" }),
    );
});

router.get("/entidades", function(req, res, next) {
  Contratos.listEntidades()
    .then((dados) => res.jsonp(dados))
    .catch((error) =>
      res.status(500).jsonp({ error: "There was an error with the server" }),
    );
});


router.get("/", function(req, res, next) {
  const { tipo, entidade } = req.query;

  Contratos.list({ tipo, entidade })
    .then((dados) => res.jsonp(dados))
    .catch((error) =>
      res.status(500).jsonp({ error: "There was an error with the server" }),
    );
});

router.get("/:id", function(req, res, next) {
  Contratos.findById(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((error) =>
      res.status(500).jsonp({ error: "There was an error with the server" }),
    );
});

router.post("/", function(req, res, next) {
  Contratos.insert(req.body)
    .then((dados) => res.jsonp(dados))
    .catch((error) =>
      res.status(500).jsonp({ error: "There was an error with the server" }),
    );
});

router.put("/:id", function(req, res, next) {
  Contratos.update(req.params.id, req.body)
    .then((dados) => res.jsonp(dados))
    .catch((error) =>
      res.status(500).jsonp({ error: "There was an error with the server" }),
    );
});

router.delete("/:id", function(req, res, next) {
  Contratos.remove(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((error) =>
      res.status(500).jsonp({ error: "There was an error with the server" }),
    );
});

module.exports = router;
