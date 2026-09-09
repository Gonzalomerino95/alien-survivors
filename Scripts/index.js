const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const game = new Game(ctx);

//Assign start game funtion to a button screen later
game.start();