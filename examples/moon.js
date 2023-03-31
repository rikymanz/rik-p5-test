function setup() {
  createCanvas(400, 400);
}
let rad = 0
let rad_2 = 0
let step = 0.005

let speed_1 = 8
let speed_2 = 11

function draw() {
  background(220);
  noFill()
  
  circle( 200 , 200 , 200 )
  fill(1)
  circle( 200 , 200 , 30 )
  
  let a_x = 200 + cos( rad ) * 100 
  let a_y = 200 + sin( rad ) * 100
  circle( a_x , a_y ,10 )
  
  let b_x = a_x + cos( rad_2) * 20 
  let b_y = a_y + sin( rad_2 ) * 20
  circle( b_x , b_y ,5 )
  
  rad += step * speed_1
  rad_2 += step * speed_2
}
