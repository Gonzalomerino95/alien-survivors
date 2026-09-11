class Bullet{
    constructor(ctx, playerX, playerY){
        this.ctx = ctx;
        this.x = playerX;
        this.y = playerY;
        this.width = 4;
        this.height = 7;
        this.speed = 2;

        this.bulletOutOfBounds = false;
        this.bulletSprite = new Image();
        this.bulletSprite.src = "./Assets/VFX/VFX_Bullet.png"
    }

    draw(){
        this.ctx.drawImage(this.bulletSprite, this.x, this.y, this.width, this.height);
    }

    move(){
        this.y -= this.speed;
        if(this.y <= 0){
            this.bulletOutOfBounds = true;
        }
    }
}