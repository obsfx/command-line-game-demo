const config = require('../config')

const canvas = {}

canvas.width = config.width;
canvas.height = config.height;

canvas.element = document.querySelector('#screen');
canvas.element.width = canvas.width;
canvas.element.height = canvas.height;

canvas.ctx = canvas.element.getContext('2d');

canvas.rect = function(x, y, w, h, color) {
    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, w, h);
    this.ctx.closePath();
}

canvas.clear = function(color) {
    this.rect(0, 0, this.width, this.height, color);
}

module.exports = canvas;