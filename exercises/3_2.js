let n = 9
let objects = []


function setup() {
  createCanvas(800,800)
  colorMode(HSB,100)
  
  
  
  for( let i = 0 ;i < n ; i ++ ){
    objects.push({
      x:random( 100 , 700 ),
      y:random( 100 , 700 ),
      r:random( 50 , 1000 ),
      rad:0,
      speed: random(1,10)
    })
  }
}

function draw() {
  background(1);
  stroke(1);
  
  
 for( let i = 0 ;i < objects.length ; i ++ ){ 
     write( objects[i] )
  }
  
}

function write( obj ){
    
    for( let i = 0; i < 25 ; i ++ ){
      let x = obj.x + obj.r * cos( obj.rad + i * 0.05 )
      let y = obj.y + obj.r * sin( obj.rad + i * 0.05)

      fill( 80 , 80 , 0 + i * 4 )
      circle( x ,y , 50)

    }

     obj.rad += 0.01 * obj.speed
}
