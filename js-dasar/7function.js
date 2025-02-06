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
function totalvolume(a, b) {
  //refactoring akan diterapkan dikode ini, agar lebih efisien dan simple

  /* dari pada menggunakan variabel yang panjang seperti ini
   let voluma;
   let volumb;
  let total;

   voluma = a ** 3;
   volumb = b ** 3;

   total = voluma + volumb;
   
   return total;
   */

  // =====lebih baik menghapus variabel seperti di komen di atas dan menyederhanakannya seperti dibawah ini
  return a ** 3 + b ** 3;
}
console.log(totalvolume(8, 3));
