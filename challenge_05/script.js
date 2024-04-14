const countElement = document.getElementById('number');
let count = 0;

// Function to update the count value
function updateCount() {
  countElement.textContent = count;
}

// Function to start counting
function startCounting() {
  const intervalId = setInterval(() => {
    count++;
    updateCount();

    if (count > 186) {
      clearInterval(intervalId);
    }
  }, 15); // Delay of 1 second (15 milliseconds)
}

// Start counting when the page loads
window.onload = startCounting;