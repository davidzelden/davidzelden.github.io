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
                { "type": "sawblade", "x": 400, "y": groundY - 50},
                { "type": "sawblade", "x": 600, "y": groundY - 50},
                { "type": "sawblade", "x": 800, "y": groundY - 50},

                { "type": "enemies", "x": 500, "y": groundY - 50},
                { "type": "enemies", "x": 700, "y": groundY - 50},
                { "type": "enemies", "x": 900, "y": groundY - 50},

                { "type": "reward", "x": 2000, "y": groundY - 60},
                { "type": "reward", "x": 1000, "y": groundY - 60},
                { "type": "reward", "x": 700, "y": groundY - 60},
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
    function createSawBlade(x, y){
        var hitZoneSize = 25;//creates the hitbox
        var damageFromObstacle = 10;//sets the damage of the obstacle
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);//creates the function of the hitbox
        sawBladeHitZone.x = x;//this is the saw blade x coordinate
        sawBladeHitZone.y = y;// this is the saw blade's y coordinate
        game.addGameItem(sawBladeHitZone);///this draws the blade on the hitzone
                
        var obstacleImage = draw.bitmap('img/sawblade.png');// this puts the blade over the hitzone
        sawBladeHitZone.addChild(obstacleImage); //this is the image for the blade
        obstacleImage.x = -25;//relative x coordinate
        obstacleImage.y = -25;//relative y coordinate
}
      



//TODO 7
function createEnemy(x, y){
        var enemy = game.createGameItem('enemy',25);//this creates the value of the enemy
        var redSquare = draw.rect(50,50,'red');//this draws the image over the hitzone
        var damageFromObstacle = 100;
        redSquare.x = -25;//square location x
        redSquare.y = -25;///square location y
        enemy.addChild(redSquare);//adds the image

        enemy.x = x;//enemy x coordinate
        enemy.y = y;//y coordinate relative to ground

        game.addGameItem(enemy);
        enemy.velocityX = -3;
        enemy.rotationalVelocity = 100;

        enemy.onPlayerCollision = function() {
            console.log('The enemy has hit Halle');
        };

        enemy.onProjectileCollision = function(){
            console.log("The progectile has hit the enemy");
            game.changeIntegrity(5);
            game.increaseScore(10);
            enemy.fadeOut();
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
        reward.velocityX = -1 ;

};


for(var i = 0; i < levelData.gameItems.length; i++){
    var gameItem = levelData.gameItems[i];

    if(gameItem.type === "sawblade"){
        createSawBlade(gameItem.x, gameItem.y);
    }
    if(gameItem.type === "enemies"){
        createEnemy(gameItem.x, gameItem.y);
    }
    if(gameItem.type === "reward"){
        createReward(gameItem.x, gameItem.y);
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
