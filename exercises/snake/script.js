let snake = [
    { x: 70 , y: 300},
    { x: 60 , y: 300},
    { x: 50 , y: 300},
    { x: 40 , y: 300},
    { x: 30 , y: 300},
]

let direction = 1

function setup() {
    createCanvas(600, 600);
    frameRate(1)
}
  


function keyPressed() {

    if (keyCode === RIGHT_ARROW && direction != 2 ) {
        direction = 0
    }else if (keyCode === DOWN_ARROW && direction != 3 ) {
        direction = 1
    }else if (keyCode === LEFT_ARROW && direction != 0 ) {
        direction = 2
    }else if (keyCode === UP_ARROW && direction != 1 ) {
        direction = 3
    }
}

const nextStep = () => {
    switch ( direction ) {
        case 0:
            snake[0].x = snake[0].x === width - 10 ? 0 : snake[0].x + 10
            break;        
        case 1:
            snake[0].y = snake[0].y === height - 10 ? 0 : snake[0].y + 10
            break;
        case 2:
            snake[0].x = snake[0].x === 0 ? width - 10 : snake[0].x - 10
            break;        
        case 3:
            snake[0].y = snake[0].y === 0 ? height - 10 : snake[0].y - 10
            break;
    
        default:
            break;
    }

    snake = snake.map( ( row, index ) => ({ 
        x: index === 0 ? row.x : snake[ index - 1].x,
        y: index === 0 ? row.y : snake[ index - 1].y
    }))
}

const endGame = () => {
    textSize( 70 )
    text( 'END' , 200 , 300 )
    exit
}



function draw() {
    background(220);

    for ( let index = 0; index < snake.length; index++ ) {
        const element = snake[index];
        square( element.x , element.y , 10 )
    }

    nextStep()

    console.log( snake )
}