class Player {
    constructor(ctx){
        this.ctx = ctx;
        this.playerSprite = new Image();
        this.playerSprite.src = "./Assets/Sprites/Player/Ship_Mid.png"

        this.x = this.ctx.canvas.width/2;
        this.y = this.ctx.canvas.height/2;

        this.height = 26;
        this.width = 26;

        this.speed = 3;
        this.vx = 0;
        this.vy = 0;

        this.keyPressed = {
            ArrowUp : false,
            ArrowDown : false,
            ArrowLeft : false,
            ArrowRight : false, 
        };

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
        this.ctx.drawImage(this.playerSprite, this.x - this.width/2, this.y - this.height/2 ,this.width, this.height);
    }

    move(){
        for(key in this.keyPressed){

            
        }
    }

    shoot(){

    }

    checkCollision(){

    }
}