const matrixContainer = document.querySelector(".matrix-container");
const numRows = 10; // Número de filas
const numColumns = 3; // Número de columnas

function createMatrixEffect() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const duration = 100; // Velocidad de caída de los caracteres en milisegundos

    // Crear las filas
    for (let i = 0; i < numRows; i++) {
        const row = document.createElement("div");
        row.className = "matrix-row";
        matrixContainer.appendChild(row);
    }

    // Crear las columnas en cada fila
    const rows = document.querySelectorAll(".matrix-row");
    rows.forEach((row) => {
        for (let i = 0; i < numColumns; i++) {
            const column = document.createElement("span");
            column.className = "matrix-column";
            row.appendChild(column);
        }
    });

    // Generar caracteres en cada columna
    setInterval(() => {
        const columns = document.querySelectorAll(".matrix-column");

        columns.forEach((column) => {
            const matrixChar = document.createElement("span");
            matrixChar.textContent = characters[Math.floor(Math.random() * characters.length)];
            matrixChar.style.animationDuration = `${Math.random() * 2 + 3}s`;
            matrixChar.style.animationDelay = `${Math.random() * 2}s`;
            matrixChar.style.color = "orange"; // Color naranja
            matrixChar.style.fontWeight = "bold"; // Negrita
            column.appendChild(matrixChar);

            setTimeout(() => {
                matrixChar.remove();
            }, duration * 10);
        });
    }, duration);
}

createMatrixEffect();
