const randomNumber = Math.floor(Math.random() * 10) + 1;
const guessInput = document.getElementById("guess");
const checkButton = document.getElementById("check");
const message = document.getElementById("message");

checkButton.addEventListener("click", () => {
    const userGuess = parseInt(guessInput.value);
    if (userGuess === randomNumber) {
        message.textContent = "Bravo, vous avez deviné le bon nombre !";
        message.style.color = "green";
    } else {
        message.textContent = "Désolé, essayez encore.";
        message.style.color = "red";
    }
});
