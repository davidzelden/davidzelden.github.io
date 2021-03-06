var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        var godzilla;
        var car;
        var square;
        var tree;
        var tree2;
        var buildings = []; 
     
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'#000000');//we addded that color thang
            background.addChild(backgroundFill);
            
            // TODO: 3 - Add a moon and starfield
            godzilla = draw.bitmap('img/godzilla.png');
            godzilla.x = 600;
            godzilla.y = 150;
            background.addChild(godzilla);
            godzilla.scaleX = 0.20;
            godzilla.scaleY = 0.20;
            
            for (var i = 0;i <= 100;i++ ){///thi is the for loop for the stars
                var circle = draw.circle(4,'white','yellow',2);///this is the design for the stars
                circle.x = canvasWidth*Math.random();///this is the random x coordinates for the stars
                circle.y = groundY*Math.random();///this is the random y coordinates for the stars
                background.addChild(circle);///this makes it run in the background
            }
            
            var moon = draw.bitmap('img/moon.png');///created variable called moon. It draws the image
            moon.x = canvasWidth - 300;///moon go left right
            moon.y = groundY - 450;///moon go up down
            moon.scaleX = 0.55;///moon go bigger sideways
            moon.scaleY = 0.55;///moon go taller
            background.addChild(moon);///baby moon picture


            // TODO 5: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            godzilla = draw.bitmap('img/godzilla.png');//this was put here to go behind the buildings
            godzilla.x = 600;
            godzilla.y = 150;
            background.addChild(godzilla);
            godzilla.scaleX = 0.20;
            godzilla.scaleY = 0.20;


            for(var i=0; i<50; ++i) {

            var buildingHeight = 300*Math.random();
            var building = draw.rect(75,buildingHeight,'#545454','#545454',1);
            
            building.x =  50*i;
            building.y = groundY-buildingHeight;
            background.addChild(building);
            buildings.push(building);
        }
        



            
            // TODO 4: Part 1 - Add a tree
            

            square = draw.bitmap('img/green.jpg');
            square.x = -100;
            square.y = 430;
            background.addChild(square);
            square.scaleX = 20;
            square.scaleY = 10;

            car = draw.bitmap('img/car.png');
            car.x = 900;
            car.y = 480;
            background.addChild(car);
            car.scaleX = 0.30;
            car.scaleY = 0.30;

            tree = draw.bitmap('img/tree.png');
            tree.x = canvasWidth - 500;
            tree.y = groundY - 200;
            background.addChild(tree);
            tree.scaleX = 0.40;
            tree.scaleY = 0.40;
        
            tree2 = draw.bitmap('img/tree.png');
            tree2.x = canvasWidth - 180;
            tree2.y = groundY - 50;
            background.addChild(tree2);
            tree2.scaleX = 0.25;
            tree2.scaleY = 0.25;
            

            

        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {

            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            tree.x = tree.x - 1;

            if(tree.x < -200) {
                tree.x = canvasWidth;
            }

            tree2.x = tree2.x - 1;

            if(tree2.x < -200) {
                tree2.x = canvasWidth;
            }
            car.x = car.x - 1;

            if(car.x < -200) {
                car.x = canvasWidth;
            }

            
            
            // TODO 5: Part 2 - Parallax
           
                for (var i = 0; i < buildings.length; i++){
                    buildings[i].x = buildings[i].x - 0.5;
                    if(buildings[i].x < 0) {
                        buildings[i].x = canvasWidth;
                    }
                }
            

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
