let tanya = true;
while (tanya) {
  // menangkap pilihan player
  let g = prompt("silahkan pilih: gunting, batu, kertas");

  // menangkap pilihan komputer
  // membangkitkan bilangan random menggunakan var
  var comp = Math.random();

  if (comp < 0.36) {
    comp = "gunting";
  } else if (comp >= 0.36 && comp < 0.66) {
    comp = "batu";
  } else {
    comp = "kertas";
  }
  console.log(comp);

  hasil = "";
  //menentukan aturan
  if (g == comp) {
    hasil = "SERI";
  } else if (g == "gunting") {
    /*  if (comp == "batu") {
    hasil = "menang";
  } else {
    hasil = "kalah";
  }*/

    //  if else yang dikomen di atas sama dengan menggunakan op. ternary dibawah
    hasil = comp == "batu" ? "kalah" : "menang";
  } else if (g == "batu") {
    hasil = comp == "gunting" ? "menang" : "kalah";
  } else if (g == "kertas") {
    hasil = comp == "batu" ? "menang" : "kalah";
  } else {
    hasil = "memasukkan pilihan yang salah";
  }

  // menampilkan hasil
  alert(
    "kamu memilih " +
      g +
      ", komputer memilih " +
      comp +
      "\nmaka hasilnya : kamu " +
      hasil
  );
  tanya = confirm("lagi?");
}
alert("terima kasih sudah bermain");
