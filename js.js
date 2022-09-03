const inputTexto = document.getElementById("texto");
const btnEncriptar = document.getElementById("boton-encriptar");
const btnDesencriptar = document.getElementById("boton-desencriptar");
const inputResultado = document.getElementById("resultado");
const btnCopiar = document.getElementById("copiar");
const soloLetras = /^[a-z ñ]*$/;

document.addEventListener("DOMContentLoaded", () => {
    btnEncriptar.addEventListener("click", encriptarTexto);
    btnDesencriptar.addEventListener("click", desencriptarTexto);
    btnCopiar.addEventListener("click", copiarTexto);
})

function encriptarTexto(){
    inputResultado.value = "";
    let texto = inputTexto.value;
    if(texto.match(soloLetras)!=null){
        texto = texto.replaceAll(/e/g, "enter").replaceAll(/i/g, "imes").replaceAll(/a/g, "ai").replaceAll(/o/g, "ober").replaceAll(/u/g, "ufat");
        inputResultado.value = texto;
    }else{
        alert("Ha ingresado un valor erroneo");
    }
    inputTexto.value = "";
}

function desencriptarTexto(){
    inputResultado.value = "";
    let texto = inputTexto.value;
    if(texto.match(soloLetras)!=null){
        texto = texto.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
        inputResultado.value = texto;
    } else {
        alert("Ha ingresado un valor erroneo");
    }
    inputTexto.value = "";
}

function copiarTexto(){
    const mensaje = inputResultado.value;
    navigator.clipboard.writeText(mensaje);
    inputResultado.value = "";
}