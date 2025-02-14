// dom manipulation

// manipulation element

// element.innerHTML -> mengubah teks
let title = document.getElementById("sh");
// title.innerHTML = '"judul diubah" dom manipulation';
// atau jika ingin mengubah teksnya menjadi miring bisa menggunakan:
title.innerHTML =
  '<em>"judul diubah" dom manipulation</em> menambah tag html ketika mengubah teks';
// hal ini juga berlaku untuk properti html lainnya.

// element.style.PROPERTICSS -> menggunakan css di js
let smll = document.getElementById("si");
smll.style.color = "white";
smll.style.backgroundColor = "grey";

// element.setAttribute()
let prg = document.getElementsByTagName("p")[1];
prg.setAttribute("id", "lab");
// untuk hasilnya silahkan dilihat di inspect browser bagian element

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

// manipulation node
// membuat elemen baru di js
let newp = document.createElement("p"); //createElement()
let newtext = document.createTextNode(
  "paragraf ini dibuat menggunakan manipulasi node: createElement -> membuat element baru"
);
// simpan teks kedalam elemen p
newp.appendChild(newtext); //appendChild()
// menyimpan elemen baru di class snode
let sectionnode = document.querySelector(".snode");
sectionnode.appendChild(newp); //appendChild()
newp.style.color = "red";

//membuat li baru
let newli = document.createElement("li");
let newlitext = document.createTextNode(
  "li ini dibuat di js menerapkan node manipulation insertBefore() -> menyisipkan element"
);
// simpan teks li di elemen li
newli.appendChild(newlitext);
// simpan elemen li baru di urutan kedua li
let sectiontes = document.querySelector(".nodetes ul");
let li2 = sectiontes.querySelector("li:nth-child(2)");
sectiontes.insertBefore(newli, li2); //insertBefore(newElement, referenceElement)
// maksud referenceElement adalah Elemen sebelum elemen baru ditempatkan.
newli.style.backgroundColor = "yellow";

// membuat li (lagi)
let newli2 = document.createElement("li");
let newlitext2 = document.createTextNode(
  "ini juga dibuat dijs : insertbefore -> menyisip elemen"
);
newli2.appendChild(newlitext2);
let sectiontes2 = document.querySelector(".nodetes ul");
let li3 = sectiontes2.querySelector("li:nth-child(3)");
sectiontes2.insertBefore(newli2, li3);

// menghapus elemen
let link = document.getElementsByTagName("a")[0];
sectiontes.removeChild(link);

// mengganti elemen dari html
// definisikan elemen yang akan diganti
let sectionrp = document.querySelector(".nodetes");
let rp = sectionrp.querySelector("p");
// buat elemen pengganti
let newh2 = document.createElement("h2");
newh2.style.backgroundColor = "green";
let h2text = document.createTextNode(
  "tes node manipulation, ket : elemen ini diganti dari p menjadi h2"
);
// simpan teks di elemen h2
newh2.appendChild(h2text);
// ganti elemen -> replaceChild(elbaru, ellama)
sectionrp.replaceChild(newh2, rp);
