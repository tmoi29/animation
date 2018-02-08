//Tiffany Moi
//SoftDev2 pd7
//K02
//2018-02-08

var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var anim_btn = document.getElementById("anim");
var stop_btn = document.getElementById("stop");


ctx.fillStyle = "#42ddc3";

var clear = function(){
    ctx.clearRect(0,0,c.width,c.height);
};


var r = 20;
var inc = 0;
var grow = true;

var drawCircle = function(){
    
    if ((inc%200) == 0){
        grow = !(grow);
    }
    
    //console.log(r);
    //console.log(grow);
    clear();
    ctx.beginPath();
    ctx.arc(300, 300, r, 0, 2 * Math.PI);
    ctx.fill();
    
    
    if (grow){
        r = 20 + inc%200;
    }
    else{
        r = 220 - inc%200;
    }
    inc = window.requestAnimationFrame(drawCircle);
    
};

var stop = function(){
    window.cancelAnimationFrame(inc);
};


anim_btn.addEventListener("click", drawCircle);
stop_btn.addEventListener("click", stop);

