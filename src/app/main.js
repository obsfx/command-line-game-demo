const game = require('./game')

const loop = _ => {
    game.update();
    game.draw();
    
    requestAnimationFrame(loop);
}

loop();

console.log('init..');