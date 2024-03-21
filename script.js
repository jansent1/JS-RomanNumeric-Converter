const numInput = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");

btn.addEventListener("click", checkUserInput);

function convToRoman(num) {
  let romNum = "";
  let romList = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  for (let i = 0; i < romList.length; i++) {
    while (num >= romList[i][1]) {
      romNum += romList[i][0];
      num -= romList[i][1];
    }
  }

  return romNum;
}

function checkUserInput() {
  const input = numInput.value;
  if (input === "") {
    output.textContent = "Please enter a valid number";
  } else if (input <= 0) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (input >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
  } else {
    output.textContent = convToRoman(input);
  }
}
