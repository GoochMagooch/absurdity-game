let randomNum = Math.random() * 5 + 1;
let absurd = document.querySelector(".absurd");
let lower = document.querySelector(".lower");
let higher = document.querySelector(".higher");
let btnValue = document.querySelector(".btn-value");
let btn = document.querySelector(".btn");

/*
function setKillButton() {
    btn.disabled = true;
}

function resetButton() {
    let resetParas = document.querySelectorAll(".resultParas");
    for (let reset of resetParas) {
        reset.textContent = "";
    }
}

function resetTime() {
    document.body.append(resetButton)
    btn.addEventListener("click", resetButton)
}
*/

function tryYourLuck() {
    
    if (randomNum === 3.141592653589793) {
        absurd.textContent = "Congratulations you landed on PI, how absurd!"
        setKillButton();
    } else if (randomNum < 3.141592653589793) {
        lower.textContent = "This number is less than PI, try again!";
        resetTime();
    } else {
        higher.textContent = "This number is higher than PI, try again!"
        btnValue.textContent = `Your number is: ${randomNum}`;
        resetTime();
    }
}

btn.addEventListener("click", tryYourLuck);
btn.addEventListener('click', function handleClick() {
    tryYourLuck();
  });

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