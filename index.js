class LightsRope {
  constructor() {
    this.lights = document.getElementsByClassName("light");
    this.light = document.querySelector(".light");
    this.lightsRope = document.querySelector(".lightsrope");
    this.playBtn = document.getElementById("play");
    this.stopBtn = document.getElementById("stop");
    this.title = document.querySelector(".title");

    this.colors = ["red", "yellow", "blue", "green"];
  }

  init() {
    this.configurePlayButtonEvent();
    this.configureStopButtonEvent();
    this.configureWindowResizeEvent();
    this.addLights(this.calculateAmountOfLight());
  }

  addLight(color) {
    const light = document.createElement("div");

    light.classList.add("light", color);
    this.lightsRope.appendChild(light);
  }

  addLights(quantity) {
    this.clearLights();

    for (let i = 0; i < quantity; i++) {
      const colorsQuantity = this.colors.length;
      const color = this.colors[Math.round(i % colorsQuantity)];

      this.addLight(color);
    }
  }

  clearLights() {
    this.lightsRope.innerHTML = "";
  }

  addAnimate(elem) {
    elem.removeAttribute("style");
    elem.style.animationPlayState = "running";
    elem.style.WebkitAnimationPlayState = "running";
    elem.style.animationDuration = "1s";
  }

  removeAnimate(elem) {
    elem.style.animation = "none";
  }

  calculateAmountOfLight() {
    const lightWidth = 60;
    const windowWidth = window.innerWidth;
    const lightQuantity = Math.floor(windowWidth / lightWidth);

    return lightQuantity;
  }

  start() {
    for (let i = 0; i < this.lights.length; i++) {
      this.addAnimate(this.lights[i]);
      this.lights[i].classList.remove("off");
    }

    this.addAnimate(this.title);
  }

  stop() {
    for (let i = 0; i < this.lights.length; i++) {
      this.removeAnimate(this.lights[i]);
      this.lights[i].classList.add("off");
    }

    this.removeAnimate(this.title);
  }

  configurePlayButtonEvent() {
    this.playBtn.addEventListener("click", this.start.bind(this));
  }

  configureStopButtonEvent() {
    this.stopBtn.addEventListener("click", this.stop.bind(this));
  }

  configureWindowResizeEvent() {
    window.addEventListener("resize", () => {
      this.addLights(this.calculateAmountOfLight());
    });
  }
}

const lightsRope = new LightsRope();

lightsRope.init();
