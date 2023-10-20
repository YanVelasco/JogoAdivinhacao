const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const h1 = document.querySelector(".screen2 h1");
const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;
const attempt = "tentativa";
const attempts = "tentativas";
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

function handleTyClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber").value;

  if (Number(inputNumber) == randomNumber) {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");

    if (xAttempts == 1) {
      h1.innerText = `Você acertou em ${xAttempts} ${attempt}`;
    } else {
      h1.innerText = `Você acertou em ${xAttempts} ${attempts}`;
    }
  }

  xAttempts++;
  document.querySelector("#inputNumber").value = ""; // Limpar o valor do input
}

function handleReset(event) {
  event.preventDefault();
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
  xAttempts = 1;
}

// eventos
btnTry.addEventListener("click", handleTyClick);
btnReset.addEventListener("click", handleReset);
