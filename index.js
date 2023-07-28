const display = document.querySelector('.display');

const handleDigiClick = (event) => {
  if (display.textContent.length < 10) {
    const tlacitko = event.target.textContent;
    if (display.textContent === '0') {
      display.textContent = tlacitko;
    } else {
      display.textContent += tlacitko;
    }
  }
};

document.querySelector('#btn-1').addEventListener('click', handleDigiClick);
document.querySelector('#btn-2').addEventListener('click', handleDigiClick);
document.querySelector('#btn-3').addEventListener('click', handleDigiClick);
document.querySelector('#btn-4').addEventListener('click', handleDigiClick);
document.querySelector('#btn-5').addEventListener('click', handleDigiClick);
document.querySelector('#btn-6').addEventListener('click', handleDigiClick);
document.querySelector('#btn-7').addEventListener('click', handleDigiClick);
document.querySelector('#btn-8').addEventListener('click', handleDigiClick);
document.querySelector('#btn-9').addEventListener('click', handleDigiClick);
document.querySelector('#btn-0').addEventListener('click', handleDigiClick);
