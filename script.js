let output = document.getElementById("output");
let btnValue = document.getElementById("btn-value");
let btn = document.getElementById("btn");
let pi = 3.14
let game = true

function setKillButton() {
    game = false
}

function tryYourLuck() {
    if (game === true) {
        let randomNum = parseFloat((Math.random() * 3 + 1).toFixed(2))
        if (randomNum === pi) {
            output.textContent = "Congratulations you landed on PI!"
            btnValue.textContent = randomNum
            setKillButton();
        } else if (randomNum < pi) {
            output.textContent = "This number is less than PI, try again!"
            btnValue.textContent = `Your number is: ${randomNum}`
        } else {
            output.textContent = "This number is higher than PI, try again!"
            btnValue.textContent = `Your number is: ${randomNum}`
        }
    } else {
        return
    }
}