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
// oggetti che rappresentano le nazioni cliccate
let objSelected1 = null 
let objSelected2 = null

let clickTime 

// contatore delle selezioni completate
let completed = 0
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
            completed : false,
        }
        // aggiunta dell'oggetto temporaneo ad array di oggetti finale
        arrayObj.push(tempObj)
    } // fine for
} // fine metodo preload

/**
 * setup()
 */

function setup() {
    
    createCanvas(700,700)
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

/**
 * Draw loop
 */

function draw() {
    background(230)
    // tempo del n-esimo ciclo
    let nowTime = Math.floor( Date.now() / 1000 )
    // se passano 5 secondi da un click viene resettato tutto - Viene gestito il caso in cui i due selezionati sono uguali
    if( ( nowTime - clickTime ) > 5 ){
        // se gli oggetti selezionati hanno la stessa nazione vengono messi come completed
        if( objSelected1 && objSelected2 && objSelected1.name === objSelected2.name ){
            objSelected1.completed = true
            objSelected2.completed = true
            completed ++
        } // fine if
        // deselezione di tutto
        deselectAll()
        // reset degli oggetti
        objSelected1 = null 
        objSelected2 = null

    } // fine if 

    // for che scorre tutte le schede e le stampa
    for(let i = 0; i < arrayObj.length;i++){
        // se la carta è selezionata viene visualizzata l'immagine della bandiera
        if ( arrayObj[i].completed === true){
            image(arrayObj[i].cover,arrayObj[i].x,arrayObj[i].y)
        }else if ( arrayObj[i].selected === true){
            image(arrayObj[i].image,arrayObj[i].x,arrayObj[i].y)
        }else{ // se la carta non è selezionata viene visualizzata la cover
            image(arrayObj[i].cover1,arrayObj[i].x,arrayObj[i].y)
        } // fine if else
        
    } // fine for scorrimento array da stampare  

    text(`Indovinate : ${completed} / 21`,300,650)
} // fune funzione Draw

/**
 * mouseClicked()
 * mouseX, mouseY contains the click coordinates
 */
function mouseClicked(){
    // posizione del click arrotondato, le coordinate corrispondono ad una carta
    var clickX = Math.floor( mouseX / 100 ) * 100
    var clickY = Math.floor( mouseY / 100 ) * 100
    // estrazione elemento cliccato
    const tempObj = arrayObj.find( (row) => ( row.x === clickX && row.y === clickY) )
    // se la carta è selezionata o completata, il click non viene considerato
    if( tempObj.selected || tempObj.completed ) return false

    clickTime = Math.floor( Date.now() / 1000 )

    // se prima erano presenti già delle selezioni fa in modo di deselezionare tutte le carte e controlla se sono uguali
    if( objSelected1 && objSelected2 ){
        // deselezione di tutte le carte
        deselectAll()
        // se gli oggetti selezionati hanno la stessa nazione vengono messi come completed
        if( objSelected1.name === objSelected2.name ){
            objSelected1.completed = true
            objSelected2.completed = true
            completed ++
        } // fine if
        // il nuovo cliccato verrà messo al posto del prim0
        objSelected1 = tempObj
        objSelected2 = null
    // se non è ancora stata fatta una selezione
    }else if( !objSelected1 ) objSelected1 = tempObj
    // se solo una selezione è stata fatta
    else{
        objSelected2 = tempObj  
    } // fine if else
   
    // l'oggetto selezionato viene messo come true
    tempObj.selected = true

} // fine metodo MouseClicked

// metodo che deseleziona tutte le carte
function deselectAll(){
    // per ogni oggetto dell'array
    for (let index = 0; index < arrayObj.length; index++) {
        const element = arrayObj[index];
        element.selected = false
    } // fine del for
} // fine metodo deselecAll