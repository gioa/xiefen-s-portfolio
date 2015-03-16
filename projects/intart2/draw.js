// state variables, helper functions, event listeners, etc.
// go here...

var image;
var clientX=0;
var clientY=0;
var eyeX,eyeY;

// one-time initialization.
// by default, this method is only invoked once, upon page launch.
// - canvas: an HTML canvas element
// - ctx: a 2D drawing context for the canvas
function init(canvas, ctx) {
	width = canvas.width;
    height = canvas.height;
    // console.log(width,height);
  
  	//draw the monster without eyes
	img = new Image();
	img.src = "./Monster.svg";
	
	canvas.addEventListener("mousemove",handler);
	
	
	
}



// frame drawing routine.
// this method will be invoked once for every frame.
// - canvas: an HTML canvas element
// - ctx: a 2D drawing context for the canvas
function draw(canvas, ctx) {

	
	//Clear everything 
	ctx.clearRect ( 0 , 0 , canvas.width, canvas.height );
	
	//redraw image
	ctx.drawImage(img, width/4, height-300);
	
	var x,y,dX,dY,r;
	x = width/4+150;
	y= height-220;
	r = 26;
	
	dX = clientX-x;
	dY = clientY-y;
	
	var tempR = Math.sqrt(Math.pow(dX,2) + Math.pow(dY,2) );
	var newX = x + r*dX/tempR;
	var newY = y + r*dY/tempR;
	
	//make the eye looking at the middle  
	if((Math.abs(dX)<r) && (Math.abs(dY)< r))
	{
		newX = x;
		newY = y;
	}
	ctx.beginPath();
	
	ctx.arc(newX,newY,18,0,2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.closePath();
     
    ctx.beginPath();
    ctx.arc(newX,newY,10,0,2 * Math.PI, false);
    ctx.fillStyle = '#2E1616';
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.arc(newX+8,newY-8,4,0,2 * Math.PI, false);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
    
}

function handler(event){
   //console.log("mouse move");
 
   clientX =event.clientX;
   clientY = event.clientY;
   //console.log(clientX,clientY);
}


