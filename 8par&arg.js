// contoh 1
// fungsi tambah
function sum(a, b) {
  return a + b;
}

// fungsi kali
function multiple(a, b) {
  return a * b;
}
let ask = true;
while (ask) {
  let a = parseInt(prompt("masukkan operator 1: "));
  let b = parseInt(prompt("masukkan operator 2: "));

  var task1 = sum(a, b);
  var task2 = multiple(a, b);
  var coba = task1 + task2;
  //   operasinya a + b + (a * b)
  //   jika op1 = 2 dan op2 = 3, maka hasil yang keluar adalah 2+3+(2*3)=5+6= 11
  alert(coba);
  ask = confirm("lagi?");
}
alert("terima kasih sudah mencoba");

// contoh 2
function tambah() {
  var hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}
var test = tambah(1, 2, 3, 4); //hasil 10
console.log(test);
