const boton_encri = document.getElementById("boton-encri");
const boton_desencri = document.getElementById("boton-desencri");
const boton_copia = document.getElementById("boton-copia");
const texto_entrada = document.getElementById("texto-entrada");
const texto_salida = document.getElementById("texto-salida");

function Validacion() {
    const Valide = document.getElementById("texto-entrada").value;
    const Rectifica = /^[a-z\sñ]+$/g;
    const Vali = Rectifica.test(Valide);

    if (!Vali) {
        document.getElementById("texto-entrada").value = '';
        document.getElementById("imagen").style.display = "block";
        document.getElementById("info-text1").style.display = "block";
        document.getElementById("info-text2").style.display = "block";
        document.getElementById("texto-salida").style.display = "none";
    }

}

function Esconder() {
    document.getElementById("imagen").style.display = "none";
    document.getElementById("info-text1").style.display = "none";
    document.getElementById("info-text2").style.display = "none";
    document.getElementById("boton-copia").style.display = "block";
    document.getElementById("texto-salida").style.display = "block";
};
//FUNCION ENCRIPTAR
function Encriptar() {
    Esconder();
    Validacion();

    var textomen = texto_entrada.value;
    var textoentrada = textomen
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");

    texto_salida.value = textoentrada;
};
//FUNCION DESENCRIPTAR
function Desencriptar() {
    Esconder();
    Validacion();

    var textoencri = texto_entrada.value;
    var Textoendrada = textoencri
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");

    texto_salida.value = Textoendrada;
};

//FUNCION COPIAR TEXTO
function Copiar() {
    var textoencri = texto_salida.value;
    navigator.clipboard.writeText(textoencri);
    texto_entrada.value = " ";
    texto_entrada.focus();
};

//LLAMANDO FUNCIONES
boton_encri.onclick = Encriptar;
boton_desencri.onclick = Desencriptar;
boton_copia.onclick = Copiar;