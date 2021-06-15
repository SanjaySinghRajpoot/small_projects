const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("length");
const stringEl = document.getElementById("string");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLowerCase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUpperCase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  let len = 0;

  if (lenEl.value == null) {
    len = 6;
  } else {
    len = lenEl.value;
  }

  let password = "";
  const val = stringEl.value;
  const netlen = len - val; 

  for (let i = 0; i < netlen; i++) {
    const x = generateX();
    password += x;
  }

  
  let val2 = val.concat(password);

  pwEl.innerText = val2;
}

function generateX() {
  const xs = [];

  if (upperEl.checked) {
    xs.push(getUpperCase());
  }

  if (lowerEl.checked) {
    xs.push(getLowerCase());
  }

  if (numberEl.checked) {
    xs.push(getNumber());
  }

  if (symbolEl.checked) {
    xs.push(getSymbol());
  }

  if (xs.length === 0) return "";

  return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener("click", generatePassword);

copyEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = pwEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
});
