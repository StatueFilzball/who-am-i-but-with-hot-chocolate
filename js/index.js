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

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


const wuTangClan = new Character(false, 53, false, true, 0)
const carlosSantana = new Character(false, 75, false, true, 1)
const coldplay = new Character(false, 44, false, true, 24)
const kendrickLamar = new Character(false, 35, false, true, 69)
const robbieWilliams = new Character(false, 48, true, false, 2)
const backstreetBoys = new Character(false, 46, true, false, 18)
const snoopDogg = new Character(false, 51, true, false, 45)
const hanson = new Character(false, 39, false, false, 3)
const drDre = new Character(false, 57, false, false, 16)
const shawnMendes = new Character(false, 24, false, false, 17)
const oneDirection = new Character(false, 30, false, false, 29)
const justinBieber = new Character(false, 28, false, false, 104)
const missyElliot = new Character(true, 51, false, true, 0)
const destinysChild = new Character(true, 42, false, true, 14)
const britneySpears = new Character(true, 41, false, true, 46)
const aliciaKeys = new Character(true, 41, true, false, 28)
const mariahCarey = new Character(true, 52, true, false, 49)
const rihanna = new Character(true, 34, true, false, 63)
const spiceGirls = new Character(true, 48, true, false, 8)
const tlc = new Character(true, 52, false, false, 16)
const adele = new Character(true, 34, false, false, 25)
const pointerSisters = new Character(true, 72, false, false, 26)
const mileyCyrus = new Character(true, 29, false, true, 53)
const arianaGrande = new Character(true, 29, false, false, 71)





