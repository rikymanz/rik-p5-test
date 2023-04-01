// numero di cerchi
let n = 9
// oggetto vuoto, andrà riempito successivamente
let objects = []

// funzione iniziale di setup, non viene ripetuta
function setup() {
  createCanvas(800,800)
  colorMode(HSB,100)
  // ciclo per inizializzare gli oggetti, viene fatto con valori casuali
  for( let i = 0 ;i < n ; i ++ ){
    // push aggiunge elementi in un array. In questo caso viene aggiunto col push l'oggetto {x,y,r,rad,speed} con tutti i valori calcolati casualemnte
    objects.push({
      x:random( 100 , 700 ), // x del centro gravitazionale di rotazione, valore casuale da 100 a 700
      y:random( 100 , 700 ), // y del centro gravitazionale
      r:random( 50 , 1000 ), // raggio a partire dal centro gravitazionale
      rad:0, // angolo iniziale, verrà incrementato ad ogni iterazione in base alla velocità
      speed: random(1,10) // velocità, step di aumento di rad ad ogni iterazione
    }) // fine push
  } // fine for
} // fine setup

function draw() {
    background(1);
    // tutto ha un bordo nero
    stroke(1);
    
  // disegno di ogni "serpentone"
  for( let i = 0 ;i < objects.length ; i ++ ){ // per ogni elemento dell'array
      // funzione personalizzata definita sotto
      myFunction( objects[i] )
  } // fine for
  
} // fine draw

// Funzione personalizzata per disegnare un "serpentone" in base all'oggetto, con tutte le info, passato come parametro
function myFunction( obj ){
    // ogni serpentone avrà 25 cerchi
    for( let i = 0; i < 25 ; i ++ ){
      // calcolo posizione in base all'angolo dell'oggetto
      let x = obj.x + obj.r * cos( obj.rad + i * 0.05 ) // ogni i-esimo cerchietto sarò distanziato da quello precedente di 0.05 radianti 
      let y = obj.y + obj.r * sin( obj.rad + i * 0.05)
      // colora di viola (80,80) e la luminosità cambia in base all'i-esimo elemento
      fill( 80 , 80 , 0 + i * 4 )
      circle( x ,y , 50)

    } // fine for

    // Cambio di angolo per far muovere il serpentone
    obj.rad += 0.01 * obj.speed
} // fine funzione
