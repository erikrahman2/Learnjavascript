// basis object
let user = {
  name: "jae rume",
  age: 24,
  from: "earthtewlve",
  hobby: ["painting", "fixie", "gym"],
  favorite: "animanga",
};
console.log(user.hobby[0]);

//cara membuat objek
// literal (umum)
let angka = {
  pertama: 1,
  kedua: 2,
  ketiga: "tiga",
  banyak: [4, 5, 6, 7, 8],
};
console.log(angka.ketiga, angka.banyak[2]);

// using new object()
let mhs = new Object();
mhs.nama = "jae";
mhs.jurusan = "informatika";
mhs.id = 22222;
console.log(mhs.nama);

// using constructor function
function mahasiswa(nama, jurusan, year) {
  this.nama = nama;
  this.jurusan = jurusan;
  this.year = year;
}
let mhsw1 = new mahasiswa("jae", "informatika", 3);
let mhsw2 = new mahasiswa("rumi", "informatika", 2);
let mhsw3 = mahasiswa("karen", "informatika", 2); //tanpa 'new' key nya tidak akan di return
console.log(mhsw1);
console.log(mhsw2);
console.log(mhsw3);
