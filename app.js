// hard values
let colorRandom = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

// selectors
let firstColor = document.querySelector(".color-one");
let secondColor = document.querySelector(".color-two");
let angle = document.querySelector("#number");
let btnApply = document.querySelector(".btn");
let background = document.querySelector(".main");
let bg = document.querySelector("body");
let btnRandom = document.querySelector(".random");

let warnning = document.querySelector(".warn");

// eventListeners;

btnApply.addEventListener("click", applyGradient);
btnRandom.addEventListener("click", randomize);

// functions

function applyGradient() {
  if (firstColor.value === secondColor.value) {
    let errorCatch = warnning.classList;
    if (!errorCatch.contains("error")) {
      warnning.classList.add("error");
    }
  } else {
    background.style.background = `linear-gradient(${angle.value}deg,${firstColor.value} , ${secondColor.value} )`;
    warnning.classList.remove("error");

    if (angle.value === "") {
      angle.value = 45;
      applyGradient();
    }
    let yes = document.querySelector(".info") || false;
    if (!yes) {
      // main box div
      let entireBox = document.createElement("div");
      entireBox.classList.add("info");
      background.appendChild(entireBox);

      // text content h4
      let textBox = document.createElement("h4");
      textBox.classList.add("textInfo");
      entireBox.appendChild(textBox);
      textBox.innerHTML = "linear-gradient(";
      // subtext span
      let ang = document.createElement("span");
      ang.classList.add("ang");
      textBox.appendChild(ang);
      let info1 = document.createElement("span");
      info1.classList.add("colInfo1");
      textBox.appendChild(info1);

      let infoTwo = document.createElement("span");
      infoTwo.classList.add("colInfo2");
      textBox.appendChild(infoTwo);

      //bracket
      let closeBracket = document.createElement("span");
      textBox.appendChild(closeBracket);
      closeBracket.innerHTML = ")";
    }

    // selecting
    let fo1 = document.querySelector(".colInfo1");
    let fo2 = document.querySelector(".colInfo2");
    let ang = document.querySelector(".ang");

    //setting values values
    ang.innerHTML = ` ${angle.value}deg,`;
    fo1.innerHTML = ` ${firstColor.value},`;
    fo2.innerHTML = ` ${secondColor.value}`;
  }
}

function randomize() {
  let s = "#";
  let str = "#";

  for (let i = 0; i < 6; i++) {
    let num = Math.floor(Math.random() * colorRandom.length);
    s = s.concat(colorRandom[num]);
    let num2 = Math.floor(Math.random() * colorRandom.length);
    str = str.concat(colorRandom[num2]);
  }

  firstColor.value = s;
  secondColor.value = str;
  if (angle.value === "") {
    angle.value = 45;
  }
  if (warnning.classList.contains("error")) {
    warnning.classList.remove("error");
  }

  let yes = document.querySelector(".info") || false;
  if (!yes) {
    // main box div
    let entireBox = document.createElement("div");
    entireBox.classList.add("info");
    background.appendChild(entireBox);

    // text content h4
    let textBox = document.createElement("h4");
    textBox.classList.add("textInfo");
    entireBox.appendChild(textBox);
    textBox.innerHTML = "linear-gradient(";
    // subtext span
    let ang = document.createElement("span");
    ang.classList.add("ang");
    textBox.appendChild(ang);
    let info1 = document.createElement("span");
    info1.classList.add("colInfo1");
    textBox.appendChild(info1);

    let infoTwo = document.createElement("span");
    infoTwo.classList.add("colInfo2");
    textBox.appendChild(infoTwo);

    //bracket
    let closeBracket = document.createElement("span");
    textBox.appendChild(closeBracket);
    closeBracket.innerHTML = ")";
  }

  // selecting
  let fo1 = document.querySelector(".colInfo1");
  let fo2 = document.querySelector(".colInfo2");
  let ang = document.querySelector(".ang");

  //setting values values
  ang.innerHTML = ` ${angle.value}deg,`;
  fo1.innerHTML = ` ${firstColor.value},`;
  fo2.innerHTML = ` ${secondColor.value}`;
}

// live change for colorOne;

firstColor.addEventListener("input", function () {
  let yes = document.querySelector(".info") || false;
  if (yes) {
    let color1 = document.querySelector(".colInfo1");
    color1.innerHTML = " " + firstColor.value + ",";
  }
});
// live change for colortwo;
secondColor.addEventListener("input", function () {
  let yes = document.querySelector(".info") || false;
  if (yes) {
    let color2 = document.querySelector(".colInfo2");
    color2.innerHTML = " " + secondColor.value;
  }
});

angle.addEventListener("input", function () {
  let yes = document.querySelector(".info") || false;
  if (yes) {
    let angVal = document.querySelector(".ang");
    angVal.innerHTML = `${angle.value}deg,`;
  }
});
