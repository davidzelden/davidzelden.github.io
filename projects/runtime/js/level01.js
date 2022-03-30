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
                { "type": "enemies2", "x": 4150, "y": groundY - 40},
                { "type": "enemies2", "x": 4550, "y": groundY - 60},
                { "type": "enemies2", "x": 5300, "y": groundY - 53},
                { "type": "enemies2", "x": 5800, "y": groundY - 65},
                { "type": "enemies2", "x": 6200, "y": groundY - 45},


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
        sawBladeHitZone.rotationalVelocity = 30;//this rotates the image of the sawblade
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
        obstacleImage.scaleX = 0.29;//size of the object horizontally
        obstacleImage.scaleY = 0.29;//size of the object vertically
        fireBallHitZone.rotationalVelocity = 5;//this rotates the fireball
    
}

//TODO 7
function createEnemy(x, y){
        var enemy = game.createGameItem('enemy1',25);//this creates the value of the enemy
        var ghost = draw.bitmap('img/ghost(1).png',);//this draws the image over the hitzone
        ghost.x = -43;// ghost location x
        ghost.y = -45;/// ghost location y
        enemy.addChild(ghost);//adds the image
        ghost.scaleX = 0.10;//size of the object horizontally
        ghost.scaleY = 0.10;//size of the object vertically

        enemy.x = x;//enemy x coordinate
        enemy.y = y;//y coordinate relative to ground

        game.addGameItem(enemy);//this just adds the enemy
        enemy.velocityX = -3;//this makes the enemy go to the left
        

        enemy.onPlayerCollision = function() {//this is the function that causes the player to take damage when it runs into the enemy
            console.log('The enemy has hit Halle');////console log
            game.changeIntegrity(-100);//lose health
        };

        enemy.onProjectileCollision = function(){//this is the function that causes the enemy to go away when shot
            console.log("The progectile has hit the enemy");//console log
            game.changeIntegrity(5);//gain health
            game.increaseScore(10);//gain score
            enemy.fadeOut();//fade away
        };
}
function createEnemy2(x, y){
    var enemy2 = game.createGameItem('enemy2',25);//this creates the value of the enemy
    var ghost2 = draw.bitmap('img/ghost2.png',);//this draws the image over the hitzone
    ghost2.x = -55;//square location x
    ghost2.y = -65;///square location y
    enemy2.addChild(ghost2);//adds the image
    ghost2.scaleX = 0.13;//size of the object horizontally
    ghost2.scaleY = 0.13;//size of the object vertically

    enemy2.x = x;//enemy x coordinate
    enemy2.y = y;//y coordinate relative to ground

    game.addGameItem(enemy2);//this just adds the enemy
    enemy2.velocityX = -3;//this makes the enemy go to the left
    

    enemy2.onPlayerCollision = function() {//this is the function that causes the player to take damage when it runs into the enemy
        console.log('The second enemy has hit Halle');//console log
        game.changeIntegrity(-150);//lose health
    };

    enemy2.onProjectileCollision = function(){//this is the function that causes the enemy to go away when shot
        console.log("The progectile has hit the enemy");//console log
        game.changeIntegrity(5);//gain health
        game.increaseScore(10);//gain score
        enemy2.fadeOut();//fade away
    };
}

function createReward(x, y){
        var reward = game.createGameItem('reward',25);///this creates the reward
        var crystal = draw.bitmap('img/crystal.png',);///this draws the image of the crystal

        crystal.x = -45;//crystal location x
        crystal.y = -55;///crystal location y
        reward.addChild(crystal);//adds the image
        crystal.scaleX = 0.10;//size of the object horizontally
        crystal.scaleY = 0.10;//size of the object vertically

        reward.x = x;//reward x coordinate
        reward.y = y;//y coordinate relative to ground

        game.addGameItem(reward);///this puts it on the screen
        reward.velocityX = -2 ;//this makes the crystal go left
       

        reward.onProjectileCollision = function(){///this is the function that makes the reward go away when shot
            console.log("The player has hit the reward");//console log
            game.changeIntegrity(5);//gain health
            game.increaseScore(50);//gain score
            reward.fadeOut();//fade away
        };

};
function createReward2(x, y){
    var reward2 = game.createGameItem('reward2',25);///this creates the reward
    var crystal2 = draw.bitmap('img/crystal2.png',);///this draws the image of the crystal

    crystal2.x = -32;//crystal location x
    crystal2.y = -48;///crystal location y
    reward2.addChild(crystal2);//adds the image
    crystal2.scaleX = 0.10;//size of the object horizontally
    crystal2.scaleY = 0.10;//size of the object vertically

    reward2.x = x;//reward x coordinate
    reward2.y = y;//y coordinate relative to ground

    game.addGameItem(reward2);///this puts it on the screen
    reward2.velocityX = -2 ;//this makes the crystal go left
    

    reward2.onProjectileCollision = function(){///this is the function that makes the reward go away when shot
        console.log("The player has hit the second reward");//console log
        game.changeIntegrity(5);//gain health
        game.increaseScore(100);//gain score
        reward2.fadeOut();//fade away
    };

};



for(var i = 0; i < levelData.gameItems.length; i++){///this is where the function to make the codes reusable whenever and are called up top
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
