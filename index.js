let numRandom = Math.floor((Math.random() * 100) + 1);
let numero = document.getElementById("Numero");
const boton = document.getElementById("button");
const boton1 = document.getElementById("button1");
let intentos = 0;
const diferencia = 15;
let msj = document.getElementById("cuentaIntentos");
boton1.disabled = true;
boton1.style.visibility = "hidden"; 
console.log(numRandom)

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
    } else if (valor < numRandom) {
        alert("the number is lower than the ramdon number");
    } else if (valor > numRandom) {
        alert("the number is higher than the random number"); 
    } else if (valor == numRandom) {
        alert("Congratulations! You guessed it right!");
        DisableButton();
        AbleButton1();
        DisableInput()
    }
}
function DisableInput()
{
    numero.disabled = true;
}
function AbleInput()
{
    numero.disabled = false;
}

function DisableButton() {
    boton.disabled = true;
}

function AbleButton() {
    boton.disabled = false;
}

function AbleButton1(){
    boton1.disabled = false;
    boton1.style.visibility = "visible"; 
}

function JuegoNuevo()
{
    numRandom = Math.floor((Math.random() * 100) + 1);
    console.log(numRandom)
    AbleButton()
    AbleInput()
    intentos = 0;
    numero.value = 0;
    msj.innerHTML = `intentos: ${intentos}`;
    boton1.disabled = true;
    boton1.style.visibility = "hidden"; 
}