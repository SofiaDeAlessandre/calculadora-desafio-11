import "./style.css";

let input = document.getElementById("input");
let btns = document.getElementsByClassName("btn");
let btnSumar = document.getElementById("btn+");
let btnResultado = document.getElementById("btn=");
let a = "";
let b = "";

  const operacion = () => {
    for (let btn of btns) {
      console.log(btn.textContent);
      btn.addEventListener("click", () => {
        input.textContent += btn.textContent;
      });
    }
  };
  operacion();

  
  const sumar = () => {
    let resultado = a + b;
    return resultado
  };

  btnSumar.addEventListener("click", () => {
    a = input.textContent;
    let resultadoA = Number(a.replace("+", ""));
    console.log (resultadoA);
    return Number(resultadoA);
  });

  btnResultado.addEventListener("click", () => {
    b = input.textContent;
    let resultadoB = b;
    console.log(resultadoB);
    sumar (a + b);
    return Number(resultadoB);
  });





