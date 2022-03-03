let slider;

function setup() {
  slider = createSlider(0, 255, 9);
  slider.position(10, 10);
  slider.style('width', '150px');
  createCanvas(400, 400);
}

function draw() {
  size = 350;
  count = slider.value();
  deg = (360.0 / count) * (Math.PI / 180.0);
  
  background(220);
  
  text("Number: " + count, 15, 40); 
  
  ellipse(200, 200, size, size);
  
  for(i=0;i<count;i++){
    line(Math.sin(i * deg * 1) * -size/2 + 200,
         Math.cos(i * deg * 1) * -size/2 + 200,
         Math.sin(i * 2 * deg * 1) * -size/2 + 200,
         Math.cos(i * 2 * deg * 1) * -size/2 + 200);
  }
}
