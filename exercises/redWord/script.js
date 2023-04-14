let x = 1
let y = 200
let t = "ZONA ROSSA"
let textLength
let totalHeight = 400
let totalWidth = 400

function preload() {
    myFont = loadFont('./Ubuntu-Light.ttf')
}

function setup() {
  createCanvas(totalWidth, totalHeight)
  textSize(40);
  //textFont('Helvetica');
  textFont(myFont);
  textLength = textWidth(t)

}

function draw() {
  background(220,0,0)
  strokeWeight(1);
  stroke(153);
  text(t, x, y);
  
  x = x > totalWidth ? 0 : x

  if( (x + textLength) > totalWidth ){
        let tempX = totalWidth - x
        text(t, 0 - tempX , y);
  }
    
  x += 1


}