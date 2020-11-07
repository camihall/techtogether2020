function setup() {
    createCanvas(1000, 1000);
}
function draw() {
    noStroke();
    fill(mouseX, mouseX-100, mouseY);
    if(mouseIsPressed){
      ellipse(mouseX, mouseY, 50, 50);
    }
}