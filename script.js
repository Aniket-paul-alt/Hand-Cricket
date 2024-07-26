const btnBat = document.querySelector("#btnBat")
const btnBowl = document.querySelector("#btnBowl")
const firstBat = document.querySelector("#firstBat")
const firstBowl = document.querySelector("#firstBowl")
const choice = document.querySelector(".choice")
const afterChoice = document.querySelector(".afterChoice")
const whoBat = document.querySelector("#whoBat")
const innings = document.querySelector(".innings")
const firstSecond = document.querySelector("#firstSecond")

const btnZero = document.querySelector("#btnZero")
const btnOne = document.querySelector("#btnOne")
const btnTwo = document.querySelector("#btnTwo")
const btnThree = document.querySelector("#btnThree")
const btnFour = document.querySelector("#btnFour")
const btnFive = document.querySelector("#btnFive")
const btnSix = document.querySelector("#btnSix")

const btnStatus = document.querySelector("#btnStatus")

const yourBox = document.querySelector("#yourBox")
const AIBox = document.querySelector("#AIBox")

let randomAIrun

const runUpdate = document.querySelector(".runUpdate")
// const yourRun = document.querySelector("#yourRun")
// const AIRun = document.querySelector("#AIRun")
const target = document.querySelector("#target")
const score = document.querySelector("#score")

let sumOfRun = 0
let targetScore
// console.log(targetScore);
let yourRun , AIrun

btnZero.addEventListener("click",()=>{
    yourBox.setAttribute("src", "fist.png")
    randomAIrun = Math.floor(Math.random()*7)
    if(randomAIrun === 0){
        AIBox.setAttribute("src", "fist.png")
    }else if(randomAIrun === 1){
        AIBox.setAttribute("src", "one.png")
    }else if(randomAIrun === 2){
        AIBox.setAttribute("src", "two.png")
    }else if(randomAIrun === 3){
        AIBox.setAttribute("src", "three.png")
    }else if(randomAIrun === 4){
        AIBox.setAttribute("src", "four.png")
    }else if(randomAIrun === 5){
        AIBox.setAttribute("src", "five.png")
    }else{
        AIBox.setAttribute("src", "thumb.png")
    }

    if(targetScore === undefined){
        if(randomAIrun === 0){
            runUpdate.textContent = `OUT`
        }else{
            sumOfRun += 0
            runUpdate.textContent = `Scored 0`
            score.textContent = `${sumOfRun}`
        }
    }else{
        if(randomAIrun === 0){
            runUpdate.textContent = `OUT`
        }else{
            sumOfRun += randomAIrun
            runUpdate.textContent = `Scored ${randomAIrun}`
            score.textContent = `${sumOfRun}`
        }    
    }

    if(targetScore === undefined){
        setTimeout(() => {
            yourBox.setAttribute("src", "")
            AIBox.setAttribute("src", "")
            
            if(randomAIrun === 0){
                runUpdate.textContent = `Innings Break...`
                targetScore = sumOfRun
                yourRun = sumOfRun
                sumOfRun = 0
                score.textContent = `${sumOfRun}`
                target.textContent = ` | Target : ${targetScore+1}`
                whoBat.textContent = `AI`
                firstSecond.textContent = `Second `
                firstBat.textContent = `AI`
                firstBowl.textContent = `You`
            }else{
                runUpdate.textContent = `Next Ball...`
            }
        }, 3000);
    }else{
        setTimeout(() => {
            yourBox.setAttribute("src", "")
            AIBox.setAttribute("src", "")
            
            if(randomAIrun === 0){
                runUpdate.textContent = `Innings Break...`
                // targetScore = sumOfRun
                AIrun = sumOfRun
                // sumOfRun = 0
                score.textContent = `${sumOfRun}`
                // target.textContent = ` | Target : ${targetScore+1}`
                // whoBat.textContent = `AI`
                // firstSecond.textContent = `Second `
                // firstBat.textContent = `AI`
                // firstBowl.textContent = `You`
                if(yourRun === AIrun) runUpdate.textContent = `Match Draw`
                else if(yourRun > AIrun) runUpdate.textContent = `You win`
                else runUpdate.textContent = `AI win`

                btnStatus.style.display = 'inline'
            }else{
                if(sumOfRun >= (targetScore+1)){
                    if(yourRun === AIrun) runUpdate.textContent = `Match Draw`
                    else if(yourRun > AIrun) runUpdate.textContent = `You win`
                    else runUpdate.textContent = `AI win`

                    btnStatus.style.display = 'inline'
                }else{
                    runUpdate.textContent = `Next Ball...`
                }
            }
        }, 3000);
    }

})

