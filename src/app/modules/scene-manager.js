const sceneManager = {}

sceneManager.currentScene = null;

sceneManager.set = function(sceneObj, game) {
    this.currentScene = sceneObj;
    this.currentScene.init(game);
}

sceneManager.update = function(dt, game) {
    if (this.currentScene != null) {
        this.currentScene.update(dt, game);
    }
}

sceneManager.draw = function(dt, game) {
    if (this.currentScene != null) {
        this.currentScene.draw(dt, game);
    }
}

module.exports = sceneManager;