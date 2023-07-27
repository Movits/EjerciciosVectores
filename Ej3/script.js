const inputImgs = document.querySelector("#input-imgs");
const divImgs = document.querySelector("#div-imgs");

const IMGS = [];

function agregar() {
    const IMGS_AGREGADAS = inputImgs.value;
    IMGS.push(IMGS_AGREGADAS);
    divImgs.innerHTML += `
        <img src="${IMGS_AGREGADAS}" alt="">
    `;
}