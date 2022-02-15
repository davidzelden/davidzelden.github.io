var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables
var circle;
var circles = [];


//These are the variables used in the code throughout the progect.

        // TODO 2 : Create a function that draws a circle 
        function drawCircle(){
            
           
            circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
            physikz.addRandomVelocity(circle, canvas, 5, 5);
            view.addChild(circle);
            circles.push(circle);
        }
//This is the function used to make the circles
        // TODO 3 / 8 : Call the drawCircle() function 
/*
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();
 */       
        for (var dots = 0; dots <= 100; dots++){
            drawCircle();
        }
//This creates 5 circles from the function

        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the circle's position //
           /* 
            physikz.updatePosition(circles[0])
            physikz.updatePosition(circles[1])
            physikz.updatePosition(circles[2])
            physikz.updatePosition(circles[3])
            physikz.updatePosition(circles[4])
            physikz.updatePosition(circles[5])

    //This makes the circles move around        
           
            
            // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.
            physikz.updatePosition(circles[0])
            physikz.updatePosition(circles[1])
            physikz.updatePosition(circles[2])
            physikz.updatePosition(circles[3])
            physikz.updatePosition(circles[4])
            physikz.updatePosition(circles[5])
            */

    //This makes the circles move around more than the previous step.       

            // TODO 9 : Iterate over the array
            for (var i = 0; i < circles.length ; i++) {
                physikz.updatePosition(circles[i]);
                game.checkCirclePosition(circles[i]);
            }
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            }
            if (circle.x < 0){
                circle.x = canvas.height;
            }
            if (circle.y < 0){
                circle.y = canvas.height;
            }
            if (circle.y > canvas.height){
                circle.y = 0;
            }

            
            // TODO 7 : YOUR CODE STARTS HERE //////////////////////
        


            // YOUR TODO 7 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
