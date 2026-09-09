class Background{
    constructor(ctx){
        this.ctx = ctx;
        this.backgroundImg = new Image();
        this.backgroundImg.src = "./Assets/Backgrounds/Blue Nebula/Blue_Nebula_08-1024x1024.png"

        this.x = 0;
        this.y = 0;
        this.v = 1;
    }


    draw(){
        this.ctx.drawImage(this.backgroundImg, this.x, this.y, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.drawImage(this.backgroundImg, this.x, this.y - this.ctx.canvas.height, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    move(){
        this.y += this.v;

        if(this.y >= this.ctx.canvas.height){
            this.y = 0;
        }
    }
}