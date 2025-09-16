const buttons = document.querySelectorAll(".game-btn");
const winDisplay = document.getElementById("win");
const drawDisplay = document.getElementById("draw");
const loseDisplay = document.getElementById("lose");
const resetButton = document.getElementById("restart");
const resultatDisplay = document.getElementById("resultat");

const choix = ["Pierre", "Feuille", "Ciseaux"];
const score = {win: 0, draw: 0, lose: 0};

const konami = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "b", "a"
];

let input = [];

function update() {
    winDisplay.textContent = score["win"] > 1 ? score["win"] + " victoires" : score["win"] + " victoire";
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

        resultatDisplay.textContent = "Vous avez jouer " + choixJoueur + " contre " + choixRobot + " et vous avez " + resultat + " ";
        resultatDisplay.classList.add("scale-up-center")
        setTimeout(() => {
            resultatDisplay.classList.remove("scale-up-center")
        }, 1000);
        score[resultat]++;
        update();
    })

    resetButton.addEventListener('click', () => {
        score.win = 0;
        score.draw = 0;
        score.lose = 0;
        winDisplay.classList.add("roll-out-left")
        drawDisplay.classList.add("roll-out-left")
        loseDisplay.classList.add("roll-out-left")
        setTimeout(() => {
            update();
            winDisplay.classList.remove("roll-out-left")
            drawDisplay.classList.remove("roll-out-left")
            loseDisplay.classList.remove("roll-out-left")
        }, 1000);

    })
})


document.addEventListener("keydown", function (event) {
    input.push(event.key);

    if (input.length > konami.length) {
        input.shift();
    }

    if (input.join(",") === konami.join(",")) {
        const choixRobot = choix[Math.floor(Math.random() * 3)];
        score["win"]++;
        update()
        resultatDisplay.textContent = "Vous avez jouer le Puits contre " + choixRobot + " et vous avez tricher et gangner";
        resultatDisplay.classList.add("scale-up-center")
        setTimeout(() => {
            resultatDisplay.classList.remove("scale-up-center")
        }, 1000);
    }
});