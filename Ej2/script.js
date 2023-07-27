const Productos = ["Producto 1", "Producto 2", "Producto 3"];
const Stock = [100,100,100];
const prodSelect = document.querySelector("#producto-select");
const prodDiv = document.querySelector("#tabla-productos");

function compra() {
    switch (prodSelect.value) {
        case Productos[0]:
            if (Stock[0] > 0) {
                Stock[0] -= 1;
            } 
            break;
        case Productos[1]:
            if (Stock[1] > 0) {
                Stock[1] -= 1;
            }
            break;
        case Productos[2]:
            if (Stock[2] > 0) {
                Stock[2] -= 1;
            }
            break;
    }

    prodDiv.innerHTML = `
        <p id="producto1">Producto 1 - Stock: ${Stock[0]}</p>
        <p id="producto2">Producto 2 - Stock: ${Stock[1]}</p>
        <p id="producto3">Producto 3 - Stock: ${Stock[2]}</p>
    `;
}