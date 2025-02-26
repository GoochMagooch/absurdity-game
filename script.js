let absurd = document.getElementById("absurd");
let output = document.getElementById("output");
let btnValue = document.getElementById("btn-value");
let btn = document.getElementById("btn");
let game = true

function setKillButton() {
    game = false
}

function tryYourLuck() {
    if (game === true) {
        let randomNum = Math.random() * 4 + 1;
        if (randomNum === 3.141592653589793) {
            absurd.textContent = "Congratulations you landed on PI, how absurd!"
            btnValue.textContent = randomNum
            setKillButton();
        } else if (randomNum < 3.141592653589793) {
            output.textContent = "This number is less than PI, try again!";
            btnValue.textContent = randomNum
        } else {
            output.textContent = "This number is higher than PI, try again!"
            btnValue.textContent = `Your number is: ${randomNum}`
        }
    } else {
        return
    }
}