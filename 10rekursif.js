//contoh rekursif
//factorial
function faktorial(n) {
  if (n === 1) {
    //base case
    return 1;
  } else {
    //recursive case
    return n * faktorial(n - 1);
  }
}
console.log(faktorial(5));

//menghitung total array
function ttlarray(arr) {
  if (arr.length === 0) {
    //base case
    return 0;
  }
  return arr[0] + ttlarray(arr.slice(1)); //recursive case
}
console.log(ttlarray([1, 2, 3, 4, 4])); //output 14 = 1 + 2 + 3 + 4 + 4
