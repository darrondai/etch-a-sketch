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

const gridSquares = document.querySelectorAll(".grid-square");

gridSquares.forEach((gridSquare) => {
  addEventListener("mouseover", () => gridSquare.classList.toggle("hover"));
  addEventListener("mouseout", () => gridSquare.classList.toggle("hover"));
});
