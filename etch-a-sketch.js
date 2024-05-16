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
      gridSquare.style.flexBasis = `${100 / numColumns}%`;
      container.appendChild(gridSquare);
    }
  }
}

function calcRandRgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

createGrid(16, 16);

const gridSquares = document.querySelectorAll(".grid-square");

gridSquares.forEach((gridSquare) => {
  gridSquare.addEventListener("mouseover", () => {
    gridSquare.style.backgroundColor = calcRandRgb();
  });
});