btnOne.addEventListener("click",()=>{
    yourBox.setAttribute("src", "one.png")
    randomAIrun = Math.floor(Math.random()*7)
    if(randomAIrun === 0){
        AIBox.setAttribute("src", "fist.png")
    }else if(randomAIrun === 1){
        AIBox.setAttribute("src", "one.png")
    }else if(randomAIrun === 2){
        AIBox.setAttribute("src", "two.png")
    }else if(randomAIrun === 3){
        AIBox.setAttribute("src", "three.png")
    }else if(randomAIrun === 4){
        AIBox.setAttribute("src", "four.png")
    }else if(randomAIrun === 5){
        AIBox.setAttribute("src", "five.png")
    }else{
        AIBox.setAttribute("src", "thumb.png")
    }

    if(targetScore === undefined){
        if(randomAIrun === 1){
            runUpdate.textContent = `OUT`
        }else{
            sumOfRun += 1
            runUpdate.textContent = `Scored 1`
            score.textContent = `${sumOfRun}`
        }
    }else{
        if(randomAIrun === 1){
            runUpdate.textContent = `OUT`
        }else{
            sumOfRun += randomAIrun
            runUpdate.textContent = `Scored ${randomAIrun}`
            score.textContent = `${sumOfRun}`
        }    
    }

    if(targetScore === undefined){
        setTimeout(() => {
            yourBox.setAttribute("src", "")
            AIBox.setAttribute("src", "")
            
            if(randomAIrun === 1){
                runUpdate.textContent = `Innings Break...`
                targetScore = sumOfRun
                yourRun = sumOfRun
                sumOfRun = 0
                score.textContent = `${sumOfRun}`
                target.textContent = ` | Target : ${targetScore+1}`
                whoBat.textContent = `AI`
                firstSecond.textContent = `Second `
                firstBat.textContent = `AI`
                firstBowl.textContent = `You`
            }else{
                runUpdate.textContent = `Next Ball...`
            }
        }, 3000);
    }else{
        setTimeout(() => {
            yourBox.setAttribute("src", "")
            AIBox.setAttribute("src", "")
            
            if(randomAIrun === 1){
                runUpdate.textContent = `Innings Break...`
                // targetScore = sumOfRun
                AIrun = sumOfRun
                sumOfRun = 0
                score.textContent = `${sumOfRun}`
                // target.textContent = ` | Target : ${targetScore+1}`
                // whoBat.textContent = `AI`
                // firstSecond.textContent = `Second `
                // firstBat.textContent = `AI`
                // firstBowl.textContent = `You`
                if(yourRun === AIrun) runUpdate.textContent = `Match Draw`
                else if(yourRun > AIrun) runUpdate.textContent = `You win`
                else runUpdate.textContent = `AI win`

                btnStatus.style.display = 'inline'
            }else{
                if(sumOfRun >= (targetScore+1)){
                    if(yourRun === AIrun) runUpdate.textContent = `Match Draw`
                    else if(yourRun > AIrun) runUpdate.textContent = `You win`
                    else runUpdate.textContent = `AI win`

                    btnStatus.style.display = 'inline'
                }else{
                    runUpdate.textContent = `Next Ball...`
                }
            }
        }, 3000);
    }

})

