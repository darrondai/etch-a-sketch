function createGrid(numRows, numColumns) {
  const container = document.querySelector(".grid-container");

  function createGridSquare() {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    return gridSquare;
  }

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numColumns; col++) {
      const gridSquare = createGridSquare();
      gridSquare.textContent = `${row}, ${col}`;
      container.appendChild(gridSquare);
    }
  }
}

createGrid(16, 16);

function calcRandRgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

const gridSquares = document.querySelectorAll(".grid-square");

gridSquares.forEach((gridSquare) => {
  gridSquare.addEventListener("mouseover", () => {
    gridSquare.style.backgroundColor = calcRandRgb();
  });
  gridSquare.addEventListener("mouseout", () => {
    gridSquare.style.backgroundColor = "green";
  });
});
