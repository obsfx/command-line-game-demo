const canvas = require('./modules/canvas');
const time = require('./modules/time');
const sceneManager = require('./modules/scene-manager');

const mainScene = require('./scenes/main-scene');

const game = {}

game.canvas = canvas;
game.time = time;
game.sceneManager = sceneManager;

game.sceneManager.set(mainScene)

game.update = function() {
    this.time.tick();
    this.sceneManager.update(this.time.deltaTime, this);
    // console.log(this.time)
}

game.draw = function() {
    this.sceneManager.draw(this.time.deltaTime, this);
}

module.exports = game;