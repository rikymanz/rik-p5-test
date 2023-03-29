let arr = [
    
    { x:400 , y:400 , color:0},
    { x:405 , y:400 , color:80 },
    { x:400 , y:405 , color:160},
    { x:405 , y:405 , color:240},
]

let x = 0


function setup() {
    createCanvas(800, 800)
    background(204); // clear the screen
}

function draw() {

    for( let i = 0 ; i < arr.length ; i++){
        let c = arr[i]
        fill( c.color )
        circle( c.x , c.y , 50 )

        c.x = i > 1 ? c.x + x : c.x - x
        c.y = i % 2 === 0 ? c.y + x * x : c.y - x * x 
      
        
    }
  
    x = x + 0.1

}
