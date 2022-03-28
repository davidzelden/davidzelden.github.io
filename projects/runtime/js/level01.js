var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 600, "y": groundY - 110},
                { "type": "sawblade", "x": 1060, "y": groundY - 20},
                { "type": "sawblade", "x": 1480, "y": groundY - 30},
                { "type": "sawblade", "x": 1600, "y": groundY - 20},
                { "type": "sawblade", "x": 1950, "y": groundY - 115},
                { "type": "sawblade", "x": 2180, "y": groundY - 30},

                { "type": "enemies", "x": 1000, "y": groundY - 70},
                { "type": "enemies", "x": 1380, "y": groundY - 30},
                { "type": "enemies", "x": 1700, "y": groundY - 50},

                { "type": "reward", "x": 2000, "y": groundY - 30},
                { "type": "reward", "x": 1500, "y": groundY - 65},
                { "type": "reward", "x": 950, "y": groundY - 70},

                ///level 2

                { "type": "fireball", "x": 2800, "y": groundY - 115},
                { "type": "fireball", "x": 3200, "y": groundY - 30},
                { "type": "fireball", "x": 3600, "y": groundY - 20},
                { "type": "fireball", "x": 3980, "y": groundY - 115},
                { "type": "fireball", "x": 4175, "y": groundY - 25},


                { "type": "enemies2", "x": 3850, "y": groundY - 70},
                { "type": "enemies2", "x": 4150, "y": groundY - 60},
                { "type": "enemies2", "x": 4550, "y": groundY - 60},
                { "type": "enemies2", "x": 5300, "y": groundY - 30},


                { "type": "reward2", "x": 2900, "y": groundY - 30},
                { "type": "reward2", "x": 3700, "y": groundY - 65},
                { "type": "reward2", "x": 4250, "y": groundY - 70},
                { "type": "reward2", "x": 4400, "y": groundY - 30},
             

            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
    function createSawBlade(x, y){
        var hitZoneSize = 25;//creates the hitbox
        var damageFromObstacle = 50;//sets the damage of the obstacle
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);//creates the function of the hitbox
        sawBladeHitZone.x = x;//this is the saw blade x coordinate
        sawBladeHitZone.y = y;// this is the saw blade's y coordinate
        game.addGameItem(sawBladeHitZone);///this draws the blade on the hitzone
        
                
        var obstacleImage = draw.bitmap('img/sawblade.png');// this puts the blade over the hitzone
        sawBladeHitZone.addChild(obstacleImage); //this is the image for the blade
        obstacleImage.x = -25;//relative x coordinate
        obstacleImage.y = -25;//relative y coordinate
        
}
    function createFireBall(x, y){
        var hitZoneSize = 25;//creates the hitbox
        var damageFromObstacle = 50;//sets the damage of the obstacle
        var fireBallHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);//creates the function of the hitbox
        fireBallHitZone.x = x;//this is the fire ball x coordinate
        fireBallHitZone.y = y;// this is the fire ball's y coordinate
        game.addGameItem(fireBallHitZone);///this draws the fire ball on the hitzone
        
                
        var obstacleImage = draw.bitmap('img/fireball.png');// this puts the blade over the hitzone
        fireBallHitZone.addChild(obstacleImage); //this is the image for the fire ball
        obstacleImage.x = -26;//relative x coordinate
        obstacleImage.y = -26;//relative y coordinate
        obstacleImage.scaleX = 0.35;
        obstacleImage.scaleY = 0.35;
    
}

//TODO 7
function createEnemy(x, y){
        var enemy = game.createGameItem('enemy',25);//this creates the value of the enemy
        var redSquare = draw.rect(50,50,'red');//this draws the image over the hitzone
        redSquare.x = -25;//square location x
        redSquare.y = -25;///square location y
        enemy.addChild(redSquare);//adds the image

        enemy.x = x;//enemy x coordinate
        enemy.y = y;//y coordinate relative to ground

        game.addGameItem(enemy);
        enemy.velocityX = -3;
        enemy.rotationalVelocity = 80;

        enemy.onPlayerCollision = function() {
            console.log('The enemy has hit Halle');
            game.changeIntegrity(-100);
        };

        enemy.onProjectileCollision = function(){
            console.log("The progectile has hit the enemy");
            game.changeIntegrity(5);
            game.increaseScore(10);
            enemy.fadeOut();
        };
}
function createEnemy2(x, y){
    var enemy2 = game.createGameItem('enemy2',25);//this creates the value of the enemy
    var yellowSquare = draw.rect(50,50,'yellow');//this draws the image over the hitzone
    yellowSquare.x = -25;//square location x
    yellowSquare.y = -25;///square location y
    enemy2.addChild(yellowSquare);//adds the image

    enemy2.x = x;//enemy x coordinate
    enemy2.y = y;//y coordinate relative to ground

    game.addGameItem(enemy2);
    enemy2.velocityX = -3;
    enemy2.rotationalVelocity = 80;

    enemy2.onPlayerCollision = function() {
        console.log('The second enemy has hit Halle');
        game.changeIntegrity(-100);
    };

    enemy2.onProjectileCollision = function(){
        console.log("The progectile has hit the enemy");
        game.changeIntegrity(5);
        game.increaseScore(10);
        enemy2.fadeOut();
    };
}

function createReward(x, y){
        var reward = game.createGameItem('reward',25);
        var blueSquare = draw.rect(50,50,'blue');

        blueSquare.x = -25;//square location x
        blueSquare.y = -25;///square location y
        reward.addChild(blueSquare);//adds the image

        reward.x = x;//reward x coordinate
        reward.y = y;//y coordinate relative to ground

        game.addGameItem(reward);
        reward.velocityX = -2 ;
        reward.rotationalVelocity = 5;

        reward.onProjectileCollision = function(){
            console.log("The player has hit the reward");
            game.changeIntegrity(5);
            game.increaseScore(50);
            reward.fadeOut();
        };

};
function createReward2(x, y){
    var reward2 = game.createGameItem('reward2',25);
    var greenSquare = draw.rect(50,50,'green');

    greenSquare.x = -25;//square location x
    greenSquare.y = -25;///square location y
    reward2.addChild(greenSquare);//adds the image

    reward2.x = x;//reward x coordinate
    reward2.y = y;//y coordinate relative to ground

    game.addGameItem(reward2);
    reward2.velocityX = -2 ;
    reward2.rotationalVelocity = 5;

    reward2.onProjectileCollision = function(){
        console.log("The player has hit the second reward");
        game.changeIntegrity(5);
        game.increaseScore(100);
        reward2.fadeOut();
    };

};



for(var i = 0; i < levelData.gameItems.length; i++){
    var gameItem = levelData.gameItems[i];

    if(gameItem.type === "sawblade"){
        createSawBlade(gameItem.x, gameItem.y);
    }

    if(gameItem.type === "fireball"){
        createFireBall(gameItem.x, gameItem.y);
    }

    if(gameItem.type === "enemies"){
        createEnemy(gameItem.x, gameItem.y);
    }
    if(gameItem.type === "enemies2"){
        createEnemy2(gameItem.x, gameItem.y);
    }
    if(gameItem.type === "reward"){
        createReward(gameItem.x, gameItem.y);
    }
    if(gameItem.type === "reward2"){
        createReward2(gameItem.x, gameItem.y);
    }
}


        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
    }
