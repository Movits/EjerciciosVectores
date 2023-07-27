const inputImgs = document.querySelector("#input-imgs");
const divImgs = document.querySelector("#div-imgs");
const inputPosImg = document.querySelector("#pos-img");

const IMGS = [];

function agregar() {
    const IMGS_AGREGADAS = inputImgs.value;
    IMGS.push(IMGS_AGREGADAS);
    updateDivImgs();
}

function borrarUltImg() {
    IMGS.pop();
    updateDivImgs();
}



function borrarImgPos() {
    const posImg = inputPosImg.value;
}

function updateDivImgs() {
    let htmlConteudo = ``;
    for (let i = 0; i < IMGS.length; i++) {
        htmlConteudo += `
            <img src="${IMGS[i]}" alt="">
        `;
    }
    divImgs.innerHTML = htmlConteudo;
}