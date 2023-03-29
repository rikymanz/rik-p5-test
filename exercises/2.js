var speed = 0.04

var speed_rap = 13/8

var start = { x: 400 , y: 400}

var earth = { x:0 , y :0 , coeff : 0, r: 200 , speed:1 * speed , dim:25}

var venus = { x:0 , y :0, coeff : 0 , r: 100 , speed:speed_rap * speed , dim:20}

        
function setup() {
    createCanvas(800, 800)
}

function draw() {
    background(240)
  
    // SOLE
    fill(210,210,0)
    circle(start.x,start.y,50)


    //VENERE
    venus.x = start.x + venus.r * cos(venus.coeff)
    venus.y = start.y + venus.r * sin(venus.coeff)
    // orbita venere
    stroke(255,0,0,45)
    noFill(255)
    circle(start.x,start.y, venus.r * 2)
    // venere
    stroke(1)
    fill(120,210,0)
    circle( venus.x  , venus.y , venus.dim) 
    venus.coeff = venus.coeff + venus.speed
    
    
    //TERRA
    
    earth.x = start.x + earth.r * cos(earth.coeff)
    earth.y = start.y + earth.r * sin(earth.coeff)
    // orbita terra
    stroke(0,0,255,45)
    noFill(255)
    circle( start.x , start.y , earth.r * 2)
    // terra
    stroke(1)
    fill(200,100,120)
    circle( earth.x , earth.y , earth.dim )
    earth.coeff = earth.coeff + earth.speed
    
}
