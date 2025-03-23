let numRandom = Math.floor((Math.random() * 100) + 1);
let numero
numero = document.getElementById("Numero")
const boton = document.getElementById("button");
let intentos = 0
const diferencia = 15
let msj = document.getElementById("cuentaIntentos")


function ValidarNumero()
{
    
    if(numero.value>100 || numero.value<1)
    {
        console.log("Entro")
        alert("You need a number between 1 to 100 inclusive")
        DisableButton()
    }
    else
    {
        AbleButton()
    }
}

function NumCorrecto()
{
    intentos ++
    msj.innerHTML = <p>intentos: {intentos}</p>
    if(numero.value<(numRandom-diferencia))
    {
        alert("the number is too low")
    }
    else if(numero.value>(numRandom+diferencia))
    {
        alert("the number is too high")
    }
    
}

function DisableButton()
{
    boton.disabled = true;
}

function AbleButton()
{
    boton.disabled = false;
}