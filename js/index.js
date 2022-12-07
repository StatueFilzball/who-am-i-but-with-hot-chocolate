let guessCount = 0
const imgElements = document.querySelectorAll("img")
const guessboxElement = document.getElementById("guess-box")
const instructionsElement = document.getElementById("instruction")

function selectorManipulator(buttonInput) {

if(buttonInput === 1){
    guessboxElement.innerHTML = `<p>I think I am
<button class="button-style" onclick="valueCheckerSex(true)">Female</button>
<button class="button-style" onclick="valueCheckerSex(false)">Male</button></p>`
}

if(buttonInput === 2){
    guessboxElement.innerHTML = `<p>I think I am between
<span><input type="number" id="firstValue"></input><span> and <span><input type="number" id="secondValue"></input><span> years old.</p> <button class="button-style" onclick="valueCheckerAge()">Hit it</button>`
}

if(buttonInput === 3){
    guessboxElement.innerHTML = `<p>I think I am
<button class="button-style" onclick="valueCheckerEyewear(true)">wearing glasses</button>
<button class="button-style" onclick="valueCheckerEyewear(false)">not wearing glasses</button></p>`
}

if(buttonInput === 4){
    guessboxElement.innerHTML = `<p>I think I am
<button class="button-style" onclick="valueCheckerHeadwear(true)">wearing headwear</button>
<button class="button-style" onclick="valueCheckerHeadwear(false)">not wearing headwear</button></p>`
}

if(buttonInput === 5){
    guessboxElement.innerHTML = `<p>I think I had between
<span><input type="number" id="firstValueBillBoard"></input><span> and <span><input type="number" id="secondValueBillboard"></input><span> hits in the Billboard Hot 100.</p> <button class="button-style" onclick="valueCheckerBillboard()">Hit it</button><br><p>Note: The Billboard Hot 100 is the music industry standard record chart in the United States for songs, published weekly by Billboard magazine. Chart rankings are based on sales (physical and digital), radio play, and online streaming in the United States.<p>`
}

}

function valueCheckerSex(){  

    for(let i = 0; i < characterArray.length; i++){
        
        if(characterArray[i].isFemale !== yourIdentity.isFemale){ 

characterToSwapImage = characterArray[i]
characterArray.splice(i, 1) 
i -= 1 


pictureSwapper()

 }
    }
    console.log("Updated array",characterArray)
    guessCounter()
    guessProbability()
    if(characterArray.length === 1){
        endGame()
    } else{
    theCheekyRabbit()
    }

}

function valueCheckerEyewear(value){

    for(let i = 0; i < characterArray.length; i++){
        
        if(characterArray[i].hasEyewear !== yourIdentity.hasEyewear){

characterToSwapImage = characterArray[i]
characterArray.splice(i, 1) 
i -= 1 



pictureSwapper()


 }
    }
    console.log("Updated array",characterArray)
    guessCounter()
    guessProbability()
    endGame()
}

function valueCheckerHeadwear(value){

    for(let i = 0; i < characterArray.length; i++){
        
        if(characterArray[i].hasHeadwear !== yourIdentity.hasHeadwear){

            characterToSwapImage = characterArray[i]
            characterArray.splice(i, 1) 
            i -= 1 




            pictureSwapper()

}
    }
    
    console.log("Updated array",characterArray)
    guessCounter()
    guessProbability()
    endGame()
    
    
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



pictureSwapper()

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
    
    
    pictureSwapper()

            }
     }
    }
    guessCounter()
    guessProbability()
    console.log("Updated array",characterArray)
    endGame()
    

}

