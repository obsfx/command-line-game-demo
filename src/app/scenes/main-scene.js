const game = require('../game');

const mainScene = {}

mainScene.init = game => {
    console.log('Main Scene');
}

mainScene.update = (dt, game) => {
    
}

mainScene.draw = (dt, game) => {
    game.canvas.clear('black');
    game.canvas.rect(10, 10, 30, 30, 'red');
}

module.exports = mainScene;