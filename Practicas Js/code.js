let peso = prompt("Escribe tu peso");
let altura = prompt("Escribe tu altura");
let imc = peso / (altura*altura);

document.write(imc);

if(imc >= 24)
{
    alert("Tienes un IMC sano")
}

else if (imc < 18)
{
    alert("Estas en delgadez")
}

else{
    alert("Tus datos no son validos")
}

