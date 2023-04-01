// coefficente di velocità - Cambiando questo si cambia la velocità di tutto
let speed = 0.04
// rappresenta il rapporto di gradi di venere rispetto all terra
let speed_rap = 13/8
// coordinate del sole, punto centrale di rotazione
let start = { x: 400 , y: 400}
// oggetto che contiene tutte le info della terra. Posizione, angolo, raggio dal sole, velocità e dimensione
let earth = { x:0 , y :0 , coeff : 0, r: 200 , speed:1 * speed , dim:25}
// oggetti che contiene le info di venere
let venus = { x:0 , y :0, coeff : 0 , r: 100 , speed:speed_rap * speed , dim:20}

        
function setup() {
    createCanvas(800, 800)
}

function draw() {
    background(240)
  
    // SOLE
    fill(210,210,0)
    circle(start.x,start.y,50)


    //VENERE
    // posizione calcolata in base all'angolo, al raggio e alla posizione iniziale
    venus.x = start.x + venus.r * cos(venus.coeff)
    venus.y = start.y + venus.r * sin(venus.coeff)
    // orbita venere - disegna l'orbita
    stroke(255,0,0,45) // bordo in RGB 
    noFill(255) // non ha riempimento, è vuoto
    circle(start.x,start.y, venus.r * 2)
    // venere . disegna il pianeta
    stroke(1) // bordo nero
    fill(120,210,0) // riempimento pianeta
    circle( venus.x  , venus.y , venus.dim)  // disegno del pianeta
    venus.coeff = venus.coeff + venus.speed // auemento della distanza del pianeta per il passaggio successivo
    
    
    //TERRA - Vedi commenti sopra
    // posizione calcolata in base all'angolo, al raggio e alla posizione iniziale
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
    
} // fine 
