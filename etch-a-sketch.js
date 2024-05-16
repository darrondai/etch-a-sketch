function createGrid(squaresPerSide) {
  const container = document.querySelector(".grid-container");

  function createGridSquare() {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    gridSquare.addEventListener("mouseover", () => {
      gridSquare.style.backgroundColor = calcRandRgb();
    });
    return gridSquare;
  }

  for (let row = 0; row < squaresPerSide; row++) {
    for (let col = 0; col < squaresPerSide; col++) {
      const gridSquare = createGridSquare();
      gridSquare.style.flexBasis = `${100 / squaresPerSide}%`;
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
  const squaresPerSide = getDimensions();
  gridContainer.replaceChildren();
  createGrid(squaresPerSide);
});
