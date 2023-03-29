
let count = 5
let arr 
let test = 1

function setup() {
  createCanvas(800, 800);
  background(220);
  
  arr = Array(count).fill().map( row => ( {x : random(200,600) , y : random(200,600) , r:random(1, 15)} ))
  
}

function draw() {
  
    
    
    fill(170, 0, 255);
    for( let i = 0 ; i < arr.length ; i ++ ){
      let element = arr[i]
      circle( element.x , element.y , 50  )
      
      element.x += element.r * cos( test ) * 2
      element.y += element.r * sin( test ) * 2
      
      test += 0.01
      
    }
  

}
