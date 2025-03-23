let numRandom = Math.floor((Math.random() * 100) + 1);
let numero = document.getElementById("Numero");
const boton = document.getElementById("button");
let intentos = 0;
const diferencia = 15;
let msj = document.getElementById("cuentaIntentos");

function ValidarNumero() {
    const valor = parseInt(numero.value);

    if (valor >= 1 && valor <= 100) {
        AbleButton();
    } else {
        console.log("Entro");
        alert("You need a number between 1 to 100 inclusive");
        DisableButton();
    }
}

function NumCorrecto() {
    intentos++;
    msj.innerHTML = `intentos: ${intentos}`;
    const valor = parseInt(numero.value);

    if (valor < (numRandom - diferencia)) {
        alert("the number is too low");
    } else if (valor > (numRandom + diferencia)) {
        alert("the number is too high");
    } else {
        alert("Congratulations! You guessed it right!");
        DisableButton();
    }
}

function DisableButton() {
    boton.disabled = true;
}

function AbleButton() {
    boton.disabled = false;
}