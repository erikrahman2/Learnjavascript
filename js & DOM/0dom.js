// akses elemen dom / selection
// a. getElementById()
let title = document.getElementById("judul");
console.log(title.innerText);
/* cara menampilkannya: buka doc html ini di browser dan pergi konsole,
kemudian ketik elemen 'judul' atau 'title di konsole. maka akan muncul hasilnya*/
// menggunakan properti css di js
title.style.color = "yellow";

// b. getElementByTagName()
// --> html collection
let goal = document.getElementsByTagName("p");
for (let i = 0; i < goal.length; i++) {
  goal[i].style.backgroundColor = "grey";
}
// salah satu elemen p, karena elemen p bersifat array maka:
// disini kita akan mengambil urutan p kedua
goal[1].style.backgroundColor = "yellow";

// c. getElementByClassName()
// --> html collection
let paragraf = document.getElementsByClassName("text");
paragraf[0].style.backgroundColor = "green";
paragraf[0].innerHTML = "ini di ubah dari js";

/* semua selection dom ini diakses dengan cara yang sama ketika ingin 
menampilkannya dikonsole. buka doc html ini di browser dan pergi konsole,
kemudian ketik elemen 'judul' atau 'title, 'goal', dan 'paragraf' di 
konsole. maka akan muncul hasilnya*/

// querySelector() -> element
let hl = document.querySelector("#lastt h2");
hl.style.color = "aqua";

let l2 = document.querySelector("ul li:nth-child(2)");
l2.style.fontSize = "32px";
l2.style.backgroundColor = "salmon";

// queryselector tidak bisa mengeksekusi banyak element, contohnya:
let hh2 = document.querySelector("h2");
hh2.style.backgroundColor = "salmon";
/*maka ketika ingin mengubah background semua element h2, hanya bisa mengubah
satu element saja. jadi querySelectorAll() dipakai*/

// querySelectorAll()
let allp = document.querySelectorAll("p");
for (let j = 0; j < allp.length; j++) {
  allp[j].style.color = "salmon";
} //jadikan komen jika ingin mengubah satu item dari kode dibawah

// jika ingin mengubah satu item, maka gunakan indeks [value], contoh:
// allp[1].style.color = 'salmon';
