var speed_star = 0.1
var _alpha = 30
var aplha_habital = 25


//natural Satellite of earth - the outcome of the mars-sized planet hiting earth cousing dinosours to die, instantly
var moon_x=400
var moon_y=400
var moon_theta = 29.78
var moon_orb_earth = 10
var moon_r = 400
var speed_moon = 0.07978 * speed_star


//2nd largest terrestrial planet in solar system - place 2
var venus_x=400;
var venus_y=400;
var venus_theta = 35.02;
var venus_r = 100;
var speed_venus = -0.03502 * speed_star

//the only know planet to house life in the solar system - place 3
var earth_x=400;
var earth_y=400;
var earth_theta = 29.78;
var earth_r = 200;
var speed_earth = -0.02978 * speed_star
    
    
    
function setup() {
    createCanvas(800, 800)
}

function draw() {
    background(50)
    //sun
    fill(210,210,0)
    circle(400,400,50)


    //venus
    venus_x =+ venus_r * cos(venus_theta)
    venus_y =+ venus_r * sin(venus_theta)
    
    stroke(255,165,3,_alpha)
    noFill(255)
    circle(400,400,200)

    stroke(1)
    fill(255,165,3)
    circle( venus_x + 400 , venus_y + 400 , 20) 
    venus_theta = venus_theta + speed_venus
    
    //earth
    fill(1,200,150)
    earth_x =+ earth_r * cos(earth_theta)
    earth_y =+ earth_r * sin(earth_theta)
    
    stroke(1,200,150,_alpha)
    noFill(255)
    circle(400,400,400)
    noStroke()
    fill(1,200,150)
    circle(earth_x+400,earth_y+400,25)
    earth_theta = earth_theta + speed_earth
    
    //moon
    fill(200,200,200)
    moon_x =+ moon_r * sin(moon_theta)/15
    moon_y =+ moon_r * cos(moon_theta)/15
    circle( earth_x + 400 + moon_x, earth_y + 400 + moon_y , 7 )
    moon_theta = moon_theta + speed_moon
 
}
