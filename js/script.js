const buttons = document.querySelectorAll(".game-btn");
const winDisplay = document.getElementById("win");
const drawDisplay = document.getElementById("draw");
const loseDisplay = document.getElementById("lose");
const resetButton = document.getElementById("restart");

const choix = ["Pierre", "Feuille", "Ciseaux"];
const score = {win: 0, draw: 0, lose: 0};

function update() {
    winDisplay.textContent = score["win"] > 1 ? score["win"] +  " victoires" : score["win"] + " victoire";
    drawDisplay.textContent = score["draw"] > 1 ? score["draw"] + " égalités" : score["draw"] + " égalité";
    loseDisplay.textContent = score["lose"] > 1 ? score["lose"] + " défaites" : score["lose"] + " défaite";
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const choixJoueur = button.textContent;
        const choixRobot = choix[Math.floor(Math.random() * 3)];

        let resultat;

        if (choixJoueur === choixRobot) {
            resultat = "draw";
        } else if (choixJoueur === "Pierre" && choixRobot === "Ciseaux" ||
            choixJoueur === "Feuille" && choixRobot === "Pierre" ||
            choixJoueur === "Ciseaux" && choixRobot === "Feuille") {
            resultat = "win";
        } else {
            resultat = "lose";
        }

        score[resultat]++;
        update();
    })

    resetButton.addEventListener('click', () => {
        score.win = 0;
        score.draw = 0;
        score.lose = 0;
        update();
    })
})


