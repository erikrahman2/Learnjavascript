// angkotan
let jmlhangkot = 15;
let angkoton = 5;

for (let nmrangkot = 1; nmrangkot <= jmlhangkot; nmrangkot++) {
  if (nmrangkot <= 5) {
    console.log("angkot " + nmrangkot + " lagi di statiun angkot");
  } else if (nmrangkot >= angkoton + 1 && nmrangkot <= 10) {
    console.log("angkot " + nmrangkot + " tidak lagi di statiun angkot");
  } else {
    console.log("angkot " + nmrangkot + " lagi rusak di statiun angkot");
  }
}

// nilai ujian
// let nilai = prompt("masukkan nilai");
let nilai = 12;

if (nilai >= 85) {
  console.log("nilai " + nilai + " , maka dapat A");
} else if (nilai >= 75 && nilai < 85) {
  console.log("nilai " + nilai + " , maka dapat b");
} else if (nilai >= 65 && nilai < 75) {
  console.log("nilai " + nilai + " , maka dapat c");
} else {
  console.log("nilai " + nilai + " , maka anda tidak lulus");
}
