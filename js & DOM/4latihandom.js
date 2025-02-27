// simply change color button
let btnclr = document.getElementById(tchangecolor);
tchangecolor.onclick = function () {
  //   document.body.style.backgroundColor = "red";
  document.body.classList.toggle("red");
};

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