function valueCheckerBillboard(){

    let lowValue = document.getElementById("firstValueBillBoard").value
    let highValue = document.getElementById("secondValueBillboard").value

if(lowValue <= yourIdentity.billboardHot100 && highValue >= yourIdentity.billboardHot100){
    console.log("Age guess correct triggered")

    for(let i = 0; i < characterArray.length; i++){
        
        if(lowValue > characterArray[i].billboardHot100 || highValue < characterArray[i].billboardHot100){

characterToSwapImage = characterArray[i]
characterArray.splice(i, 1) 
i -= 1 


pictureSwapper()

        }
 }
    } 
    
    
else if(lowValue > yourIdentity.billboardHot100 || highValue < yourIdentity.billboardHot100){
    console.log("Age guess incorrect triggered")
        for(let i = 0; i < characterArray.length; i++){
        
            if(lowValue < characterArray[i].billboardHot100 && highValue > characterArray[i].billboardHot100){ //this is always gonna be true
    
    characterToSwapImage = characterArray[i]
    characterArray.splice(i, 1) 
    i -= 1 
    

    pictureSwapper()

            }
     }
    }
    console.log("Updated array",characterArray)
    guessCounter()
    guessProbability()
    endGame()
}


function theCheekyRabbit(){
    guessboxElement.innerHTML = `<h2>Wait, a cute bunny?!</h2><br><div id="bunny-box-full"><div id="bunny-box"><p>Hey there, can you believe this weather? It's freezing out there. Before your next guess, take this hot chocolate and get comfy.</p><div id="bunny-buttons"><button style="margin-Right:5px" class="button-style" onclick="renderGuessbox()">No thanks, cute bunny.</button><button class="button-style" onclick="gameOver()">Lovely. I'll take it</button></div></div><br><img src=./images/images-color/hot-chocolate-transparent.png><img src=./images/images-color/cute-bunny-3.png></div>`
    }

function renderGuessbox(){             
    guessboxElement.innerHTML = `<h2>Take your guess!</h2><p>I got a feeling I know stuff about my</p>
    <div id="renderGuessbox"><button class="button-style" onclick="selectorManipulator(1)">Sex</button>
    <button class="button-style" onclick="selectorManipulator(2)">Age</button>
    <button class="button-style" onclick="selectorManipulator(3)">Eyewear</button>
    <button class="button-style" onclick="selectorManipulator(4)">Headwear</button>
    <button class="button-style" onclick="selectorManipulator(5)">Billboard Success</button></div>`

}

function gameOver(){
    instructionsElement.innerHTML = `<p>You lost. You really did not read the instructions, did you :(</p><button class="button-style" onClick="history.go(0);">Try again</button>`
    instructionsElement.style.justifyContent = "center"
    instructionsElement.style.alignItems = "center"
}



function guessCounter(){
guessCount++

document.getElementById("counter").innerText = `${guessCount}`
} 

function guessProbability(){
    let winningChance = Math.floor(100/ characterArray.length)
    document.getElementById("guess-probability").innerHTML = `${winningChance}`
}

function pictureSwapper(){
    for(let j = 0; j < imgElements.length; j++){
      if(imgElements[j].alt === characterToSwapImage.name){
          imgElements[j].src = characterToSwapImage.bwImage
      }
  }
}

function endGame(){
    if(characterArray.length === 1){

    document.getElementById("instruction").innerHTML = `<p>Damn champ, you figured it out! You are ${yourIdentity.name}!</p><br><img src=${yourIdentity.colorImage}><br><p>Cool little fun fact: You are way better at DOM Manipulation than ${yourIdentity.name} ever will be. Keep rocking the Bootcamp, you little superstar!</p><br><button class="button-style" onClick="history.go(0);">Play again</button>`
    document.getElementById("instruction").classList = "endGameFlex"
    instructionsElement.style.justifyContent = "center"
    instructionsElement.style.alignItems = "center"
    } else {
        renderGuessbox()
    }
    }

function wrongGuess(){
    instructionsElement.innerHTML = `<p>Today ain't your lucky day :(</p><br><button class="button-style" onClick="history.go(0);">Try again</button>`
    instructionsElement.style.justifyContent = "center"
    instructionsElement.style.alignItems = "center"
}