btnTwo.addEventListener("click",()=>{
    yourBox.setAttribute("src", "two.png")
    randomAIrun = Math.floor(Math.random()*7)
    if(randomAIrun === 0){
        AIBox.setAttribute("src", "fist.png")
    }else if(randomAIrun === 1){
        AIBox.setAttribute("src", "one.png")
    }else if(randomAIrun === 2){
        AIBox.setAttribute("src", "two.png")
    }else if(randomAIrun === 3){
        AIBox.setAttribute("src", "three.png")
    }else if(randomAIrun === 4){
        AIBox.setAttribute("src", "four.png")
    }else if(randomAIrun === 5){
        AIBox.setAttribute("src", "five.png")
    }else{
        AIBox.setAttribute("src", "thumb.png")
    }

    if(targetScore === undefined){
        if(randomAIrun === 2){
            runUpdate.textContent = `OUT`
        }else{
            sumOfRun += 2
            runUpdate.textContent = `Scored 2`
            score.textContent = `${sumOfRun}`
        }
    }else{
        if(randomAIrun === 2){
            runUpdate.textContent = `OUT`
        }else{
            sumOfRun += randomAIrun
            runUpdate.textContent = `Scored ${randomAIrun}`
            score.textContent = `${sumOfRun}`
        }    
    }

    if(targetScore === undefined){
        setTimeout(() => {
            yourBox.setAttribute("src", "")
            AIBox.setAttribute("src", "")
            
            if(randomAIrun === 2){
                runUpdate.textContent = `Innings Break...`
                targetScore = sumOfRun
                yourRun = sumOfRun
                sumOfRun = 0
                score.textContent = `${sumOfRun}`
                target.textContent = ` | Target : ${targetScore+1}`
                whoBat.textContent = `AI`
                firstSecond.textContent = `Second `
                firstBat.textContent = `AI`
                firstBowl.textContent = `You`
            }else{
                runUpdate.textContent = `Next Ball...`
            }
        }, 3000);
    }else{
        setTimeout(() => {
            yourBox.setAttribute("src", "")
            AIBox.setAttribute("src", "")
            
            if(randomAIrun === 2){
                runUpdate.textContent = `Innings Break...`
                // targetScore = sumOfRun
                AIrun = sumOfRun
                sumOfRun = 0
                score.textContent = `${sumOfRun}`
                // target.textContent = ` | Target : ${targetScore+1}`
                // whoBat.textContent = `AI`
                // firstSecond.textContent = `Second `
                // firstBat.textContent = `AI`
                // firstBowl.textContent = `You`
                if(yourRun === AIrun) runUpdate.textContent = `Match Draw`
                else if(yourRun > AIrun) runUpdate.textContent = `You win`
                else runUpdate.textContent = `AI win`

                btnStatus.style.display = 'inline'
            }else{
                if(sumOfRun >= (targetScore+1)){
                    if(yourRun === AIrun) runUpdate.textContent = `Match Draw`
                    else if(yourRun > AIrun) runUpdate.textContent = `You win`
                    else runUpdate.textContent = `AI win`

                    btnStatus.style.display = 'inline'
                }else{
                    runUpdate.textContent = `Next Ball...`
                }
            }
        }, 3000);
    }

})

