// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function () {

  // Select elements
  const colorBox = document.getElementById("color-box");
  const button = document.getElementById("change-color-btn");

// FUNCTION TO GENERATE RANDOM COLOR
  function getRandomColor() {
    // Generate random numbers for RGB
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Return RGB color as a formatted string using backticks
    return `rgb(${r}, ${g}, ${b})`; 
  }

  // BUTTON CLICK EVENT
  button.addEventListener("click", function () {

    // Change background color
    const newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
  });

});