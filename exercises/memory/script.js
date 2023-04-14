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
 let finalArray, cover, cover1




 /**
  * Preload resources
  */
 function preload() {
    finalArray = nations.map( value => (
        { 
            nation: value,
            image: loadImage(`./images/${value}.png`),
            selected:false,
            done:false,
            n:1
        }
    ))
    finalArray = finalArray.concat( finalArray.map( row => ({...row,n:2}) ) )
    finalArray = shuffle( finalArray )

    console.log( finalArray )

    cover = loadImage(`./images/cover.png`)
    cover1 = loadImage(`./images/cover1.png`)
    
}
 
 /**
  * setup()
  */
 function setup() {
    createCanvas(700, 700);
    background(200); 
    for( let i = 0; i < finalArray.length ; i++ ){

        let positionX = ( i % 7 ) * 100 
        let positionY = Math.floor( i / 7) * 100

        image( cover , positionX , positionY )
    }
 }
 
 /**
  * Draw loop
  */
 function draw() {
 }
 
 /**
  * mouseClicked()
  * mouseX, mouseY contains the click coordinates
  */
 function mouseClicked( e ) {
    // i-esimo elemento cliccato
    if( e.x > 700 || e.y > 600 ) return false
    let n =  Math.floor(e.x / 100 ) + 7 *  Math.floor(e.y / 100 )
    finalArray[n].selected = true
    background(200); 

    for( let i = 0; i < finalArray.length ; i++ ){
        
        let element = finalArray[i]
        
        let positionX = ( i % 7 ) * 100 
        let positionY = Math.floor( i / 7) * 100
        if( element.done ) image( cover1 , positionX , positionY )
        else if( element.selected ) image( element.image , positionX , positionY )
        else image( cover , positionX , positionY )
    }

    let selectedNations = finalArray.filter( row => row.selected ).length 

    if( selectedNations > 1 ){
        if( finalArray.filter( row => row.selected )[0].nation ===  finalArray.filter( row => row.selected )[1].nation ){
            finalArray = finalArray.map( row => ({ ...row,done:( row.selected || row.done ) ? true : false, selected:false }) )
        }else{
            finalArray = finalArray.map( row => ({ ...row,selected:0 }) )
        }
    }

 }