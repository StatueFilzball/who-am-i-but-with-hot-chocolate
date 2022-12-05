//creating the class character

class Character{
    constructor(name, isFemale, age, hasEyewear, hasHeadwear, billboardHot100, colorImage,bwImage){
        this.name = name,
        this.isFemale = isFemale,
        this.age = age
        this.hasEyewear = hasEyewear,
        this.hasHeadwear = hasHeadwear,
        this.billboardHot100 = billboardHot100,
        this.colorImage = colorImage,
        this.bwImage = bwImage
    }
}

const wuTangClan = new Character("Wu Tang Clan", false, 53, false, true, 0, "/images/images-color/wu-tang-clan-square.png", "/images/images-bw/i24_wu-tang-clan-square.png")
const carlosSantana = new Character("Carlos Santana", false, 75, false, true, 1, "/images/images-color/Carlos Santana Square.png", "/images/images-bw/i06_carlos-santana-square.png")
const coldplay = new Character("Coldplay", false, 44, false, true, 24, "/images/images-color/Coldplay Square.jpg", "/images/images-bw/i07_coldplay-square.jpg")
const kendrickLamar = new Character("Kendrick Lamar", false, 35, false, true, 69, "/images/images-color/Kendrick Lamar Square.png", "/images/images-bw/i12_kendrick-lamar-square.png")
const robbieWilliams = new Character("Robbie Williams", false, 48, true, false, 2, "/images/images-color/Robbie Williams Square.png", "/images/images-bw/i18_robbie-williams-square.png")
const backstreetBoys = new Character("Backstreet Boys", false, 46, true, false, 18, "/images/images-color/Backstreet Boys Square.jpg", "/images/images-bw/i04_backstreet-boys-square.jpg")
const snoopDogg = new Character("Snoop Dogg", false, 51, true, false, 45, "/images/images-color/Snoop Dogg Square.png", "/images/images-bw/i20_snoop-dogg-square.png")
const hanson = new Character("Hanson", false, 39, false, false, 3, "/images/images-color/Hanson Square.png", "/images/images-bw/i10_hanson-square.png")
const drDre = new Character("Dr Dre", false, 57, false, false, 16, "/images/images-color/Dr Dre Square.png", "/images/images-bw/i09_dr-dre-square.png")
const shawnMendes = new Character("Shawn Mendes", false, 24, false, false, 17, "/images/images-color/Shawn Mendes Square.png", "/images/images-bw/i19_shawn-mendes-square.png")
const oneDirection = new Character("One Direction", false, 30, false, false, 29, "/images/images-color/One Direction Square.png", "/images/images-bw/i16_one-direction-square.png")
const justinBieber = new Character("Justin Bieber", false, 28, false, false, 104, "/images/images-color/Justin Bieber Square.jpg", "/images/images-bw/i11_justin-bieber-square.jpg")
const missyElliot = new Character("Missy Elliot", true, 51, false, true, 0, "/images/images-color/Missy Elliot Square.jpg", "/images/images-bw/i15_missy-elliot-square.jpg")
const destinysChild = new Character("Destiny's Child", true, 42, false, true, 14, "/images/images-color/Destinys Child Square.png", "/images/images-bw/i08_destinys-child-square.png")
const britneySpears = new Character("Britney Spears", true, 41, false, true, 46, "/images/images-color/Britney Spears Square.png", "/images/images-bw/i05_britney-spears-square.png")
const aliciaKeys = new Character("Alicia Keys", true, 41, true, false, 28, "/images/images-color/Alicia Keys Square.jpg", "/images/images-bw/i02_alicia-keys-square.jpg")
const mariahCarey = new Character("Mariah Carey", true, 52, true, false, 49, "/images/images-color/Mariah Carey Square.png", "/images/images-bw/i13_mariah-carey-square.png")
const rihanna = new Character("Rihanna", true, 34, true, false, 63, "/images/images-color/Rihanna Square.png", "/images/images-bw/i17_rihanna-square.png")
const spiceGirls = new Character("Spice Girls", true, 48, true, false, 8,"/images/images-color/Spice Girls Square.jpg", "/images/images-bw/i21_spice-girls-square.jpg")
const tlc = new Character("TLC", true, 52, false, false, 16, "/images/images-color/TLC Square.jpg", "/images/images-bw/i23_tlc-square.jpg")
const adele = new Character("Adele", true, 34, false, false, 25, "/images/images-color/Adele Square.png", "/images/images-bw/i01_adele-square.png")
const pointerSisters = new Character("Pointer Sisters", true, 72, false, false, 26, "/images/images-color/The Pointer Sisters Square.jpg", "/images/images-bw/i22_the-pointer-sisters-square.jpg")
const mileyCyrus = new Character("Miley Cyrus", true, 29, false, true, 53, "/images/images-color/Miley Cyrus Square.jpg", "/images/images-bw/i14_miley-cyrus-square.jpg")
const arianaGrande = new Character("Ariana Grande", true, 29, false, false, 71, "/images/images-color/Ariana Grande Square.png", "/images/images-bw/i03_ariana-grande-square.png")
const characterArray = [wuTangClan, carlosSantana, coldplay, kendrickLamar, robbieWilliams, backstreetBoys, snoopDogg, hanson, drDre, shawnMendes, oneDirection, justinBieber, missyElliot, destinysChild, britneySpears, aliciaKeys, mariahCarey, rihanna, spiceGirls, tlc, adele, pointerSisters, mileyCyrus, arianaGrande]

