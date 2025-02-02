// operasi dasar array
let angka = [1, 2, 3, 4, 5];
console.log(angka[2]);
console.log(angka);

let animal = ["bear", "dog", "cat", "cow"];
console.log(animal[2]);
console.log(animal.length); //panjang array
for (let i = 0; i < 4; i++) {
  console.log("hewan ke " + (i + 1) + " : " + animal[i]);
}

let mix = [10, "hello", true, { nama: "erik" }];
console.log(mix[3]);

// mengubah elemen array
animal[0] = "dragon";
console.log(animal);

//metode array
//menambah dan menghapus elemen
let comp = ["sugar", "coklat", "milk"];
console.log(comp);

//push() untuk menambah elemen di akhir array
comp.push("strawberry");
console.log(comp);

// pop() menghapus elemen di akhir array
comp.pop();
console.log(comp);

//unshift() menambah elemen di awal array
comp.unshift("strawberry");
console.log(comp);

// shift() menghapus elemen di awal array
comp.shift();
console.log(comp);
comp.shift();
console.log(comp);
