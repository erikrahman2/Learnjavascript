// dom manipulation
// manipulation element

// element.innerHTML -> mengubah teks
let title = document.getElementById("sh");
// title.innerHTML = '"judul diubah" dom manipulation';
// atau jika ingin mengubah teksnya menjadi miring bisa menggunakan:
title.innerHTML = '<em>"judul diubah" dom manipulation</em>';
// hal ini juga berlaku untuk properti html lainnya.

// element.style.PROPERTICSS -> menggunakan css di js
let smll = document.getElementById("si");
smll.style.color = "white";
smll.style.backgroundColor = "grey";

// element.classList
let para = document.getElementsByTagName("p")[0];
para.classList.toggle("me");
// untuk hasilnya silahkan dilihat di inspect browser bagian element
// ada penambahan class di element p pertama
/*
selain menggunakan element.classlist.toggle(), ada juga:

element.classlist.add()
element.classlist.remove()
element.classlist.item()
element.classlist.contains()
element.classlist.replace()
*/
