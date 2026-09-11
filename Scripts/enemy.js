class Enemy{
    constructor(ctx){
        this.ctx = ctx

        this.enemySprites = [];

        this.selectedSprite = null;

        this.x = null;
        this.y = null;

        this.width = 0;
        this.height = 0;

        this.speed = 1;
        this.vx = 0;
        this.vy = 0; 

        this.ready = null;

        //Load enemy Sprite options
        const spriteArr = ["./Assets/Sprites/Aliens/Alien_Air1.png", "./Assets/Sprites/Aliens/Alien_Air2.png", "./Assets/Sprites/Aliens/Alien_Air3.png", "./Assets/Sprites/Aliens/Alien_Air4.png", "./Assets/Sprites/Aliens/Alien_Air5.png", "./Assets/Sprites/Aliens/Alien_Air6.png"]

        spriteArr.forEach((sprite) =>{
            const enemySprite = new Image();
            enemySprite.src = sprite;;
            this.enemySprites.push(enemySprite);
        })
    }

    randomizeSpawnLocation(){
        //Randomize Spawn Location

        //console.log(this.height, this.width);
        const spawnEdges = ["top", "right", "bottom", "left"];
        let spawnLocation = spawnEdges[Math.floor(Math.random() * spawnEdges.length)];

        switch (spawnLocation) {
            case "top":
                this.x = Math.floor(Math.random() * this.ctx.canvas.width);
                this.y = -this.height;
                break;
            case "right":
                this.x = this.ctx.canvas.width;
                this.y = Math.floor(Math.random() * this.ctx.canvas.height);
                break;
            case "bottom":
                this.x = Math.floor(Math.random() * this.ctx.canvas.width);
                this.y = this.ctx.canvas.height;
                break;
            case "left":
                this.x = -this.width;
                this.y = Math.floor(Math.random() * this.ctx.canvas.height);
                break;
        }

    }

    randomizeSprite(){
        this.selectedSprite = this.enemySprites[Math.floor(Math.random() * this.enemySprites.length)];
        if(this.selectedSprite.complete && this.selectedSprite.naturalWidth > 0){
            this.width = this.selectedSprite.naturalWidth;
            this.height = this.selectedSprite.naturalHeight;
            this.randomizeSpawnLocation();
            this.ready = true;
        } else {
            this.selectedSprite.addEventListener("load", (e) => {
            //console.log(e)
            this.width = this.selectedSprite.naturalWidth;
            this.height = this.selectedSprite.naturalHeight;
            this.randomizeSpawnLocation();
            this.ready = true;
            });
        }
    }
       

    draw(){
        if(this.ready === true){
            this.ctx.drawImage(this.selectedSprite, this.x, this.y, this.width, this.height);
        }
    }

    move(targetX, targetY){
        if(this.ready === true){
            if(this.x > targetX){
                this.x -= this.speed;
            }
            if(this.y > targetY){
                this.y -= this.speed;
            }
            if(this.x < targetX){
                this.x += this.speed;
            }
            if(this.y < targetY){
                this.y += this.speed;
            }
        }
    }
}