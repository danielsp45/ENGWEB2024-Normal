const mongoose = require("mongoose");
const { Schema } = mongoose;

const contratosSchema = new Schema({
  _id: Number,
  nAnuncio: String,
  tipo: String,
  objectoContrato: String,
  dataPublicacao: String,
  dataCelebracaoContrato: String,
  precoContratual: Number,
  prazoExecucao: Number,
  NIPC_entidade: Number,
  entidade: String,
  fundamentacao: String
}, { versionKey: false });

module.exports = mongoose.model('contratos', contratosSchema);
