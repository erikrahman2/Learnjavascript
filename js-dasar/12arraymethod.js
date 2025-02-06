//metode dalam array
//A. menambah n mengurangi elemen dalam array
let color = ["red", "black", "brown", "purple", "white"];
console.log(color);

//push() menambah elemmen di akhir
color.push("blue");
console.log(color);

// pop() menghapus elemen di akhir
color.pop();
console.log(color);

// unshift() menambah elemen di awal
color.unshift("orange");
console.log(color);

//shift() menghapus elemen di awal
color.shift();
console.log(color);

//B. mengabungkan n memodifikasi array
// concat() menggabungkan dua atau lebih array
let a = ["html", "css"];
let b = ["javascript, php"];
let gabung = a.concat(b);
console.log(gabung);

// slice() mengambil sebagian elemen array
let profesi = ["polisi", "tentara", "pilot", "damkar", "presiden"];
let hero = profesi.slice(1, 4); //indeks 1 sampai 3
console.log(hero);

//splice() menambah dan menghapus atau mengganti elemen
//splice() menambah elemen
profesi.splice(2, 0, "pebisnis", "petani"); //tambah dua elemen dimulai dari indeks 2
console.log(profesi);

//splice() menghapus elemen
profesi.splice(2, 1); //hapus elemen indeks ke 2 yaitu pebisnis
console.log(profesi);

//splice() ganti elemen
profesi.splice(3, 1, "wartawan"); //ganti indeks 3 dari pilot jadi wartawan
console.log(profesi);
