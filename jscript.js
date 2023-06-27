document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.getElementById('grid-container');
    const newGridButton = document.getElementById('new-grid-button');
    let gridSize = 16;
  
    // Create the initial grid
    createGrid(gridSize);
  
    // Add event listener to the new grid button
    newGridButton.addEventListener('click', function() {
      const input = prompt('Enter the number of squares per side (maximum 100):');
      const newGridSize = parseInt(input);
  
      if (!isNaN(newGridSize) && newGridSize > 0 && newGridSize <= 100) {
        removeGrid();
        gridSize = newGridSize;
        createGrid(gridSize);
      } else {
        alert('Invalid input. Please enter a number between 1 and 100.');
      }
    });
  
    // Add event listener for hover effect
    gridContainer.addEventListener('mouseover', function(event) {
      if (event.target.classList.contains('grid-cell')) {
        const randomColor = getRandomColor();
        event.target.style.backgroundColor = randomColor;
      }
    });
  
    // Function to generate a random color
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    // Function to create the grid
    function createGrid(size) {
      gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  
      for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        gridContainer.appendChild(cell);
      }
    }
  
    // Function to remove the grid
    function removeGrid() {
      while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
      }
    }
  });
  

