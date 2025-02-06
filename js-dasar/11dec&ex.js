// declaration
function tambah(a, b) {
  return a + b;
}
console.log(tambah(12, 4));

// hoisting func. declaration
console.log(kali(2, 5)); //(Bisa dipanggil sebelum dideklarasikan)
function kali(c, d) {
  return c * d;
}

//expression
const kurang = function (e, f) {
  return e - f;
};
console.log(kurang(4, 13));

// func. expression tidak bisa hoisting, ketika kode diabawah dijalankan maka akan error

const bagi = function (g, h) {
  return g / h;
};
console.log(bagi(12, 3));
