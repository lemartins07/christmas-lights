export default class ChristmasLight {
  constructor(selector, intervalTime) {
    this.circleLights = document.querySelectorAll(selector);
    this.intervalTime = intervalTime || 500;

    this.btnStart = document.querySelector('.btn.start');
    this.btnStop = document.querySelector('.btn.stop');
    this.btnRun = document.querySelector('.btn-run');

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

  changeIntensity() {
    const intensityInput = document.querySelector('#intensity');
    this.intervalTime = (intensityInput.value * 1000) / 2;

    clearInterval(this.evenLightsOn);
    clearInterval(this.oddLightsOn);

    this.evenLightsOn = null;

    this.startLights();
    console.log(this);
  }

  addBtnEvents() {
    this.btnStart.addEventListener('click', this.startLights);
    this.btnStop.addEventListener('click', this.stopLights);
    this.btnRun.addEventListener('click', this.changeIntensity);
  }

  bindEvents() {
    this.addEvenIntensity = this.addEvenIntensity.bind(this);
    this.removeEvenIntensity = this.removeEvenIntensity.bind(this);
    this.stopLights = this.stopLights.bind(this);
    this.startLights = this.startLights.bind(this);
    this.changeIntensity = this.changeIntensity.bind(this);
  }
}
