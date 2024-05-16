const Contratos = require("../models/contratos");

module.exports.list = ({ tipo, entidade }) => {
  const query = {};
  if (entidade) query.NIPC_entidade = entidade;
  if (tipo) query.tipo = tipo;

  return Contratos.find(query).exec();
};

module.exports.findById = (id) => {
  return Contratos.find({ _id: id });
};

module.exports.insert = async (item) => {
  item._id = new Date().getTime();
  return await Contratos.create(item);
};

module.exports.update = async (id, item) => {
  let result = await Contratos.updateOne({ _id: id }, item).exec();
  if (result.modifiedCount > 0) {
    return Contratos.find({ _id: id });
  } else {
    throw new Error("Error updating contratos");
  }
};

module.exports.remove = async (id) => {
  let result = await Contratos.deleteOne({ _id: id }).exec();
  if (result.deletedCount > 0) {
    return result;
  } else {
    throw new Error("Error deleting contratos");
  }
};

module.exports.listTipos = () => {
  let contratos = Contratos.find().exec();
  return contratos
    .then((contratos) => {
      let tipos = contratos.map((contrato) => contrato.tipo);
      return [...new Set(tipos)].sort();
    })
    .catch((error) => {
      throw new Error("Error getting tipos");
    });
};

module.exports.listEntidades = () => {
  let contratos = Contratos.find().exec();
  return contratos
    .then((contratos) => {
      let tipos = contratos.map((contrato) => contrato.entidade);
      return [...new Set(tipos)].sort();
    })
    .catch((error) => {
      throw new Error("Error getting tipos");
    });
};

