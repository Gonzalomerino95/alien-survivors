class Player {
    constructor(ctx){
        this.ctx = ctx;

        this.playerSprites = [];
        this.playerSpritePosition = 2;
        this.targetSpritePosition = null;
        this.lastSpriteChange = performance.now();

        this.x = this.ctx.canvas.width/2;
        this.y = this.ctx.canvas.height/2;

        this.height = 26;
        this.width = 26;

        this.speed = 2;
        this.vx = 0;
        this.vy = 0;

        this.keyPressed = {
            ArrowUp : false,
            ArrowDown : false,
            ArrowLeft : false,
            ArrowRight : false, 
        };

        //Load Sprites
        const spriteArr = ["./Assets/Sprites/Player/Ship_FarLeft.png", "./Assets/Sprites/Player/Ship_Left.png", "./Assets/Sprites/Player/Ship_Mid.png", "./Assets/Sprites/Player/Ship_Right.png", "./Assets/Sprites/Player/Ship_FarRight.png"];
        
        spriteArr.forEach((sprite)=>{
            const playerSprite = new Image();
            playerSprite.src = sprite;
            //console.log(this.height, this.width)
            this.playerSprites.push(playerSprite);
        })

        //Player Input Listners
        document.addEventListener("keydown", (e) => {
            switch (e.key){
                case "ArrowUp":
                    this.keyPressed.ArrowUp = true;
                    break;
                case "ArrowDown":
                    this.keyPressed.ArrowDown = true;
                    break;
                case "ArrowLeft":
                    this.keyPressed.ArrowLeft = true;
                    break;
                case "ArrowRight":
                    this.keyPressed.ArrowRight = true;
                    break;
            }
        });

        document.addEventListener("keyup", (e) => {
            switch (e.key){
                case "ArrowUp":
                    this.keyPressed.ArrowUp = false;
                    break;
                case "ArrowDown":
                    this.keyPressed.ArrowDown = false;
                    break;
                case "ArrowLeft":
                    this.keyPressed.ArrowLeft = false;
                    break;
                case "ArrowRight":
                    this.keyPressed.ArrowRight = false;
                    break;
            }
        });
    }

    draw(){
        /*if(this.keyPressed.ArrowLeft){
                console.log("Sprite Arr:", this.playerSprites)
                console.log("Sprite Drawn:", this.playerSprites[this.playerSpritePosition])
        }*/
        this.ctx.drawImage(this.playerSprites[this.playerSpritePosition], this.x, this.y, this.width, this.height);
    }

    move(){
        for(let key in this.keyPressed){
            if(this.keyPressed[key] === true){
                switch (key){
                    case "ArrowUp":
                        if(this.y > 0){
                            this.y -= this.speed;
                        }
                        break;
                    case "ArrowDown":
                        if(this.y < this.ctx.canvas.height - this.height){
                            this.y += this.speed;
                        }
                        break;
                    case "ArrowLeft":
                        if(this.x > 0){
                            this.x -= this.speed;
                        }
                        break;
                    case "ArrowRight":
                        if(this.x < this.ctx.canvas.width - this.width){
                            this.x += this.speed;
                        }
                        break;
                }
            }
        }
        

        //Choose the target sprite
        if(this.keyPressed.ArrowLeft === true && this.keyPressed.ArrowRight === false){
            this.targetSpritePosition = 0;
        }else if(this.keyPressed.ArrowLeft === false && this.keyPressed.ArrowRight === true){
            this.targetSpritePosition = 4;
        }else{
            this.targetSpritePosition = 2;
        }

        //Move to target sprite, going through intermediate sprites
        const elapsed = performance.now() - this.lastSpriteChange;
        if(elapsed >= 250){
            //console.log("playerSpritePosition:", this.playerSpritePosition, "targetSpritePosition:", this.targetSpritePosition)
            if(this.playerSpritePosition < this.targetSpritePosition){
                this.playerSpritePosition++;
            }
            if(this.playerSpritePosition > this.targetSpritePosition){
                this.playerSpritePosition--;
            }
            this.lastSpriteChange = performance.now();
        }
    }

    shoot(){

    }
}