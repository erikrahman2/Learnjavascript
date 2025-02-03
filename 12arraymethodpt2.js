// iterasi pada array
// foreach() iterasi tanpa return
let angka = [1, 2, 3, 4, 5, 6, 7, 8];
angka.forEach((nilai) => {
  console.log("mahasiswa ke-" + nilai * 1);
});

// Map() membuat array baru dari hasil transformasi
let hasil = angka.map((nilai) => nilai * 3);
console.log("mahasiswa ke-" + hasil);

//filter() menyaring elemen berdasar kondisi
let genap = hasil.filter((nilai) => nilai % 2 === 0);
console.log(genap);

// find() mencari satu elemen yg cocok
let angkabesar = angka.find((nilai) => nilai > 4);
console.log(angkabesar);

//reduce() menggabungkan elemen menjadi satu nilai
// misal angka = 1,2,3,4,5,6,7,8 ketika di jumlah kan semua jadi 36
let total = angka.reduce((acc, nilai) => acc + nilai, 0);
console.log(total);
