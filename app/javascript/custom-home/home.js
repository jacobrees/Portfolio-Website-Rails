const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = "#4DD0E1";

class Ball {
  constructor(effect) {
    this.effect = effect;
    this.x = this.effect.width * 0.5;
    this.y = this.effect.height * 0.5;
    this.radius = Math.random() * 80 + 20;
    this.speedY = Math.random() - 0.5;
    this.speedX = Math.random() - 0.5;
    this.angle = 0;
    this.va = Math.random() * 0.1 - 0.05;
    this.range = Math.random() * 20;
  }
  update() {
    if (this.x < this.radius || this.x > this.effect.width - this.radius)
      this.speedX *= -1;
    if (this.y < this.radius || this.y > this.effect.height - this.radius)
      this.speedY - 1;
    this.angle += this.va;
    this.x += this.speedX * Math.sin(this.angle) * this.range;
    this.y += this.speedY * Math.cos(this.angle) * this.range;
  }
  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fill();
  }
  reset() {
    this.x = this.effect.width * 0.5;
    this.y = this.effect.height * 0.5;
  }
}

class MetaballsEffect {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.metaballsArray = [];
  }
  init(numberOfBalls) {
    for (let i = 0; i < numberOfBalls; i++) {
      this.metaballsArray.push(new Ball(this));
    }
  }
  update() {
    this.metaballsArray.forEach((ball) => {
      ball.update();
    });
  }
  draw(context) {
    this.metaballsArray.forEach((ball) => {
      ball.draw(context);
    });
  }
  reset(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
    this.metaballsArray.forEach((ball) => {
      ball.reset();
    });
  }
}

const effect = new MetaballsEffect(canvas.width, canvas.height);
effect.init(20);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  effect.update();
  effect.draw(ctx);
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = "#4DD0E1";
  effect.reset(canvas.width, canvas.height);
});
