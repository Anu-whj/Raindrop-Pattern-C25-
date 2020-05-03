//
var drops = []

//creates the letters for the raindrops.
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvexyz";
// other sample characters : !@#$%^&*()<>?/`~{}[]\|,.
//  "也 池 驰 馳 弛"
// 
function setup(){
    //creates the canvas.
    createCanvas(1500,600);

    //gives the framerate for the raindrops.
    frameRate(25);
    
    //creates an array for the raindrops.
    for(var i=0;i<100;i++){
       drops.push(new Drop());
    }
}

function draw(){
    //gives the background colour.
    background(0,100);

    //
    for(var i=0;i<drops.length;i++){
        drops[i].draw();
        drops[i].update();
    }
}
