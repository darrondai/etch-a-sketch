function createGrid(numRows, numColumns) {
  const container = document.querySelector(".grid-container");

  function createGridSquare() {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    gridSquare.addEventListener("mouseover", () => {
      gridSquare.style.backgroundColor = calcRandRgb();
    });
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

function getDimensions() {
  let input = prompt("how many squares per side?");

  while (!Number.isInteger(+input) || input > 100 || input < 0) {
    alert("please enter a number between 0 and 100");
    input = prompt("how many squares per side?");
  }
  return +input;
}

createGrid(16, 16);

const newGridBtn = document.querySelector("#new-grid-btn");
const gridContainer = document.querySelector(".grid-container");

newGridBtn.addEventListener("click", () => {
  const dimensions = getDimensions();
  gridContainer.replaceChildren();
  createGrid(dimensions, dimensions);
});
