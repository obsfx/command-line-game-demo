const time = {}

time.now = 0;
time.then = Date.now();
time.deltaTime = 0;
time.timeElapsed = 0;
time.tickCount = 0;

time.tick = function() {
    this.now = Date.now();
    this.deltaTime = this.now - this.then;
    this.timeElapsed += this.deltaTime;
    this.then = this.now;
    this.tickCount += 1;
}

module.exports = time;