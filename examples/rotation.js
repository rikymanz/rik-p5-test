var speedRatio = 2
let cont = 0
let x
let y
let r = 50
        
function setup() {
    createCanvas(400, 400)
}

function draw() {
    background(240)  

    fill(1)
    circle(200,200,10)
    
    x = 200 + r * cos( cont )
    y = 200 + r * sin( cont )

    stroke(1)
    fill(255)
    circle( x , y ,10 )
  
  
    cont += 0.01 * speedRatio
    
}
