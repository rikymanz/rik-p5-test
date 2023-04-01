// array di cerchi. Ogni oggetto rappresenta il cerchio di partenza iniziale. Ogni oggetto sarà una linea che parte dal centro
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

// contatore per contare il numero di cerchi da disegnare
let count = 0
// variabile che rappresenta il colore. Aumenterà ad ogni iterazione per cambiare il colore della linea di cerchi
let c 

function setup() {
  createCanvas(800, 800);
  background(220);
  // colore iniziale casuale
  c = random(0, 360);
  // colore in modalità HSB con limite 360
  colorMode(HSB, 360);
} // fine funzione di setup
 
function draw() {
    // limite di cerchi di ogni fila
    if( count < 50){
      // funzione personalizzata, disegna gli N cerhi di ogni file
      myFirst()
    }
}

// Funzione che disegnaogni volta N cerchi, in base all'array iniziale
function myFirst(){
    // colore attuale degli n cerchi
    fill( c , 360 , 360 )
    // Cambio del colore
    c = (c + 10) % 360; // %360 è usato per permettere la ripetizione del colore, altrimenti a 360 si fermerebbe

    // Disegno degli N cerchi 
    for( let i = 0 ; i < arr.length ; i ++ ){
      let element = arr[i]
      // calcolo dell'angolo di ogni cerchio. Impostato in base al numero di elementi. 
      let grade = i === 0 ? 0 : 360 / arr.length * i // equivale a if( i === 0 ) grade = 0 else grade = 360 / arr.length * i
      let angle = radians( grade ) // trasformazione gradi in radianti
      // calcolo posizione del cerchio
      // alla posizione precedente viene aggiunto spazio sempre nella stessa direzione
      element.x = element.x + cos( angle ) * 10 
      element.y = element.y + sin( angle ) * 10
      // disegno del cerchio
      circle( element.x , element.y , 50  )
    } // fine for
    
    // aumnento contatore
    count ++
} // fine funzione myFirst
