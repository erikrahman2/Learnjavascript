// menghitung jumlah volume 1 + 2 + 3
// tanpa function
// ketika akan menambah satu kubus baru, maka perlu merumus ulang kubus baru dengan cara yang sama
let z = 8;
let y = 3;
let x = 4;
let volumz;
let volumy;
let volumx;
let hasil;

volumz = z ** 3;
volumy = y ** 3;
volumx = x ** 3;

hasil = volumz + volumy + volumx;

console.log(hasil);

// dengan function
// ketika ingin menambah kubus baru, maka kita hanya perlu memasukkan nilai kubus baru dan menambahkan fungsi kubus baru
function totalvolume(a, b, c) {
  let voluma;
  let volumb;
  let volumc;
  let total;

  // perhitungan panjang lebar tinggi
  voluma = a ** 3;
  volumb = b ** 3;
  volumc = c ** 3;

  total = voluma + volumb + volumc;
  return total;
}
console.log(totalvolume(8, 3, 4));
