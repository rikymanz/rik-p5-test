/**
 * Some useful function:
 * Math.floor(value)
 * loadImage(filename)
 * createCanvas(width, height);
 * background(color);
 * shuffle(array)  // Randomizes the order of the elements of an array. Does not modify the input arrays.
 * arr1.concat(arr2) // Concatenates two arrays, maps to Array.concat(). Does not modify the input arrays.
 */
var nations = ["australia", "austria", "belgium", "brazil", "china", "czech", "finland", "germany", "ireland", "italy", "japan", "korea", "pakistan", "poland", "portugal", "russia", "spain", "switzerland", "ukraine", "united-states", "united-kingdom"]
var arrayObj = []
// dimensioni della matrice da rappresentare su schermo
var matrixWidth = 7
var matrixHeight = 6


/**
 * Preload resources
 */

function preload() {
    // nations diventa un doppio array con elementi doppi
    nations = nations.concat(nations)
    // funzione per mesolare l'array
    nations = shuffle(nations)
    // costruzione dell'array di oggetti di riferimento. Per ogni nazione viene costruito un oggetto con informazioni
    for(let i = 0;i < nations.length;i++ ){
        // oggetto temporaneo
        const tempObj = {
            name : nations[i],
            image : loadImage(`images/${nations[i]}.png`),
            cover : loadImage(`images/cover.png`),
            cover1 : loadImage(`images/cover1.png`),
            selected : false,
        }
        // aggiunta dell'oggetto temporaneo ad array di oggetti finale
        arrayObj.push(tempObj)
    } // fine for
} // fine metodo preload

/**
 * setup()
 */

function setup() {
    
    createCanvas(700,600)
    // contatore per accedere all'i-esimo elemento dell'array
    var tempCont = 0;
    // vengono date le coordinate agli oggetti in base alla posizione
    // passaggio delle schede orizzonatali
    for(let i = 0; i < matrixWidth; i++){
        // passaggio delle schede verticali
        for(let j = 0; j < matrixHeight; j++){
            // assegnazione coordinate alla n-esima carta 
            arrayObj[tempCont].x = i * 100
            arrayObj[tempCont].y = j * 100
            // incremento tempCont
            tempCont ++
        } // fine for colonne
    } // fine for righe
} // fine metodo SETUP()

var countsel =0
/**
 * Draw loop
 */

function draw() {
    background(230)
    // for che scorre tutte le schede e le stampa
    for(let i = 0; i < arrayObj.length;i++){
        // se la carta è selezionata viene visualizzata l'immagine della bandiera
        if (arrayObj[i].selected === true){
            image(arrayObj[i].image,arrayObj[i].x,arrayObj[i].y)
        }else{ // se la carta non è selezionata viene visualizzata la cover
            image(arrayObj[i].cover1,arrayObj[i].x,arrayObj[i].y)
        } // fine if else
        
    } // fine for scorrimento array da stampare  
} // fune funzione Draw

/**
 * mouseClicked()
 * mouseX, mouseY contains the click coordinates
 */
function mouseClicked(){
    // posizione del click arrotondato, le coordinate corrispondono ad una carta
    var clickX = Math.floor(mouseX / 100)*100
    var clickY = Math.floor(mouseY / 100)*100
    // estrazione dell'oggetto relativo alla nazione cliccata
    var obj = arrayObj.find( (row) => ( row.x === clickX && row.y === clickY) )
    // incremento il contatore che indica quante carte sono cliccate, 1 o 2 (o caso iniziale 0)
    countsel ++
    // in caso sia la seconda selezione, vengono resettate tutte le sezioni, il metodo draw automaticamente aggiornerà le carte
    if (countsel == 2){
        // per ogni carta
        for(let i = 0; i< arrayObj.length;i++){
            // selected viene azzerato
            arrayObj[i].selected = false;
        } // fine for

        // countsel viene azzerato
        countsel = 0;
        
    } // fine ig

    // viene selezionato il nuovo oggetto cliccato
    obj.selected = true
} // fine metodo MouseClicked