class Game{
    constructor(ctx){
        this.ctx = ctx;
        this.interval = null;
    }

    start(){
        this.interval = setInterval(() =>{
            this.clear();
            this.move();
            this.shoot();
            this.checkCollision();
            this.draw();
        },1000/60)
    }

    clear(){
        this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    move(){

    }

    shoot(){

    }

    checkCollision(){

    }

    draw(){

    }

    gameOver(){

    }
}