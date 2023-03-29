let arr = [
  {x:400,y:400},
  {x:400,y:400},
  {x:400,y:400},
  {x:400,y:400},
  {x:400,y:400},
  {x:400,y:400},
  {x:400,y:400},
  {x:400,y:400},
  {x:400,y:400},
  {x:400,y:400},
  
]

let count = 0
let c

function setup() {
  createCanvas(800, 800);
  background(220);
  c = random(0, 360);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  
    if( count < 50){
      myFirst()
    }
   
  
}

function myFirst(){
    fill(c, 90, 90);
    c = (c + 10) % 360;
  
    for( let i = 0 ; i < arr.length ; i ++ ){
      let element = arr[i]
      let grade = i === 0 ? 0 : 360 / arr.length * i
      let angle = radians( grade )

      element.x = element.x + cos( angle ) * 10
      element.y = element.y + sin( angle ) * 10
      circle( element.x , element.y , 50  )
    }
  
    count ++
}
