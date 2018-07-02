const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

module.exports = mongoose.connect(
  "mongodb://mymoneyapp:study102030@ds018268.mlab.com:18268/my-money-app"
);

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório.";
mongoose.Error.messages.Number.min =
  "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'.";
mongoose.Error.messages.Number.max =
  "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'.";
mongoose.Error.messages.String.enum =
  "O '{VALUE}' não é válido para o atributo '{PATH}'.";
