// 1
function fscope() {
  // baris ini hanya bisa di akses di function
  let pesan = "halo lumi, pesan ini di akses di dalam function";
  console.log(pesan); //akses function scope
}

fscope();

//function scope tidak bisa diakses diluar function seperti ini
// console.log(pesan);

// 2
// global scope vs function scope
let globalscope = "global scope"; //global scope

function vessel() {
  let funcscope = "function scope"; //function scope

  console.log(globalscope); //global scope bisa di akses di dalam function
  console.log(funcscope); //function scope bisa diakses di dalam function
}

vessel();
console.log(globalscope); //global scope bisa di akses di luar function
console.log(funcscope); //function scope tidak bisa diakses di luar function
