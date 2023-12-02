let randomNum = Math.random() * 5 + 1;

const absurd = document.querySelector(".absurd");
const lowOrHi = document.querySelector(".lowOrHi");

const btn = document.querySelector(".btn");
const btnValue = document.querySelector(".btn-value");

function tryYourLuck() {

    btnValue.textContent = `Your number is: ${randomNum}`;
    
    if (randomNum === 3.141592653589793) {
        absurd.textContent = "Congratulations you landed on PI, how absurd!"
        setKillButton();
    } else if (randomNum < 3.141592653589793) {
        lowOrHi.textContent = "This number is less than PI, try again!";
        resetTime();
    } else {
        lowOrHi.textContent = "This number is higher than PI, try again!"
        resetTime();
    }

}

btn.addEventListener("click", tryYourLuck);

function setKillButton() {
    btn.disabled = true;
}

function resetTime() {
    document.body.append(resetButton)
    btn.addEventListener("click", resetButton)
}

function resetButton() {
    const resetParas = document.querySelectorAll(".resultParas");
    for (const reset of resetParas) {
        reset.textContent = "";
    }
}

/*function tryYourLuckTwo() {

    btnValue.textContent = `Your number is: ${randomNum}`;
    
    if (randomNum === 3.141592653589793) {
        absurd.textContent = "Congratulations you landed on PI, how absurd!"
        setKillButton();
    } else if (randomNum < 3.141592653589793) {
        lowOrHi.textContent = "This number is less than PI, try again!";
        resetTime();
    } else {
        lowOrHi.textContent = "This number is higher than PI, try again!"
        resetTime();
    }

}

tryYourLuckTwo();*/