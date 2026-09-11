class Game{
    constructor(ctx){
        this.ctx = ctx;
        this.interval = null;
        this.background = new Background(ctx);
        this.player = new Player(ctx);
        this.bulletsArr = []

        this.spawnedEnemies = [];
        this.spawnLimit = 5;

        this.lastSpawnUpdate = performance.now();
    }

    start(){
        this.interval = setInterval(() =>{
            this.clear();
            this.increaseSpawnLimit();
            this.spawn();
            this.move();
            this.shoot();
            this.checkEnemyCollision();
            this.draw();
        },1000/60)
    }

    clear(){
        this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    spawn(){
        if(this.spawnedEnemies.length < this.spawnLimit){
            const enemy = new Enemy(this.ctx);
            enemy.randomizeSprite();
            this.spawnedEnemies.push(enemy);   
            //console.log("Enemy Spawn")        
        }
    }
    
    increaseSpawnLimit(){
        if((performance.now() - this.lastSpawnUpdate) >= 3000){
            this.spawnLimit++;
            this.lastSpawnUpdate = performance.now();
            //console.log("Sapwn");
        }
    }

    move(){ 
        this.background.move();
        this.player.move();

        /*Move Enemies*/
        this.spawnedEnemies.forEach((enemy) => {
            enemy.move(this.player.x, this.player.y);
        })
        //Move bullets
        this.bulletsArr.forEach((bullet) => {
            bullet.move();
        })
        //Remove out of bounds bullets
        this.bulletsArr = this.bulletsArr.filter((bullet)=>{
            if(bullet.bulletOutOfBounds === false){
                return bullet
            }
        })
    }

    shoot(){
        const bullet = this.player.shoot();
        if(bullet){
            this.bulletsArr.push(bullet); 
        }
    }

    checkEnemyCollision(){    
        // set player sprite borders
        let playerLeft = this.player.x;
        let playerRight = this.player.x + this.player.width;
        let playerTop = this.player.y;
        let playerBottom = this.player.y + this.player.height;
        

        // set enemy srprite borders
        let enemyBorderArr = [];


        this.spawnedEnemies.forEach((enemy) => {
            let enemyLeft = enemy.x;
            let enemyRight = enemy.x + enemy.width;
            let enemyTop = enemy.y;
            let enemyBottom = enemy.y + enemy.height;

            let enemyBorder = [enemyLeft, enemyRight, enemyTop, enemyBottom]

            enemyBorderArr.push(enemyBorder);
        })

        //Check collision
        enemyBorderArr.forEach((enemy) => {
            let horizontalCollision = false;
            let verticalCollision = false;

            if(playerRight >= enemy[0] && playerLeft <= enemy[1]){
                horizontalCollision = true;
                //console.log("horizontal Colision");
            }

            if(playerBottom >= enemy[2] && playerTop <= enemy[3]){
                verticalCollision = true;
                //console.log("Vertical Colision");
            }

            if(horizontalCollision === true && verticalCollision === true ){
                //console.log("Game Over")
                this.gameOver();
            }
        })      
    }

    draw(){
        this.background.draw();
        this.player.draw();

        /*Draw Enemies*/
        this.spawnedEnemies.forEach((enemy) => {
            enemy.draw();
        })

        // Draw Bullets
        this.bulletsArr.forEach((bullet) => {
            bullet.draw(); 
        })
    }

    gameOver(){
        clearInterval(this.interval);
        this.interval = null;
    }
}