const countElement = document.getElementById('number');
let count = 0;
async function startCounting() {
  for (let i = 0; i <= 185; i++) {
    countElement.textContent = count;
    await new Promise((resolve) => setTimeout(resolve, 15));
    count++;
  }
}
window.onload = startCounting;