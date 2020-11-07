function setup() {
    createCanvas(1000, 600);
}
function draw() {
    noStroke();
    fill(mouseX, mouseX-mouseY, mouseY);
    if(mouseIsPressed){
      ellipse(mouseX, mouseY, 50, 50);
    }
}