btnThree.addEventListener("click",()=>{
    yourBox.setAttribute("src", "three.png")
    randomAIrun = Math.floor(Math.random()*7)
    if(randomAIrun === 0){
        AIBox.setAttribute("src", "fist.png")
    }else if(randomAIrun === 1){
        AIBox.setAttribute("src", "one.png")
    }else if(randomAIrun === 2){
        AIBox.setAttribute("src", "two.png")
    }else if(randomAIrun === 3){
        AIBox.setAttribute("src", "three.png")
    }else if(randomAIrun === 4){
        AIBox.setAttribute("src", "four.png")
    }else if(randomAIrun === 5){
        AIBox.setAttribute("src", "five.png")
    }else{
        AIBox.setAttribute("src", "thumb.png")
    }

    if(targetScore === undefined){
        if(randomAIrun === 3){
            runUpdate.textContent = `OUT`
        }else{
            sumOfRun += 3
            runUpdate.textContent = `Scored 3`
            score.textContent = `${sumOfRun}`
        }
    }else{
        if(randomAIrun === 3){
            runUpdate.textContent = `OUT`
        }else{
            sumOfRun += randomAIrun
            runUpdate.textContent = `Scored ${randomAIrun}`
            score.textContent = `${sumOfRun}`
        }    
    }

    if(targetScore === undefined){
        setTimeout(() => {
            yourBox.setAttribute("src", "")
            AIBox.setAttribute("src", "")
            
            if(randomAIrun === 3){
                runUpdate.textContent = `Innings Break...`
                targetScore = sumOfRun
                yourRun = sumOfRun
                sumOfRun = 0
                score.textContent = `${sumOfRun}`
                target.textContent = ` | Target : ${targetScore+1}`
                whoBat.textContent = `AI`
                firstSecond.textContent = `Second `
                firstBat.textContent = `AI`
                firstBowl.textContent = `You`
            }else{
                runUpdate.textContent = `Next Ball...`
            }
        }, 3000);
    }else{
        setTimeout(() => {
            yourBox.setAttribute("src", "")
            AIBox.setAttribute("src", "")
            
            if(randomAIrun === 3){
                runUpdate.textContent = `Innings Break...`
                // targetScore = sumOfRun
                AIrun = sumOfRun
                sumOfRun = 0
                score.textContent = `${sumOfRun}`
                // target.textContent = ` | Target : ${targetScore+1}`
                // whoBat.textContent = `AI`
                // firstSecond.textContent = `Second `
                // firstBat.textContent = `AI`
                // firstBowl.textContent = `You`
                if(yourRun === AIrun) runUpdate.textContent = `Match Draw`
                else if(yourRun > AIrun) runUpdate.textContent = `You win`
                else runUpdate.textContent = `AI win`

                btnStatus.style.display = 'inline'
            }else{
                if(sumOfRun >= (targetScore+1)){
                    if(yourRun === AIrun) runUpdate.textContent = `Match Draw`
                    else if(yourRun > AIrun) runUpdate.textContent = `You win`
                    else runUpdate.textContent = `AI win`

                    btnStatus.style.display = 'inline'
                }else{
                    runUpdate.textContent = `Next Ball...`
                }
            }
        }, 3000);
    }

})

btnFour.addEventListener("click",()=>{
    yourBox.setAttribute("src", "four.png")
    randomAIrun = Math.floor(Math.random()*7)
    if(randomAIrun === 0){
        AIBox.setAttribute("src", "fist.png")
    }else if(randomAIrun === 1){
        AIBox.setAttribute("src", "one.png")
    }else if(randomAIrun === 2){
        AIBox.setAttribute("src", "two.png")
    }else if(randomAIrun === 3){
        AIBox.setAttribute("src", "three.png")
    }else if(randomAIrun === 4){
        AIBox.setAttribute("src", "four.png")
    }else if(randomAIrun === 5){
        AIBox.setAttribute("src", "five.png")
    }else{
        AIBox.setAttribute("src", "thumb.png")
    }

    if(targetScore === undefined){
        if(randomAIrun === 4){
            runUpdate.textContent = `OUT`
        }else{
            sumOfRun += 4
            runUpdate.textContent = `Scored 4`
            score.textContent = `${sumOfRun}`
        }
    }else{
        if(randomAIrun === 4){
            runUpdate.textContent = `OUT`
        }else{
            sumOfRun += randomAIrun
            runUpdate.textContent = `Scored ${randomAIrun}`
            score.textContent = `${sumOfRun}`
        }    
    }

    if(targetScore === undefined){
        setTimeout(() => {
            yourBox.setAttribute("src", "")
            AIBox.setAttribute("src", "")
            
            if(randomAIrun === 4){
                runUpdate.textContent = `Innings Break...`
                targetScore = sumOfRun
                yourRun = sumOfRun
                sumOfRun = 0
                score.textContent = `${sumOfRun}`
                target.textContent = ` | Target : ${targetScore+1}`
                whoBat.textContent = `AI`
                firstSecond.textContent = `Second `
                firstBat.textContent = `AI`
                firstBowl.textContent = `You`
            }else{
                runUpdate.textContent = `Next Ball...`
            }
        }, 3000);
    }else{
        setTimeout(() => {
            yourBox.setAttribute("src", "")
            AIBox.setAttribute("src", "")
            
            if(randomAIrun === 4){
                runUpdate.textContent = `Innings Break...`
                // targetScore = sumOfRun
                AIrun = sumOfRun
                sumOfRun = 0
                score.textContent = `${sumOfRun}`
                // target.textContent = ` | Target : ${targetScore+1}`
                // whoBat.textContent = `AI`
                // firstSecond.textContent = `Second `
                // firstBat.textContent = `AI`
                // firstBowl.textContent = `You`
                if(yourRun === AIrun) runUpdate.textContent = `Match Draw`
                else if(yourRun > AIrun) runUpdate.textContent = `You win`
                else runUpdate.textContent = `AI win`

                btnStatus.style.display = 'inline'
            }else{
                if(sumOfRun >= (targetScore+1)){
                    if(yourRun === AIrun) runUpdate.textContent = `Match Draw`
                    else if(yourRun > AIrun) runUpdate.textContent = `You win`
                    else runUpdate.textContent = `AI win`

                    btnStatus.style.display = 'inline'
                }else{
                    runUpdate.textContent = `Next Ball...`
                }
            }
        }, 3000);
    };

})

