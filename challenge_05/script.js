const countElement = document.getElementById('number'); // Get the element with id 'number'
let count = 0; // Initialize the count variable to 0

async function startCounting() {
  for (let i = 0; i <= 185; i++) { // Loop from 0 to 185
    countElement.textContent = count; // Update the text content of the countElement with the current count value
    await new Promise((resolve) => setTimeout(resolve, 15)); // Wait for 15 milliseconds using a Promise and setTimeout
    count++; // Increment the count variable by 1
  }
}

window.onload = startCounting; // Call the startCounting function when the window has finished loading
