var axios = require("axios");
var express = require("express");
var router = express.Router();

/* GET contratos page */
router.get("/entidade/:id", function(req, res, next) {
  axios
    .get("http://localhost:16000/contratos?entidade=" + req.params.id)
    .then(function(response) {
      // calculate the sum of all of the `precoContratual` in the response data and be ready for cases where precoContratual is not present
      let sum = response.data.reduce((acc, item) => acc + item.precoContratual, 0);
      res.render("entidadesShow", { nome: response.data[0].entidade, clist: response.data, sum: sum });
    })
    .catch(function(error) {
      res.render("error", { error: error });
    });
});

/* GET contratos page */
router.get("/", function(req, res, next) {
  axios.get("http://localhost:16000/contratos").then(function(response) {
    // console log the first item in the response data
    res.render("contratosShow", { clist: response.data });
  });
});

/* GET contratos page */
router.get("/:id", function(req, res, next) {
  axios
    .get("http://localhost:16000/contratos/" + req.params.id)
    .then(function(response) {
      res.render("contratosIndex", { contrato: response.data[0] });
    })
    .catch(function(error) {
      res.render("error", { error: error });
    });
});


module.exports = router;
