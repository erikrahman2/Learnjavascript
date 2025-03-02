// 1. simply change color button
let btnclr = document.getElementById(tchangecolor);
tchangecolor.onclick = function () {
  //   document.body.style.backgroundColor = "red";
  document.body.classList.toggle("red");
};

// 2. change random color
let newbtn = document.createElement("button");
let newtextbtn = document.createTextNode("change random color");
newbtn.appendChild(newtextbtn);
newbtn.setAttribute("type", "button");
tchangecolor.after(newbtn);
newbtn.addEventListener("click", function () {
  let r = Math.round(Math.random() * 255 + 1);
  let g = Math.round(Math.random() * 255 + 1);
  let b = Math.round(Math.random() * 255 + 1);

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// 3. slider color
let smerah = document.querySelector("input[name=smerah]");
let shijau = document.querySelector("input[name=shijau]");
let sbiru = document.querySelector("input[name=sbiru]");

smerah.addEventListener("input", function () {
  let r = smerah.value;
  let g = shijau.value;
  let b = sbiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

shijau.addEventListener("input", function () {
  let r = smerah.value;
  let g = shijau.value;
  let b = sbiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sbiru.addEventListener("input", function () {
  let r = smerah.value;
  let g = shijau.value;
  let b = sbiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
