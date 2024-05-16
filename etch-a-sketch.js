function createGrid(numRows, numColumns) {
  const container = document.querySelector(".grid-container");

  function createGridSquare() {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("grid-square");
    return squareDiv;
  }

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numColumns; col++) {
      container.appendChild(createGridSquare());
      console.log(`box ${row}, ${col}`);
    }
  }
}

createGrid(16, 16);
