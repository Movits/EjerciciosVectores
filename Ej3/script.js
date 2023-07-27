const inputImgs = document.querySelector("#input-imgs");
const divImgs = document.querySelector("#div-imgs");

const IMGS_AGREGADAS = inputImgs.value;
const IMGS = [];

function agregar() {
    IMGS += IMGS_AGREGADAS;
    divImgs.innerHTML += `
        <img src="${IMGS_AGREGADAS.value}" alt="">
    `;
}