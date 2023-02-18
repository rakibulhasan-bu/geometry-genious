// add links to geometry blog page
document.querySelector("#btn-blog").addEventListener("click", function () {
  location.href = "Blog/blog.html";
});

// two input value multiple
function inputValueMultiple(inputId1, inputId2) {
  let input1 = document.querySelector(inputId1);
  let input2 = document.querySelector(inputId2);

  const inputValue1 = Number(input1.value);
  const inputValue2 = Number(input2.value);
  input1.value = "";
  input2.value = "";
  if (
    isNaN(inputValue1) ||
    isNaN(inputValue2) ||
    inputValue1 === 0 ||
    inputValue2 === 0
  ) {
    alert("please input a Number");
    return 0;
  } else {
    return inputValue1 * inputValue2;
  }
}

// make function of html element to add area section
function showCalculation(Name, finalResult) {
  const areaOl = document.querySelector("#area-ol");
  const li = document.createElement("li");
  li.innerHTML = `
              <div class="flex justify-between mb-4">
                <p>${Name}</p>
                <p>${finalResult} cm<sup>2</sup></p>
                <button
                  class="bg-blue-500 hover:bg-sky-900 text-sm text-white font-medium py-1 px-1 rounded-lg"
                >
                  Convert to m<sup>2</sup>
                </button>
              </div>
            `;
  areaOl.appendChild(li);
}

// triangle value calculation
document.querySelector("#btn-triangle").addEventListener("click", function () {
  const inputMultiple = inputValueMultiple("#b", "#h");
  const finalCalculation = 0.5 * inputMultiple;
  showCalculation("Triangle", finalCalculation);
});

// rectangle value calculation
document.querySelector("#btn-rectangle").addEventListener("click", function () {
  const inputMultiple = inputValueMultiple("#w", "#i");
  showCalculation("Rectangle", inputMultiple);
});

// parallelogram value calculation
document
  .querySelector("#btn-parallelogram")
  .addEventListener("click", function () {
    const inputMultiple = inputValueMultiple("#bx", "#hy");
    showCalculation("Parallelogram", inputMultiple);
  });

// rhombus value calculation
document.querySelector("#btn-rhombus").addEventListener("click", function () {
  const inputMultiple = inputValueMultiple("#d1", "#d2");
  const finalCalculation = 0.5 * inputMultiple;
  showCalculation("Rhombus", finalCalculation);
});

// pentagon value calculation
document.querySelector("#btn-pentagon").addEventListener("click", function () {
  const inputMultiple = inputValueMultiple("#p", "#bz");
  const finalCalculation = 0.5 * inputMultiple;
  showCalculation("Pentagon", finalCalculation);
});

// ellipse value calculation
document.querySelector("#btn-ellipse").addEventListener("click", function () {
  const inputMultiple = inputValueMultiple("#a", "#bw");
  const finalCalculation = (3.1416 * inputMultiple).toFixed(2);
  showCalculation("Ellipse", finalCalculation);
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