const yourIdentity = characterArray[Math.floor(Math.random()*characterArray.length)]
console.log("The Winner Pick", yourIdentity)

const imgElements = document.querySelectorAll("img")


//this is the switch from property to value selection
function selectorManipulator(buttonInput) {

if(buttonInput === 1){
document.getElementById("guess-box").innerHTML = `<p>I think I am
<button onclick="valueCheckerSex(true)">Female</button>
<button onclick="valueCheckerSex(false)">Male</button></p>`
}

if(buttonInput === 2){
document.getElementById("guess-box").innerHTML = `<p>I think I am between
<span><input type="number" id="firstValue"></input><span> and <span><input type="number" id="secondValue"></input><span> years old.</p> <button onclick="valueCheckerAge()">Hit it</button>`
}

if(buttonInput === 3){
document.getElementById("guess-box").innerHTML = `<p>I think I am</p>
<button onclick="valueCheckerEyewear(true)">wearing glasses</button>
<button onclick="valueCheckerEyewear(false)">not wearing glasses</button>`
}

if(buttonInput === 4){
document.getElementById("guess-box").innerHTML = `<p>I think I am</p>
<button onclick="valueCheckerHeadwear(true)">wearing headwear</button>
<button onclick="valueCheckerHeadwear(false)">not wearing headwear</button>`
}

if(buttonInput === 5){
document.getElementById("guess-box").innerHTML = `<p>I think I had between
<span><input type="number" id="firstValueBillBoard"></input><span> and <span><input type="number" id="secondValueBillboard"></input><span> hits in the Billboard Hot 100.</p> <button onclick="valueCheckerBillboard()">Hit it</button><br><p>Note: The Billboard Hot 100 is the music industry standard record chart in the United States for songs, published weekly by Billboard magazine. Chart rankings are based on sales (physical and digital), radio play, and online streaming in the United States.<p>`
}

}



//Step 1: Extract the input of the value selector
//Step 2: Turn it into the corect type => not sure if can skip
//Step 3: Loop through the Array
    //Step 3.1 If value doesnt match, remove character from Array
    //Step 3.2 If value doesnt match, address the <img> matching the color value of the object 
    //Step 3.3 Discard matching image with b/w version
//Step 4 Check if Array length is equal to one
    //Step 4.1 Equal to 1: Trigger function declaring end of game
//Step 5: Reset to Property selector


function valueCheckerSex(){  //false -> male

    for(let i = 0; i < characterArray.length; i++){
        
        if(characterArray[i].isFemale !== yourIdentity.isFemale){ 

characterToSwapImage = characterArray[i]
characterArray.splice(i, 1) 
i -= 1 


//logic to swap images goes here
for(let j = 0; j < imgElements.length; j++){
    if(imgElements[j].alt === characterToSwapImage.name){
        imgElements[j].src = characterToSwapImage.bwImage
    }
}

 }
    }
    console.log("Updated array",characterArray)

    document.getElementById("guess-box").innerHTML = `<p>I got a feeling I know stuff about my</p>
    <button onclick="selectorManipulator(1)">Sex</button>
    <button onclick="selectorManipulator(2)">Age</button>
    <button onclick="selectorManipulator(3)">Eyewear</button>
    <button onclick="selectorManipulator(4)">Headwear</button>
    <button onclick="selectorManipulator(5)">Billboard Success</button>`


}

function valueCheckerEyewear(value){

    for(let i = 0; i < characterArray.length; i++){
        
        if(characterArray[i].hasEyewear !== yourIdentity.hasEyewear){

characterToSwapImage = characterArray[i]
characterArray.splice(i, 1) 
i -= 1 


//logic to swap images goes here
for(let j = 0; j < imgElements.length; j++){
    if(imgElements[j].alt === characterToSwapImage.name){
        imgElements[j].src = characterToSwapImage.bwImage
    }
}

 }
    }
    console.log("Updated array",characterArray)

    document.getElementById("guess-box").innerHTML = `<p>I got a feeling I know stuff about my</p>
    <button onclick="selectorManipulator(1)">Sex</button>
    <button onclick="selectorManipulator(2)">Age</button>
    <button onclick="selectorManipulator(3)">Eyewear</button>
    <button onclick="selectorManipulator(4)">Headwear</button>
    <button onclick="selectorManipulator(5)">Billboard Success</button>`
}


