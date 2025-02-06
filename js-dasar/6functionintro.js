// built-in function
// contoh built-in function:
// string function
const text = "hola erik!";
console.log(text.toUpperCase()); //HOLA ERIK!
console.log(text.length); //10

// math function
console.log(Math.max(10, 20, 45)); //45
console.log(Math.random()); //angka random antara 0 & 1

// array function
const arr = [1, 2, 3, 4];
console.log(arr.join("-")); //1-2-3-4
console.log(arr.reverse()); //[4,3,2,1]

// date function
const today = new Date();
console.log(today.toDateString()); //akan menampilkan tanggal hari ini

// user-defined function
// function declaration
function tmbh(a, b) {
  var total;
  total = a + b;
  return total;
}
console.log(tmbh(3, 5));

// function expression
var tmbh2 = function (c, d) {
  var total2;
  total2 = c + d;
  return total2;
};
console.log(tmbh2(3, 5));

// Contoh User-defined Function:
// tanpa parameter
function sapa() {
  console.log("hola, erik!");
}
sapa(); //hola, erik!

// dengan parameter
function tambah(o1, o2) {
  return o1 + o2;
}
console.log(tambah(5, 2));

// dengan logika khusus
function cek(angka) {
  return angka % 2 === 0 ? "genap" : "ganjil";
}
console.log(cek(10)); //masukkan angka dibaris ini

// arrow function
const pangkat = (angka, pangkat) => angka ** pangkat;
console.log(pangkat(2, 5)); //2 pangkat 5 = 32
