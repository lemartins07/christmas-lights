export default class ChristmasLight {
  constructor(selector, intervalTime) {
    this.circleLights = document.querySelectorAll(selector);
    this.intervalTime = intervalTime || 3000;
  }

  addEvenIntensity() {
    this.circleLights.forEach((item, index) => {
      if (index % 2 === 0) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  removeEvenIntensity() {
    this.circleLights.forEach((item, index) => {
      if (index % 2 === 0) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  }

  changeOddIntensity() {
    this.circleLights.forEach((item, index) => {
      if (index % 2 !== 0) {
        item.classList.add('active');
        console.log(item, 'impar');
      }
    });
  }

  startLights() {
    setInterval(() => { this.addEvenIntensity('add'); }, this.intervalTime);
    setInterval(() => { this.removeEvenIntensity('remove'); }, this.intervalTime * 2);
  }
}
