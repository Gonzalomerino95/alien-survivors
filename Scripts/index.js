const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

const game = new Game(ctx);

//Assign start game funtion to a button screen later
game.start();