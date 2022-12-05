//creating the class character

class Character{
    constructor(isFemale, age, hasEyewear, hasHeadwear, billboardHot100, colorImage,bwImage){
        this.isFemale = isFemale,
        this.age = age
        this.hasEyewear = hasEyewear,
        this.hasHeadwear = hasHeadwear,
        this.billboardHot100 = billboardHot100,
        this.colorImage = colorImage,
        this.bwImage = bwImage
    }
}



//this is the switch from property to value selection
function selectorManipulator(buttonInput) {

if(buttonInput === `sex`){
document.getElementById("guess-box").innerHTML = `<p>I think I am
<button onclick="valueChecker()">Female</button>
<button onclick="valueChecker()">Male</button></p>`
}

if(buttonInput === `age`){
document.getElementById("guess-box").innerHTML = `<p>I think I am between
<span><input></input><span> and <span><input></input><span> years old.</p> <button>Hit it</button>`
}

if(buttonInput === `eyewear`){
document.getElementById("guess-box").innerHTML = `<p>I think I am</p>
<button>wearing glasses</button>
<button>not wearing glasses</button>`
}

if(buttonInput === `headwear`){
document.getElementById("guess-box").innerHTML = `<p>I think I am</p>
<button>wearing headwear</button>
<button>not wearing headwear</button>`
}

if(buttonInput === `billboard`){
document.getElementById("guess-box").innerHTML = `<p>I think I had between
<span><input></input><span> and <span><input></input><span> hits in the Billboard Hot 100.</p> <button>Hit it</button><br><p>Note: The Billboard Hot 100 is the music industry standard record chart in the United States for songs, published weekly by Billboard magazine. Chart rankings are based on sales (physical and digital), radio play, and online streaming in the United States.<p>`
}



}

// const divGuessBox = document.getElementById("guess-box") //this is the element where manipulated value selector goes in


const wuTangClan = new Character(false, 53, false, true, 0, "/images/images-color/Wu Tang Clan Square.png")
const carlosSantana = new Character(false, 75, false, true, 1, "/images/images-color/Carlos Santana Square.png")
const coldplay = new Character(false, 44, false, true, 24, "/images/images-color/Coldplay Square.jpg")
const kendrickLamar = new Character(false, 35, false, true, 69, "/images/images-color/Kendrick Lamar Square.png")
const robbieWilliams = new Character(false, 48, true, false, 2, "/images/images-color/Robbie Williams Square.png")
const backstreetBoys = new Character(false, 46, true, false, 18, "/images/images-color/Backstreet Boys Square.jpg")
const snoopDogg = new Character(false, 51, true, false, 45, "/images/images-color/Snoop Dogg Square.png")
const hanson = new Character(false, 39, false, false, 3, "/images/images-color/Hanson Square.png")
const drDre = new Character(false, 57, false, false, 16, "/images/images-color/Dr Dre Square.png")
const shawnMendes = new Character(false, 24, false, false, 17, "/images/images-color/Shawn Mendes Square.png")
const oneDirection = new Character(false, 30, false, false, 29, "/images/images-color/One Direction Square.png")
const justinBieber = new Character(false, 28, false, false, 104, "/images/images-color/Justin Bieber Square.jpg")
const missyElliot = new Character(true, 51, false, true, 0, "/images/images-color/Missy Elliot Square.jpg")
const destinysChild = new Character(true, 42, false, true, 14, "/images/images-color/Destinys Child Square.png")
const britneySpears = new Character(true, 41, false, true, 46, "/images/images-color/Britney Spears Square.png")
const aliciaKeys = new Character(true, 41, true, false, 28, "/images/images-color/Alicia Keys Square.jpg")
const mariahCarey = new Character(true, 52, true, false, 49, "/images/images-color/Mariah Carey Square.png")
const rihanna = new Character(true, 34, true, false, 63, "/images/images-color/Rihanna Square.png")
const spiceGirls = new Character(true, 48, true, false, 8,"/images/images-color/Spice Girls Square.jpg")
const tlc = new Character(true, 52, false, false, 16, "/images/images-color/TLC Square.jpg")
const adele = new Character(true, 34, false, false, 25, "/images/images-color/Adele Square.png")
const pointerSisters = new Character(true, 72, false, false, 26, "/images/images-color/The Pointer Sisters Square.jpg")
const mileyCyrus = new Character(true, 29, false, true, 53, "/images/images-color/Miley Cyrus Square.jpg")
const arianaGrande = new Character(true, 29, false, false, 71, "/images/images-color/Ariana Grande Square.png")

const characterArray = [wuTangClan, carlosSantana, coldplay, kendrickLamar, robbieWilliams, backstreetBoys, snoopDogg, hanson, drDre, shawnMendes, oneDirection, justinBieber, missyElliot, destinysChild, britneySpears, aliciaKeys, mariahCarey, rihanna, spiceGirls, tlc, adele, pointerSisters, mileyCyrus, arianaGrande]
console.log(characterArray)


console.log(characterArray)



//Step 1: Extract the input of the value selector
//Step 2: Turn it into the corect type => not sure if can skip
//Step 3: Loop through the Array
    //Step 3.1 If value doesnt match, remove character from Array
    //Step 3.2 If value doesnt match, address the <img> matching the color value of the object 
    //Step 3.3 Discard matching image with b/w version
//Step 4 Check if Array length is equal to one
    //Step 4.1 Equal to 1: Trigger function declaring end of game
//Step 5: Reset to Property selector
