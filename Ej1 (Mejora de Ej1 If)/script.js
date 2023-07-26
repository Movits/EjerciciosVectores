const inputUsuario = document.querySelector("#usuario-nombre")
const inputContrasena = document.querySelector("#usuario-contrasena")
const pResultado = document.querySelector("#resultado")
const resultadoDiv = document.querySelector("#resultados");

const Usuarios = ["Roberto","Juan","a","b","c","d","e"];
const Contrasenas = ["Roberto1","juanito","1","2","3","4","5"];

const imgRes1 = document.querySelector("#img-verificada");
const imgRes2 = document.querySelector("#img-no-verificada");

let usuarioNombreIngresado = "def nombre";
let usuarioContrasenaIngresada = "def contrasena";

function verificar(){
    usuarioNombreIngresado = inputUsuario.value;
    usuarioContrasenaIngresada = inputContrasena.value;
    
    resultadoDiv.className = "result-container";

    resultadoDiv.innerHTML = ``;

    if (((usuarioNombreIngresado == Usuarios[0]) && (usuarioContrasenaIngresada == Contrasenas[0])) ) {
        pResultado.innerHTML = "Bienvenido " + Usuarios[0];
        pResultado.style.color = "green";
        imgRes1.src = "https://i.ebayimg.com/images/g/GbkAAOSwp2dd1oZ2/s-l1200.jpg";
        imgRes1.style.display = "block";
        imgRes2.style.display = "none";

        resultadoDiv.innerHTML = `
        <img id="img-verificada" src="${imgRes1.src}" alt="">
        <p id="resultado" style="color:${pResultado.style.color}">${pResultado.innerHTML}</p>
        `;
        
    } else if (((usuarioNombreIngresado == Usuarios[1]) && (usuarioContrasenaIngresada == Contrasenas[1]))) {
        pResultado.innerHTML = "Bienvenido " + Usuarios[1];
        pResultado.style.color = "green";
        imgRes1.src = "https://i.ebayimg.com/images/g/GbkAAOSwp2dd1oZ2/s-l1200.jpg";
        imgRes1.style.display = "block";
        imgRes2.style.display = "none";

        resultadoDiv.innerHTML = `
        <img id="img-verificada" src="${imgRes1.src}" alt="">
        <p id="resultado" style="color:${pResultado.style.color}">${pResultado.innerHTML}</p>
        `;
    }

    else if (((usuarioNombreIngresado == Usuarios[2]) && (usuarioContrasenaIngresada == Contrasenas[2]))) {
        pResultado.innerHTML = "Bienvenido " + Usuarios[2];
        pResultado.style.color = "green";
        imgRes1.src = "https://i.ebayimg.com/images/g/GbkAAOSwp2dd1oZ2/s-l1200.jpg";
        imgRes1.style.display = "block";
        imgRes2.style.display = "none";

        resultadoDiv.innerHTML = `
        <img id="img-verificada" src="${imgRes1.src}" alt="">
        <p id="resultado" style="color:${pResultado.style.color}">${pResultado.innerHTML}</p>
        `;
    }
    
    else if (((usuarioNombreIngresado == Usuarios[3]) && (usuarioContrasenaIngresada == Contrasenas[3]))) {
        pResultado.innerHTML = "Bienvenido " + Usuarios[3];
        pResultado.style.color = "green";
        imgRes1.src = "https://i.ebayimg.com/images/g/GbkAAOSwp2dd1oZ2/s-l1200.jpg";
        imgRes1.style.display = "block";
        imgRes2.style.display = "none";

        resultadoDiv.innerHTML = `
        <img id="img-verificada" src="${imgRes1.src}" alt="">
        <p id="resultado" style="color:${pResultado.style.color}">${pResultado.innerHTML}</p>
        `;
    }

    else if (((usuarioNombreIngresado == Usuarios[4]) && (usuarioContrasenaIngresada == Contrasenas[4]))) {
        pResultado.innerHTML = "Bienvenido " + Usuarios[4];
        pResultado.style.color = "green";
        imgRes1.src = "https://i.ebayimg.com/images/g/GbkAAOSwp2dd1oZ2/s-l1200.jpg";
        imgRes1.style.display = "block";
        imgRes2.style.display = "none";

        resultadoDiv.innerHTML = `
        <img id="img-verificada" src="${imgRes1.src}" alt="">
        <p id="resultado" style="color:${pResultado.style.color}">${pResultado.innerHTML}</p>
        `;
    }

    else if (((usuarioNombreIngresado == Usuarios[5]) && (usuarioContrasenaIngresada == Contrasenas[5]))) {
        pResultado.innerHTML = "Bienvenido " + Usuarios[5];
        pResultado.style.color = "green";
        imgRes1.src = "https://i.ebayimg.com/images/g/GbkAAOSwp2dd1oZ2/s-l1200.jpg";
        imgRes1.style.display = "block";
        imgRes2.style.display = "none";

        resultadoDiv.innerHTML = `
        <img id="img-verificada" src="${imgRes1.src}" alt="">
        <p id="resultado" style="color:${pResultado.style.color}">${pResultado.innerHTML}</p>
        `;
    }

    else if (((usuarioNombreIngresado == Usuarios[6]) && (usuarioContrasenaIngresada == Contrasenas[6]))) {
        pResultado.innerHTML = "Bienvenido " + Usuarios[6];
        pResultado.style.color = "green";
        imgRes1.src = "https://i.ebayimg.com/images/g/GbkAAOSwp2dd1oZ2/s-l1200.jpg";
        imgRes1.style.display = "block";
        imgRes2.style.display = "none";

        resultadoDiv.innerHTML = `
        <img id="img-verificada" src="${imgRes1.src}" alt="">
        <p id="resultado" style="color:${pResultado.style.color}">${pResultado.innerHTML}</p>
        `;
    }
    
    else{
        pResultado.innerHTML = "Usuario o contrasena incorrectos";
        pResultado.style.color = "red";
        imgRes2.src = "https://clipart-library.com/data_images/49138.png";
        imgRes2.style.display = "block";
        imgRes1.style.display = "none";

        resultadoDiv.innerHTML = `
        <img id="img-no-verificada" src="${imgRes2.src}" alt="">
        <p id="resultado" style="color:${pResultado.style.color}">${pResultado.innerHTML}</p>
        `;
    }
}

function hack() {
    resultadoDiv.className = "result-container";
    resultadoDiv.innerHTML = `
        <p>Usernames or email addresses</p>
        <ol id="lista-usuarios">
        </ol>
        <p>Passwords</p>
        <ol id="lista-contrasenas">
        </ol>
    `;
    
    const listaUsuarios = document.querySelector("#lista-usuarios");
    const listaContrasenas = document.querySelector("#lista-contrasenas");

    for (let i = 0; i < Usuarios.length; i++) {
        listaUsuarios.innerHTML += `<li>${Usuarios[i]}</li>`;
        listaContrasenas.innerHTML += `<li>${Contrasenas[i]}</li>`;
    }
}