btnFive.addEventListener("click",()=>{
    yourBox.setAttribute("src", "five.png")
    randomAIrun = Math.floor(Math.random()*7)
    if(randomAIrun === 0){
        AIBox.setAttribute("src", "fist.png")
    }else if(randomAIrun === 1){
        AIBox.setAttribute("src", "one.png")
    }else if(randomAIrun === 2){
        AIBox.setAttribute("src", "two.png")
    }else if(randomAIrun === 3){
        AIBox.setAttribute("src", "three.png")
    }else if(randomAIrun === 4){
        AIBox.setAttribute("src", "four.png")
    }else if(randomAIrun === 5){
        AIBox.setAttribute("src", "five.png")
    }else{
        AIBox.setAttribute("src", "thumb.png")
    }

    if(targetScore === undefined){
        if(randomAIrun === 5){
            runUpdate.textContent = `OUT`
        }else{
            sumOfRun += 5
            runUpdate.textContent = `Scored 5`
            score.textContent = `${sumOfRun}`
        }
    }else{
        if(randomAIrun === 5){
            runUpdate.textContent = `OUT`
        }else{
            sumOfRun += randomAIrun
            runUpdate.textContent = `Scored ${randomAIrun}`
            score.textContent = `${sumOfRun}`
        }    
    }

    if(targetScore === undefined){
        setTimeout(() => {
            yourBox.setAttribute("src", "")
            AIBox.setAttribute("src", "")
            
            if(randomAIrun === 5){
                runUpdate.textContent = `Innings Break...`
                targetScore = sumOfRun
                yourRun = sumOfRun
                sumOfRun = 0
                score.textContent = `${sumOfRun}`
                target.textContent = ` | Target : ${targetScore+1}`
                whoBat.textContent = `AI`
                firstSecond.textContent = `Second `
                firstBat.textContent = `AI`
                firstBowl.textContent = `You`
            }else{
                runUpdate.textContent = `Next Ball...`
            }
        }, 3000);
    }else{
        setTimeout(() => {
            yourBox.setAttribute("src", "")
            AIBox.setAttribute("src", "")
            
            if(randomAIrun === 5){
                runUpdate.textContent = `Innings Break...`
                // targetScore = sumOfRun
                AIrun = sumOfRun
                sumOfRun = 0
                score.textContent = `${sumOfRun}`
                // target.textContent = ` | Target : ${targetScore+1}`
                // whoBat.textContent = `AI`
                // firstSecond.textContent = `Second `
                // firstBat.textContent = `AI`
                // firstBowl.textContent = `You`
                if(yourRun === AIrun) runUpdate.textContent = `Match Draw`
                else if(yourRun > AIrun) runUpdate.textContent = `You win`
                else runUpdate.textContent = `AI win`

                btnStatus.style.display = 'inline'
            }else{
                if(sumOfRun >= (targetScore+1)){
                    if(yourRun === AIrun) runUpdate.textContent = `Match Draw`
                    else if(yourRun > AIrun) runUpdate.textContent = `You win`
                    else runUpdate.textContent = `AI win`

                    btnStatus.style.display = 'inline'
                }else{
                    runUpdate.textContent = `Next Ball...`
                }
            }
        }, 3000);
    }

})

