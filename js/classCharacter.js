//creating the class character

class Character{
    constructor(isFemale, age, hasEyewear, hasHeadwear, billboardHot100){
        this.isFemale = isFemale,
        this.age = age
        this.hasEyewear = hasEyewear,
        this.hasHeadwear = hasHeadwear,
        this.billboardHot100 = billboardHot100
    }
}

function theCheekyRabbit(){
document.getElementById("guess-box").innerHTML = `<p>Hey there, can you believe this weather? It's freezing out there. Here, take this mug of hot chocolate and get comfy.</p><br><img src=/images/images-color/magic-bunny.jpg><br><img src=/images/images-color/hot-chocolate.png><br><button onclick="renderGuessbox()">No thanks, magic bunny.</button><button onclick="gameOver()">Lovely. I'll take it</button>`
}