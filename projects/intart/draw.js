 // state variables, helper functions, etc.
// go here...

var width;
var height;

// how many frames to wait between redraws
var wait = 30;
// keep track of how many frames we've had
var frameCount = 0;
var stars = [];
var grow=false;
var i=1;
var cycles=[];

var colors=[{r:89,g:208,b:38},{r:241,g:235,b:52},{r:30,g:178,b:239},{r:240,g:114,b:61}];

// one-time initialization.
// by default, this method is only invoked once, upon page launch.
// - canvas: an HTML canvas element
// - ctx: a 2D drawing context for the canvas
function init(canvas, ctx) {
  width = canvas.width;
  height = canvas.height;
    // draw a black background
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
  canvas.addEventListener("click",handler);
}


function Cycle(){


}



function drawcycle(ctx,cx,cy,radius,lw,r,g,b,alpha){

    ctx.beginPath();
    ctx.lineWidth = lw;
    ctx.arc(cx,cy,radius,0, 2 * Math.PI, false);
    ctx.strokeStyle = 'rgba('+r+','+g+','+b+','+alpha+')';
    ctx.stroke();
    ctx.closePath();

}

function drawStar(ctx,cx,cy,spikes,outerRadius,innerRadius){
      var rot=Math.PI/2*3;
      var x=cx;
      var y=cy;
      var step=Math.PI/spikes;

      ctx.beginPath();
      ctx.moveTo(cx,cy-outerRadius)
      for(i=0;i<spikes;i++){
        x=cx+Math.cos(rot)*outerRadius;
        y=cy+Math.sin(rot)*outerRadius;
        ctx.lineTo(x,y)
        rot+=step

        x=cx+Math.cos(rot)*innerRadius;
        y=cy+Math.sin(rot)*innerRadius;
        ctx.lineTo(x,y)
        rot+=step
      }
      ctx.lineTo(cx,cy-outerRadius)
      ctx.stroke();
      ctx.closePath();
}


// frame drawing routine.
// this method will be invoked once for every frame.
// - canvas: an HTML canvas element
// - ctx: a 2D drawing context for the canvas
function draw(canvas, ctx) {
	
  

  ctx.beginPath();
  ctx.fillStyle = "rgba(0, 0, 0, 0.02)";
  ctx.fillRect(-width, -height, 2*width, 2*height);
	
  //ctx.beginPath();
  //ctx.arc(Math.floor(width * Math.random()), Math.floor(height * Math.random()),10,Math.PI*2, false);
 	//ctx.strokeStyle="white";



  if (frameCount % wait === 0) {
    
      drawcycle(ctx,width/4, height/4,20*i,15,89,208,38,1-i%10/10); //89,208,38
      drawcycle(ctx,width/4, height/2,20*i,15,241,235,52,1-i%10/10);//241, 235, 52
      drawcycle(ctx,width/2, height/4,20*i,15,30,178,239,1-i%10/10);//30, 178, 239
      drawcycle(ctx,width/2, height/2,20*i,15,240,114,61,1-i%10/10);//240, 114, 61  
      i+=1;

      if(i==30){
        i=1;
      }

   }
   frameCount += 1;

   // for event handler
   for (var j=0; j<cycles.length; j++) {
      
      //random = Math.floor((Math.random() * 4));
      //drawcycle(ctx,cycles[j].x, cycles[j].y,20*i,15,colors[random].r,colors[random].g,colors[random].r.b,1-i%10/10);
     drawcycle(ctx,cycles[j].x, cycles[j].y,20*i,15,colors[j%4].r,colors[j%4].g,colors[j%4].b,1-i%10/10);
   
  }


   
}

function handler(event){
    console.log("click");
    cycles.push({x:event.offsetX, y:event.offsetY}); //89,208,38
   
}





