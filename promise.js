const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let jumlahEmosi = 0;
  const teaterIXX = await promiseTheaterIXX();
  const teaterVGC = await promiseTheaterVGC();
  //gabung teaterIXX & teaterVGC to teater
  const teater    = teaterIXX.concat(teaterVGC);

  //looping teater dan ambil jumlahEmosi
  for (let i=0; i<teater.length; i++){
    if (teater[i].hasil == emosi){
        jumlahEmosi++;
    }     
  }
  //kemablikan nilai jumlahEmosi
  return jumlahEmosi;
};

module.exports = {
  promiseOutput,
};
