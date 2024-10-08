let secretNumber = generateSecretNumber();
let attempts = 0;

function generateSecretNumber() {
    let digits = [];
    while (digits.length < 4) {
        let digit = Math.floor(Math.random() * 10);
        if (!digits.includes(digit)) {
            digits.push(digit);
        }
    }
    return digits.join('');
}

function checkGuess() {
    const guess = document.getElementById('guess').value;
    if (!isValidGuess(guess)) {
        alert("Lütfen geçerli bir 4 basamaklı sayı girin (farklı rakamlar).");
        return;
    }

    attempts++;
    let feedback = getFeedback(guess);
    document.getElementById('result').innerHTML += `<p>${guess}: ${feedback}</p>`;

    if (feedback === "4A") {
        alert(`Tebrikler! Sayıyı ${attempts} tahminde buldunuz: ${secretNumber}`);
        resetGame();
    }
}

function isValidGuess(guess) {
    return /^\d{4}$/.test(guess) && new Set(guess).size === 4;
}

function getFeedback(guess) {
    let a = 0, b = 0;
    for (let i = 0; i < 4; i++) {
        if (guess[i] === secretNumber[i]) {
            a++;
        } else if (secretNumber.includes(guess[i])) {
            b++;
        }
    }
    return `${a}A ${b}B`;
}

function resetGame() {
    secretNumber = generateSecretNumber();
    attempts = 0;
    document.getElementById('result').innerHTML = '';
    document.getElementById('guess').value = '';
}
