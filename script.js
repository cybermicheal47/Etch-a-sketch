const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  }
}

makeRows(16, 16);

function promptForGridSize() {
  let gridSize = prompt("Please enter the number of squares per side (1-100):");

  if (gridSize === null) {
    return; // User clicked on "Cancel" 
  }
   //after the prompt() function is called, we check if the value of gridSize is null, which indicates that the user clicked on 
  //"Cancel." If that's the case, the function simply returns without further action.





  gridSize = parseInt(gridSize);

  if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
    alert("Invalid input. Please enter a number between 1 and 100.");
    promptForGridSize();
    return;
  }
 
  // Remove existing grid
  while (container.firstChild) {
    container.firstChild.remove();
  }

  makeRows(gridSize, gridSize);
}

const changeGridButton = document.getElementById("change-grid-button");
changeGridButton.addEventListener("click", promptForGridSize);
