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
    const ctx = document.getElementById('student-canvas-1').getContext('2d');
    let input = prompt("Message:");
    if (input != null){
      ctx.font = '48px sans-serif';
      ctx.strokeText(input, 30, 70);
    }
  //still needs to clear canvas before drawing, continuously prompt for valid message, message text cannot exceed 50 characters, message text cannot exceed the bounds of the canvas
};

/*
 * Exercise 2.
 */

const drawRectangle = function draw() {
  const ctx = document.getElementById('student-canvas-2').getContext('2d');
  let width = prompt("Width:");
  let height = prompt("Height:");
  let x = prompt("X:");
  let y = prompt("Y:");
  if (width != null && height != null && x != null, y != null){
    ctx.strokeRect(x, y, width, height);
  }
  //still needs to clear canvas before drawing, continuously prompt for valid coordinates and dimensions, width of the rectangle must be between 1 and the width of the canvas, height of the rectangle must be between 1 and the height of the canvas, the x- and y- coordinates cannot be less than 1,  rectangle cannot exceed the bounds of the canvas
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function draw() {
  const ctx = document.getElementById('student-canvas-3').getContext('2d');
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

  ctx.fillRect(10, 10, 100, 50);
  //still needs to clear canvas before drawing, continuously prompt for valid color, draw nothing and break out of cycle if cancel is clicked
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 5.
 */

const drawFace = function() {
    // write your exercise 5 code here
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 6 code here
};
