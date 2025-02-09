// akses elemen dom
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
