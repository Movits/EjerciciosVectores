const inputUsuario = document.querySelector("#usuario-nombre")
const inputContrasena = document.querySelector("#usuario-contrasena")
const pResultado = document.querySelector("#resultado")
const contentedorDiv = document.querySelector("#div-contenedor");

const Usuarios = ["Roberto","Juan"];
const Contrasenas = ["Roberto1","juanito"];

const imgRes1 = document.querySelector("#img-verificada");
const imgRes2 = document.querySelector("#img-no-verificada");

let usuarioNombreIngresado = "def nombre";
let usuarioContrasenaIngresada = "def contrasena";

function verificar(){
    usuarioNombreIngresado = inputUsuario.value;
    usuarioContrasenaIngresada = inputContrasena.value;
    
    if (((usuarioNombreIngresado == Usuarios[0]) && (usuarioContrasenaIngresada == Contrasenas[0])) ) {
        pResultado.innerHTML = "Bienvenido " + Usuarios[0];
        pResultado.style.color = "green";
        imgRes1.src = "https://i.ebayimg.com/images/g/GbkAAOSwp2dd1oZ2/s-l1200.jpg";
        imgRes1.style.display = "block";
        imgRes2.style.display = "none";
        
    } else if (((usuarioNombreIngresado == Usuarios[1]) && (usuarioContrasenaIngresada == Contrasenas[1]))) {
        pResultado.innerHTML = "Bienvenido " + Usuarios[1];
        pResultado.style.color = "green";
        imgRes1.src = "https://i.ebayimg.com/images/g/GbkAAOSwp2dd1oZ2/s-l1200.jpg";
        imgRes1.style.display = "block";
        imgRes2.style.display = "none";
    }
    
    else{
        pResultado.innerHTML = "Usuario y contrasena incorrectos";
        pResultado.style.color = "red";
        imgRes2.src = "https://clipart-library.com/data_images/49138.png";
        imgRes2.style.display = "block";
        imgRes1.style.display = "none";
    }
}
