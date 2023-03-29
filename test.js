
let circle_1 = { x:400 , y:400 }
let circle_2 = { x:405 , y:400 }
let circle_3 = { x:400 , y:405 }
let circle_4 = { x:405 , y:405 }

let array = [
    
    { x:400 , y:400 },
    { x:405 , y:400 },
    { x:400 , y:405 },
    { x:405 , y:405 },
]


function setup() {
    createCanvas(800, 800)
    background(204); // clear the screen
}

function draw() {

    for( let i = 0 ; i < array.length ; i++){
        let c = array[i]
        circle( c.x , c.y , 50 )

        c.x = c.x + 0.5;
        c.y = c.y + 0.25;
    }

}
    //END