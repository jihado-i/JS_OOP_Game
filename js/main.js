// Define variables 

//Cena Competitor One
let cenaAttack          = document.querySelector("#cena-attack");
let cenaHealth          = document.querySelector("#cena-health");
let cenaHealthProgress  = document.querySelector(".cena-health span");

//Undertacker Competitor Two
let undertackerAttack          = document.querySelector("#undertacker-attack")
let undertackerHealth          = document.querySelector("#undertacker-health")
let undertackerHealthProgress  = document.querySelector(".undertacker-health span");


// Charackter Funcaton Class
function Charackter(name,power,health){
    this.name   = name;
    this.power  = power;
    this.health = health;
}

// enemy parameter is a object we will attack him 
Charackter.prototype.attack = function(enemy){
    enemy.health -=  this.power;
    console.log(enemy.health)
}

Charackter.prototype.status = function(){
    console.log(`Name  : ${this.name}`);
    console.log(`Power : ${this.power}`);
    console.log(`Health : ${this.health}`);
}

Charackter.prototype.makeHealth = function(){
    
    if(this.health<100){
        this.health +=10;
        if(this.health>100){
            this.health = 100;
        }
    }
}

Charackter.prototype.checkCompetitorHealth = function(competitor){
    if(competitor.health === 0){
        setTimeout(()=>{
            // winnerCheck.innerHTML = `The Winner is ${this.name}`;
            cenaAttack.remove()
            cenaHealth.remove()
            undertackerAttack.remove()
            undertackerHealth.remove()
            let winner = this.name;
            createWinnerMesege(winner);
        },1000)
    }
}

let cena = new Charackter("John Cena",10,100);
let undertacker = new Charackter("The Undertacker",10,100);

//  Warrior One Attack And Health control
cenaAttack.addEventListener("click",doAttack1)
cenaHealth.addEventListener("click",doHealth1)

function doAttack1(){
    cena.attack(undertacker);
    undertackerHealthProgress.style.setProperty("width",undertacker.health+"%");
    cena.checkCompetitorHealth(undertacker)
}

function doHealth1(){
    cena.makeHealth()
    cenaHealthProgress.style.setProperty("width",cena.health+"%")
}

//  Warrior Two Attack And Health control
undertackerAttack.addEventListener("click",doAttack2)
undertackerHealth.addEventListener("click",doHealth2)

function doAttack2(){
    undertacker.attack(cena);
    cenaHealthProgress.style.setProperty("width",cena.health+"%")
    undertacker.checkCompetitorHealth(cena)
}
function doHealth2(){
    undertacker.makeHealth()
    undertackerHealthProgress.style.setProperty("width",undertacker.health+"%")
}

// winner check variabel
let winnerCheck = document.querySelector(".winnerCheck")

// Creat And Appending Winner 
let appendWinner = document.getElementById("appendWinner");
function createWinnerMesege(winner){
    let mesege = document.createElement("marquee");
    mesege.setAttribute("scrollamount","12");
    mesege.setAttribute("class","winnerCheck");
    mesege.innerHTML = `The Winner is <b style="color:green;"> ${winner}!</b>`;
    appendWinner.appendChild(mesege)
}