function valueCheckerHeadwear(value){

    for(let i = 0; i < characterArray.length; i++){
        
        if(characterArray[i].hasHeadwear !== yourIdentity.hasHeadwear){

characterToSwapImage = characterArray[i]
characterArray.splice(i, 1) 
i -= 1 


//logic to swap images goes here
for(let j = 0; j < imgElements.length; j++){
    if(imgElements[j].alt === characterToSwapImage.name){
        imgElements[j].src = characterToSwapImage.bwImage
    }
}

 }
    }
    console.log("Updated array",characterArray)

    document.getElementById("guess-box").innerHTML = `<p>I got a feeling I know stuff about my</p>
    <button onclick="selectorManipulator(1)">Sex</button>
    <button onclick="selectorManipulator(2)">Age</button>
    <button onclick="selectorManipulator(3)">Eyewear</button>
    <button onclick="selectorManipulator(4)">Headwear</button>
    <button onclick="selectorManipulator(5)">Billboard Success</button>`
}


function valueCheckerAge(){

    let lowValue = document.getElementById("firstValue").value
    let highValue = document.getElementById("secondValue").value

if(lowValue <= yourIdentity.age && highValue >= yourIdentity.age){
    console.log("Age guess correct triggered")

    for(let i = 0; i < characterArray.length; i++){
        
        if(lowValue >= characterArray[i].age || highValue <= characterArray[i].age){

characterToSwapImage = characterArray[i]
characterArray.splice(i, 1) 
i -= 1 

//logic to swap images goes here
for(let j = 0; j < imgElements.length; j++){
    if(imgElements[j].alt === characterToSwapImage.name){
        imgElements[j].src = characterToSwapImage.bwImage
    }
}
        }
 }
    } 
    
    
else if(lowValue > yourIdentity.age || highValue < yourIdentity.age){
    console.log("Age guess incorrect triggered")
        for(let i = 0; i < characterArray.length; i++){
        
            if(lowValue <= characterArray[i].age && highValue >= characterArray[i].age){ //this is always gonna be true
    
    characterToSwapImage = characterArray[i]
    characterArray.splice(i, 1) 
    i -= 1 
    
    
    //logic to swap images goes here
    for(let j = 0; j < imgElements.length; j++){
        if(imgElements[j].alt === characterToSwapImage.name){
            imgElements[j].src = characterToSwapImage.bwImage
        }
    }
            }
     }
    }
    console.log("Updated array",characterArray)

    document.getElementById("guess-box").innerHTML = `<p>I got a feeling I know stuff about my</p>
    <button onclick="selectorManipulator(1)">Sex</button>
    <button onclick="selectorManipulator(2)">Age</button>
    <button onclick="selectorManipulator(3)">Eyewear</button>
    <button onclick="selectorManipulator(4)">Headwear</button>
    <button onclick="selectorManipulator(5)">Billboard Success</button>`

}


function valueCheckerBillboard(){

    let lowValue = document.getElementById("firstValueBillBoard").value
    let highValue = document.getElementById("secondValueBillboard").value

if(lowValue <= yourIdentity.billboardHot100 && highValue >= yourIdentity.billboardHot100){
    console.log("Age guess correct triggered")

    for(let i = 0; i < characterArray.length; i++){
        
        if(lowValue >= characterArray[i].billboardHot100 || highValue <= characterArray[i].billboardHot100){

characterToSwapImage = characterArray[i]
characterArray.splice(i, 1) 
i -= 1 

//logic to swap images goes here
for(let j = 0; j < imgElements.length; j++){
    if(imgElements[j].alt === characterToSwapImage.name){
        imgElements[j].src = characterToSwapImage.bwImage
    }
}
        }
 }
    } 
    
    
else if(lowValue > yourIdentity.billboardHot100 || highValue < yourIdentity.billboardHot100){
    console.log("Age guess incorrect triggered")
        for(let i = 0; i < characterArray.length; i++){
        
            if(lowValue <= characterArray[i].billboardHot100 && highValue >= characterArray[i].billboardHot100){ //this is always gonna be true
    
    characterToSwapImage = characterArray[i]
    characterArray.splice(i, 1) 
    i -= 1 
    
    
    //logic to swap images goes here
    for(let j = 0; j < imgElements.length; j++){
        if(imgElements[j].alt === characterToSwapImage.name){
            imgElements[j].src = characterToSwapImage.bwImage
        }
    }
            }
     }
    }
    console.log("Updated array",characterArray)

    document.getElementById("guess-box").innerHTML = `<p>I got a feeling I know stuff about my</p>
    <button onclick="selectorManipulator(1)">Sex</button>
    <button onclick="selectorManipulator(2)">Age</button>
    <button onclick="selectorManipulator(3)">Eyewear</button>
    <button onclick="selectorManipulator(4)">Headwear</button>
    <button onclick="selectorManipulator(5)">Billboard Success</button>`

}