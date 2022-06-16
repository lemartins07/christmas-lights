export default class ChristmasLight {
  constructor(selector, intervalTime) {
    this.circleLights = document.querySelectorAll(selector);
    this.intervalTime = intervalTime || 3000;

    this.btnStart = document.querySelector('.btn.start');
    this.btnStop = document.querySelector('.btn.stop');

    this.bindEvents();
    this.addBtnEvents();
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

  removeLightsActive() {
    this.circleLights.forEach((item) => {
      item.classList.remove('active');
      item.classList.add('off');
    });
  }

  removeLightsOff() {
    this.circleLights.forEach((item) => {
      item.classList.remove('off');
    });
  }

  startLights() {
    if (!this.evenLightsOn) {
      this.addEvenIntensity();
      this.evenLightsOn = setInterval(() => {
        this.addEvenIntensity();
      }, this.intervalTime);

      this.removeLightsOff();

      this.oddLightsOn = setInterval(() => {
        this.removeEvenIntensity();
      }, this.intervalTime * 2);
    }
  }

  stopLights() {
    clearInterval(this.evenLightsOn);
    clearInterval(this.oddLightsOn);
    this.evenLightsOn = null;
    this.oddLightsOn = null;
    this.removeLightsActive();
  }

  addBtnEvents() {
    this.btnStart.addEventListener('click', this.startLights);
    this.btnStop.addEventListener('click', this.stopLights);
  }

  bindEvents() {
    this.addEvenIntensity = this.addEvenIntensity.bind(this);
    this.removeEvenIntensity = this.removeEvenIntensity.bind(this);
    this.stopLights = this.stopLights.bind(this);
    this.startLights = this.startLights.bind(this);
  }
}