btnSix.addEventListener("click",()=>{
    yourBox.setAttribute("src", "thumb.png")
    randomAIrun = Math.floor(Math.random()*7)
    if(randomAIrun === 0){
        AIBox.setAttribute("src", "fist.png")
    }else if(randomAIrun === 1){
        AIBox.setAttribute("src", "one.png")
    }else if(randomAIrun === 2){
        AIBox.setAttribute("src", "two.png")
    }else if(randomAIrun === 3){
        AIBox.setAttribute("src", "three.png")
    }else if(randomAIrun === 4){
        AIBox.setAttribute("src", "four.png")
    }else if(randomAIrun === 5){
        AIBox.setAttribute("src", "five.png")
    }else{
        AIBox.setAttribute("src", "thumb.png")
    }

    if(targetScore === undefined){
        if(randomAIrun === 6){
            runUpdate.textContent = `OUT`
        }else{
            sumOfRun += 6
            runUpdate.textContent = `Scored 6`
            score.textContent = `${sumOfRun}`
        }
    }else{
        if(randomAIrun === 6){
            runUpdate.textContent = `OUT`
        }else{
            sumOfRun += randomAIrun
            runUpdate.textContent = `Scored ${randomAIrun}`
            score.textContent = `${sumOfRun}`
        }    
    }

    if(targetScore === undefined){
        setTimeout(() => {
            yourBox.setAttribute("src", "")
            AIBox.setAttribute("src", "")
            
            if(randomAIrun === 6){
                runUpdate.textContent = `Innings Break...`
                targetScore = sumOfRun
                yourRun = sumOfRun
                sumOfRun = 0
                score.textContent = `${sumOfRun}`
                target.textContent = ` | Target : ${targetScore+1}`
                whoBat.textContent = `AI`
                firstSecond.textContent = `Second `
                firstBat.textContent = `AI`
                firstBowl.textContent = `You`
            }else{
                runUpdate.textContent = `Next Ball...`
            }
        }, 3000);
    }else{
        setTimeout(() => {
            yourBox.setAttribute("src", "")
            AIBox.setAttribute("src", "")
            
            if(randomAIrun === 6){
                runUpdate.textContent = `Innings Break...`
                // targetScore = sumOfRun
                AIrun = sumOfRun
                sumOfRun = 0
                score.textContent = `${sumOfRun}`
                // target.textContent = ` | Target : ${targetScore+1}`
                // whoBat.textContent = `AI`
                // firstSecond.textContent = `Second `
                // firstBat.textContent = `AI`
                // firstBowl.textContent = `You`
                if(yourRun === AIrun) runUpdate.textContent = `Match Draw`
                else if(yourRun > AIrun) runUpdate.textContent = `You win`
                else runUpdate.textContent = `AI win`

                btnStatus.style.display = 'inline'
            }else{
                if(sumOfRun >= (targetScore+1)){
                    if(yourRun === AIrun) runUpdate.textContent = `Match Draw`
                    else if(yourRun > AIrun) runUpdate.textContent = `You win`
                    else runUpdate.textContent = `AI win`

                    btnStatus.style.display = 'inline'
                }else{
                    runUpdate.textContent = `Next Ball...`
                }
            }
        }, 3000);
    }

})

// if(yourRun === AIrun) runUpdate.textContent = `Match Draw`
// else if(yourRun > AIrun) runUpdate.textContent = `You win`
// else runUpdate.textContent = `AI win`

btnStatus.addEventListener("click",()=>{
    location.reload()
})





















