window.addEventListener('load', function() {
const quoteElement = document.querySelector('.txt q');
const adviceNumberElement = document.querySelector('.txt h4');
const diceButton = document.querySelector('.click button');
function showNewAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      const advice = data.slip.advice;
      const adviceId = data.slip.id;
            quoteElement.textContent = `${advice}`;
      adviceNumberElement.textContent = `ADVICE #${adviceId}`;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
diceButton.addEventListener('click', showNewAdvice);
showNewAdvice();
  });