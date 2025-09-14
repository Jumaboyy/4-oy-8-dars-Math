import { initGame } from "./hidden.js";
import { calc, getRandomNumArray, getRandomNumber, readyRandomNumbers } from "./functions.js";
import { mathSings } from "./constants.js";


// easy
let coutPlus = 0;
let coutMinus = 0;
let timeLeft = 10;
let countdown;

function initEasy() {
    clearInterval(countdown);
    timeLeft = 10;

    let a = getRandomNumber(9);
    let b = getRandomNumber(9);
    const signIndex = getRandomNumber(mathSings.length - 1);
    const sign = mathSings[signIndex];

    if (sign == '/') {
        while (a < b || a % b !== 0) {
            a = getRandomNumber(9);
            b = getRandomNumber(9);
        }
    }

    const result = calc(`${a}${sign}${b}`);
    const array = getRandomNumArray(9, result);
    const readyArray = readyRandomNumbers(array, result);

    document.querySelector(".misol").textContent = `${a} ${sign} ${b}`;
    const gridItems = document.querySelectorAll(".easy-grid div");

    gridItems.forEach((el, i) => {
        el.textContent = readyArray[i];
        el.onclick = () => {
            if (Number(el.textContent) === result) {
                coutPlus++;
                document.querySelector(".cout-plus").textContent = coutPlus;
            } else {
                coutMinus++;
                document.querySelector(".cout-minus").textContent = coutMinus;
            }
            checkGameStatus("easy", coutPlus, coutMinus); 
            initEasy(); 
        };
    });

    document.querySelector(".easy-time").textContent = timeLeft;

    countdown = setInterval(() => {
        timeLeft--;
        document.querySelector(".easy-time").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(countdown);
            initEasy(); 
        }
    }, 1000);
}

// normal
let coutPlusNormal = 0;
let coutMinusNormal = 0;
let timeLeftNormal = 10;
let countdownNormal;

function initNormal() {
    clearInterval(countdownNormal);
    timeLeftNormal = 10;

    let a = getRandomNumber(20);
    let b = getRandomNumber(20);
    const signIndex = getRandomNumber(mathSings.length - 1);
    const sign = mathSings[signIndex];

    if (sign == '/') {
        while (a < b || a % b !== 0) {
            a = getRandomNumber(20);
            b = getRandomNumber(20);
        }
    }

    const result = calc(`${a}${sign}${b}`);
    const array = getRandomNumArray(16, result);
    const readyArray = readyRandomNumbers(array, result);

    document.querySelector(".normal .misol").textContent = `${a} ${sign} ${b}`;
    const gridItems = document.querySelectorAll(".normal-grid div");

    gridItems.forEach((el, i) => {
        el.textContent = readyArray[i];
        el.onclick = () => {
            if (Number(el.textContent) === result) {
                coutPlusNormal++;
                document.querySelector(".normal .cout-plus").textContent = coutPlusNormal;
            } else {
                coutMinusNormal++;
                document.querySelector(".normal .cout-minus").textContent = coutMinusNormal;
            }
            checkGameStatus("normal", coutPlusNormal, coutMinusNormal);
            initNormal();
        };
    });

    document.querySelector(".normal .easy-time").textContent = timeLeftNormal;

    countdownNormal = setInterval(() => {
        timeLeftNormal--;
        document.querySelector(".normal .easy-time").textContent = timeLeftNormal;
        if (timeLeftNormal <= 0) {
            clearInterval(countdownNormal);
            initNormal();
        }
    }, 1000);
}

// hard


let coutPlusHard = 0;
let coutMinusHard = 0;
let timeLeftHard = 15;
let countdownHard;

function initHard() {
    clearInterval(countdownHard);
    timeLeftHard = 15;

    let a = getRandomNumber(50);
    let b = getRandomNumber(50);
    let c = getRandomNumber(20);

    const signIndex1 = getRandomNumber(mathSings.length - 1);
    const signIndex2 = getRandomNumber(mathSings.length - 1);
    const sign1 = mathSings[signIndex1];
    const sign2 = mathSings[signIndex2];

    // 1️⃣ birinchi amal bo‘lish sharti
    if (sign1 === '/') {
        while (a <= b || a % b !== 0) {
            a = getRandomNumber(50);
            b = getRandomNumber(50);
        }
    }

    // 2️⃣ ikkinchi amal bo‘lish sharti
    if (sign2 === '/') {
        while (b <= c || b % c !== 0 || c >= (a / b)) {
            b = getRandomNumber(50);
            c = getRandomNumber(20);
        }
    }

    const expression = `${a}${sign1}${b}${sign2}${c}`;
    const result = calc(expression);

    const array = getRandomNumArray(20, result);
    const readyArray = readyRandomNumbers(array, result);

    document.querySelector(".hard .misol").textContent = `(${a} ${sign1} ${b}) ${sign2} ${c}`;
    const gridItems = document.querySelectorAll(".hard-grid div");

    gridItems.forEach((el, i) => {
        el.textContent = readyArray[i];
        el.onclick = () => {
            if (Number(el.textContent) === result) {
                coutPlusHard++;
                document.querySelector(".hard .cout-plus").textContent = coutPlusHard;
            } else {
                coutMinusHard++;
                document.querySelector(".hard .cout-minus").textContent = coutMinusHard;
            }
            checkGameStatus("hard", coutPlusHard, coutMinusHard);
            initHard();
        };
    });

    document.querySelector(".hard .easy-time").textContent = timeLeftHard;

    countdownHard = setInterval(() => {
        timeLeftHard--;
        document.querySelector(".hard .easy-time").textContent = timeLeftHard;
        if (timeLeftHard <= 0) {
            clearInterval(countdownHard);
            initHard();
        }
    }, 1000);
}



function checkGameStatus(mode, plus, minus) {
    if (plus < minus) {
        window.location.href = `mode/${mode}-lose.html`; 
    } else if (plus === 10) {
        window.location.href = `mode/${mode}-win.html`;  
    }
}



initGame();
initEasy();
initNormal();
initHard();
