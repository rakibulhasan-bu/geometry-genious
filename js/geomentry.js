// add links to geometry blog page
document.querySelector("#btn-blog").addEventListener("click", function () {
  location.href = "Blog/blog.html";
});

//get 6 digits number
function generateNumber() {
  const randNumber = Math.floor(Math.random() * 1000000);
  return randNumber;
}
function getNumber() {
  const number = generateNumber();
  let numberString = number + "";
  if (numberString.length === 6) {
    return number;
  } else {
    return getNumber();
  }
}

// style color on div
function styleMouseOver(idName, inputID1, inputID2) {
  const mainNumber = getNumber();
  const div = document.querySelector(idName);
  div.style.backgroundColor = `#${mainNumber}`;
  div.style.color = "#fff";
  const divInput1 = document.querySelector(inputID1);
  divInput1.style.color = "#000";
  const divInput2 = document.querySelector(inputID2);
  divInput2.style.color = "#000";
}

// style color on div
function styleMouseOut(idName) {
  const div = document.querySelector(idName);
  div.style.backgroundColor = "#fff";
  div.style.color = "#000";
}
// designing hover color on triangle
document.querySelector("#triangle").addEventListener("mouseover", function () {
  styleMouseOver("#triangle", "#b", "#h");
});
// designing hover color on triangle
document.querySelector("#triangle").addEventListener("mouseout", function () {
  styleMouseOut("#triangle");
});
// designing hover color on rectangle
document.querySelector("#rectangle").addEventListener("mouseover", function () {
  styleMouseOver("#rectangle", "#w", "#i");
});
// designing hover color on rectangle
document.querySelector("#rectangle").addEventListener("mouseout", function () {
  styleMouseOut("#rectangle");
});
// designing hover color on parallelogram
document
  .querySelector("#parallelogram")
  .addEventListener("mouseover", function () {
    styleMouseOver("#parallelogram", "#bx", "#hy");
  });
// designing hover color on parallelogram
document
  .querySelector("#parallelogram")
  .addEventListener("mouseout", function () {
    styleMouseOut("#parallelogram");
  });
// designing hover color on rhombus
document.querySelector("#rhombus").addEventListener("mouseover", function () {
  styleMouseOver("#rhombus", "#d1", "#d2");
});
// designing hover color on rhombus
document.querySelector("#rhombus").addEventListener("mouseout", function () {
  styleMouseOut("#rhombus");
});
// designing hover color on pentagon
document.querySelector("#pentagon").addEventListener("mouseover", function () {
  styleMouseOver("#pentagon", "#p", "#bz");
});
// designing hover color on pentagon
document.querySelector("#pentagon").addEventListener("mouseout", function () {
  styleMouseOut("#pentagon");
});
// designing hover color on ellipse
document.querySelector("#ellipse").addEventListener("mouseover", function () {
  styleMouseOver("#ellipse", "#a", "#bw");
});
// designing hover color on ellipse
document.querySelector("#ellipse").addEventListener("mouseout", function () {
  styleMouseOut("#ellipse");
});
