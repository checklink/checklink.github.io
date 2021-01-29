let number = document.querySelector('.dice-wrap__number');
let button = document.querySelector('.dice-wrap__button');

button.addEventListener('click', () => {
  number.style.transform = 'scale(0)';
  setTimeout(() => {
    number.textContent = diceRoll.d6();
    number.style.transform = 'scale(1)';
  }, 1000);
});

let diceRoll = {
  randomInt: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  d6: function () {
    return this.randomInt(1, 20);
  }
}


