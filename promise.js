const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = () => {
  return new Promise((resolve, reject) => {
    resolve(promiseTheaterIXX());
    reject(promiseTheaterVGC());
  });
};

module.exports = {
  promiseOutput,
};
