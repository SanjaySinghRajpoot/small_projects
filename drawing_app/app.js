const canvas = document.getElementById("canvas");
const increasebtn = document.getElementById("increase");
const decreasebtn = document.getElementById("decrease");
const sizeEle = document.getElementById("size");
const colorsIn = document.getElementById("color");
const clearbtn = document.getElementById("clear");

const rect = document.getElementById("rect");
const circle = document.getElementById("circle");

// isShapeMode is a Flag which tells  us whether its Shape or Pen
// Defaultly it will be Pen

var isShapeMode=false;

//isRect false means it gonna draw circle else Rectangle
var isRect=false;

//eraser is Off
var isErase=false;


// default call is Pen
Pen();

function Erase()
{
 isErase=true;
}

function circleShape()
{
  isErase=false;
  isShapeMode=true;
  isRect=false;
  let color="black";
  colorsIn.addEventListener("change", (e) => {
    color = e.target.value;
  });
  
  var startPosX=endPosX=startPosY=endPosY=0;
   

  
  canvas.addEventListener("mousedown", function(e)
  {
     
      startPosX=e.pageX;
      startPosY=e.pageY;
     
  });

  canvas.addEventListener("mouseup", function(e)
  {
      endPosX=e.pageX;
      endPosY=e.pageY;
    
      if(startPosX!=endPosX && startPosY!=endPosY)
      {
          
      
     
      var ctx=canvas.getContext('2d');
      ctx.beginPath();
     
      ctx.fillStyle=color;
  
      if(isShapeMode)
      {
        if(isRect)
        {
          ctx.fillRect(startPosX-275,startPosY-45,endPosX-startPosX,endPosY-startPosY);

        }
        else
      {
        ctx.arc(startPosX-200,startPosY, (endPosX-startPosX)/2,0,2*Math.PI);
        ctx.stroke();
        ctx.fillStyle=color;
      }
      }
      

      }

      isShapeMode=false;
   
    });
  

  

}


function rectangle()
{
  isErase=false;
  isShapeMode=true;
  isRect=true;
  let color="black";
  colorsIn.addEventListener("change", (e) => {
    color = e.target.value;
  });
  
  var startPosX=endPosX=startPosY=endPosY=0;
   

  

  

  
  canvas.addEventListener("mousedown", function(e)
  {
     
      startPosX=e.pageX;
      startPosY=e.pageY;
     
  });

  canvas.addEventListener("mouseup", function(e)
  {
      endPosX=e.pageX;
      endPosY=e.pageY;
    
      if(startPosX!=endPosX && startPosY!=endPosY)
      {
          
      
     
      var ctx=canvas.getContext('2d');
      ctx.beginPath();
     
      ctx.fillStyle=color;
  if(isShapeMode)
  {
    if(isRect)
    {
      ctx.fillRect(startPosX-275,startPosY-45,endPosX-startPosX,endPosY-startPosY);
      isShapeMode=false;

    }
    else
  {
    ctx.arc(startPosX-200,startPosY, (endPosX-startPosX)/2,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle=color;
    isShapeMode=false;

  }

  }
     
      }
       
    });
  

   
     
  


}


function Pen()
{
  isErase=false;
    const ctx = canvas.getContext("2d");

    let size = 20;
    let isPressed = false;
    let color = "black";
    
    let x = undefined;
    let y = undefined;
    
    canvas.addEventListener("mousedown", (e) => {
      isPressed = true;
    
      x = e.offsetX;
      y = e.offsetY;
    });
    
    canvas.addEventListener("mouseup", () => {
      isPressed = false;
    });
    
    clearbtn.addEventListener("click", () => {
      ctx.clearRect(0, 0, canvas.height, canvas.width);
    });
    
   
      canvas.addEventListener("mousemove", (e) => {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        if(!isShapeMode)
        {
          
        if (isPressed == true) {
          drawLine(x, y, x2, y2);
          drawCircle(x2, y2);
          x = x2;
          y = y2;
        }
      }
      });
    
  
    
    increasebtn.addEventListener("click", () => {
      size = size + 5;
      updateSizeOnTheScreen();
    });
    
    decreasebtn.addEventListener("click", () => {
      size = size - 5;
    
      if (size < 0) {
        size = 0;
      }
    
      updateSizeOnTheScreen();
    });
    
    colorsIn.addEventListener("change", (e) => {
      color = e.target.value;
    });
    
    function drawCircle(x, y) {
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      if(isErase)
      {
        ctx.fillStyle = "#fff";
      }
      else
      {
        ctx.fillStyle = color;
      }
     
      ctx.fill();
    }
    
    function drawLine(x1, y1, x2, y2) {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = color;
      if(isErase)
      {
        ctx.strokeStyle = "#fff";
      }
      else
      {
        ctx.strokeStyle = color;
      }
      ctx.lineWidth = size * 2;
      ctx.stroke();
    }
    
    function updateSizeOnTheScreen() {
      sizeEle.innerText = size;
    }
  
 

}

// drawCircle(200,200);

// function draw(){

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawCircle(x, y);

//     requestAnimationFrame(draw);
// }

// draw();



