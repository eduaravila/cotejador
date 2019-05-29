const mongoose = require("mongoose");

const conectar = async () => {
  try {
    mongoose.connect(
      `mongodb+srv://${process.env.USUARIODB}:${
        process.env.PASSWORDDB
      }@cluster0-tpuel.mongodb.net/test?retryWrites=true`
    );

    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

module.exports = conectar;
