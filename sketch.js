function setup() {
    createCanvas(1400, 700);
}
function draw() {
    noStroke();
    fill(mouseX/12, mouseX-mouseY, mouseY);
    if(mouseIsPressed){
      ellipse(mouseX, mouseY, 20, 20);
    }
}