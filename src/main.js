import "./style.css";

let input = document.getElementById("input");
let btns = document.getElementsByClassName("btn");
let btnResultado = document.getElementById("btn=");

const operacion = () => {
  for (let btn of btns) {
    btn.addEventListener("click", () => {
      if (btn.textContent !== "=" && input.textContent.length < 13) {
        input.textContent += btn.textContent;
      }
    });
  }
};
operacion();

btnResultado.addEventListener("click", () => {
  let reemplazo = "";
  if (input.textContent.includes("x")) {
    reemplazo = input.textContent.replace("x", "*");
    input.textContent = eval(reemplazo);
  } else {
    let resultado = eval(input.textContent);
    input.textContent = resultado;
  }
});

input.addEventListener("click", () => {
  input.textContent = 0;
});
