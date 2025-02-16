// 2. event handler
let click2 = document.getElementById("btn2");
click2.onclick = function () {
  //   alert("anda mengklik dari event handler");
  this.style.backgroundColor = "yellow";
};

// 3. addeventlistener()
let click3 = document.querySelector(".sefirst li:nth-child(3)");

click3.addEventListener("click", function () {
  this.style.backgroundColor = "green";
  let ul = document.querySelector(".sefirst li:nth-child(3) ul");
  let newli = document.createElement("li");
  let teksli = document.createTextNode(
    "teks baru ketika di area addeventlistener di klik "
  );
  newli.appendChild(teksli);
  ul.appendChild(newli);
});
