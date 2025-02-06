// javascript display possibilities
// innerhtml
document.getElementById("first").innerHTML =
  "teks ini dan angka dibawahnya menggunakan innerhtml";
document.getElementById("second").innerHTML = 5 + 17;

// write()
document.write("teks ini menggunakan write");

// alert
alert("teks ini menggunakan window.alert");

// console.log
let clog = "teks ini menggunakan console.log";
console.log(clog);

// variabel biasanya menggunakan var, let, const
// let, const lebih modern

/*let namo = "kerl",
  usio = 23,
  hobi = "tido";
let dato = namo + usio;
console.log(dato);
*/

// ini comment single line

/*
ini comment multi line
ini comment multi line
ini comment multi line
 */

let nama = "john doe";
const umur = 30;
console.log(nama + umur);

// string bisa menggunakan "" atau ''

/*let cools = 'brandon said"no"';
console.log(cools);
let talk = "lisa' the \n girl";
console.log(talk);*/

var x = 10;
console.log(x > 3);

// adding
let d = 12;
let g = 2;
let hasil = d + g;
console.log(hasil);

let won = 12;
let lose = 2;
console.log(won + lose);

// popup box

// alert("hello world!");

// var namee = prompt("masukkan nama: ");
// alert(namee);

var tes = confirm("are ya sure?");
if (tes === true) {
  alert("y re mine");
} else {
  alert("gone");
}
