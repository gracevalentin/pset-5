window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;

 }

/*
 * Exercise 1.
 */

const sayHello = function draw() {
  var canvas = document.getElementById("student-canvas-1");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
    let input = prompt("Message:");
while (input.length > 50) {
alert("Your message is too long. Keep it under 50 characters.")
let input = prompt("Message:")
  }
  if (input != null){
    ctx.font = '48px sans-serif';
    ctx.strokeText(input, 30, 70);
  }
};

/*
 * Exercise 2.
 */

const drawRectangle = function draw() {
  var canvas = document.getElementById("student-canvas-2");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let width = prompt("Width:");
  let height = prompt("Height:");
  let x = prompt("X:");
  let y = prompt("Y:");

  if (width != null && height != null && x != null, y != null){
    ctx.strokeRect(x, y, width, height);
  }
  if (width > 1024 || width < 1) {
      alert("Your width must be between 1 and 1024.")
    }
    else if (height > 512 || height < 1) {
      alert("Your height must be between 1 and 512.")
    }
    else if (x < 1 || x > 1024) {
      alert("Your x-coordinate must be between 1 and 1024.")
    }
    else if (y < 1 || y > 512) {
      alert("Your y-coordinate must be between 1 and 512.")
    }
    else if (isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y)) {
      alert("One of your values is not a number.")
    }
    else if (Number(width) + Number(x) > 1024 || Number(height) + Number(y) > 512) {
      alert("Your rectangle won't fit on the canvas.")
    }
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function draw() {
  var canvas = document.getElementById("student-canvas-3");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let color = prompt("Color:");
  let color2 = color.toUpperCase();

  if (color2 == 'BLACK'){
  ctx.fillStyle = 'black';
 }
  if (color2 == 'BLUE'){
    ctx.fillStyle = 'blue';
  }
  if (color2 == 'GREEN'){
    ctx.fillStyle = 'green';
  }
  if (color2 == 'ORANGE'){
    ctx.fillStyle = 'orange';
  }
  if (color2 == 'PURPLE'){
    ctx.fillStyle = 'purple';
  }
  if (color2 == 'RED'){
    ctx.fillStyle = 'red';
  }
  if (color2 == 'YELLOW'){
    ctx.fillStyle = 'yellow';
  }
  if (color2 != null){
  while (color2 != "GREEN" && color2 != "BLACK" && color2 != "BLUE" && color2 != "ORANGE" && color2 != "PURPLE" && color2 != "RED" && color2 != "YELLOW"){
    alert(color + " is not a supported color.")
    let input = prompt("Color:")
  }
  if (color2 == "GREEN" || color2 == "BLACK" || color2 == "BLUE" || color2 == "ORANGE" || color2 == "PURPLE" || color2 == "RED" || color2 == "YELLOW"){
    ctx.fillRect(10, 10, 100, 50);
  }
}
};

/*
 * Exercise 4.
 */

const drawTriangle = function draw() {
  var canvas = document.getElementById("student-canvas-4");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

   do {
     var side1 = prompt("Side 1: ")
     var side2 = prompt("Side 2: ")
     var side3 = prompt("Side 3: ")

     var height = Math.min (side1, side2, side3)
     var hypotenuse = Math.max(side1, side2, side3)
     var base = Math.sqrt(hypotenuse * hypotenuse - height * height)

     if (base == 0 && height == 0 && hypotenuse == 0) {
       break;
     }
     side1 = Number(side1)
     side2 = Number(side2)
     side3 = Number(side3)
     if (base * base + height * height != hypotenuse * hypotenuse || base == 0 || height == 0 || hypotenuse == 0  || side1 + side2 + side3 - hypotenuse - height != base) {
       alert("That's not a valid right triangle.")
     }
     if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
       alert("One of your sides is not a number.")
     }
     if (base > 1024 || height > 512 || hypotenuse > 1310720) {
       alert("Your triangle won't fit on the canvas.")
     }
   }  while ((Math.floor(base) * Math.floor(base) + height * height != hypotenuse*hypotenuse) || isNaN(side1) || isNaN(side2) || isNaN(side3) || base > 1024 || height > 512 || hypotenuse > 1310720 || base == 0 || height == 0 || hypotenuse == 0)

   if ((base * base + height * height == hypotenuse * hypotenuse) && (base < 1024 && height < 512 && hypotenuse < 1145) && (base != 0 && height != 0 && hypotenuse != 0) && (base != null && height != null && hypotenuse != null)) {
     height = height + 25
     base = base + 25
     ctx.beginPath();
     ctx.moveTo(25, 25);
     ctx.lineTo(25, height);
     ctx.lineTo(base, height)
     ctx.lineTo(25, 25)
     ctx.stroke();
   }
  };

 /*
 * Exercise 5.
 */

 const drawFace = function() {
   var canvas = document.getElementById("student-canvas-5");
   var ctx = canvas.getContext("2d");
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   var start = 0;
   var radius = null;
   while (radius > 256 || radius < 32 || start == 0 || radius !== Number(radius)) {
     var radius = prompt("Radius:");
     ++start
     if (radius != null) {
       radius = Number(radius);
     }
     if (radius != radius.toString()) {
       alert("Your radius is not a number.");
     } else if (radius > 256) {
       alert("Your smiley face won't fit on the canvas.");
     } else if (radius < 32) {
         alert("Your radius must be at least 32.");
     }
   }
   ctx.beginPath();
   ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI)
   ctx.moveTo(canvas.width / 2 - 0.4 * radius + 0.15 * radius, canvas.height / 2 - 0.4 * radius)
   ctx.arc(canvas.width / 2 - 0.4 * radius, canvas.height / 2 - 0.4 * radius, 0.15 * radius, 0, 2 * Math.PI)
   ctx.moveTo(canvas.width / 2 + 0.4 * radius + 0.15 * radius, canvas.height / 2 - 0.4 * radius)
   ctx.arc(canvas.width / 2 + 0.4 * radius, canvas.height / 2 - 0.4 * radius, 0.15 * radius, 0, 2 * Math.PI)
   ctx.moveTo( canvas.width / 2 + 0.7 * radius, canvas.height / 2)
   ctx.arc(canvas.width / 2, canvas.height / 2, 0.7 * radius, 0, Math.PI)
   ctx.stroke()
 };

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {

};
