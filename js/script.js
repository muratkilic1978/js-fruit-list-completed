// ------------------------------------------------------------
// STEP 0: Forbind JavaScript og HTML
// ------------------------------------------------------------
"use strict";

// ------------------------------------------------------------
// STEP 1: Opret et array med frugtobjekter
// ------------------------------------------------------------
const fruits = [
    { name: "Apple", emoji: "🍎", color: "Red" },
    { name: "Banana", emoji: "🍌", color: "Yellow" },
    { name: "Orange", emoji: "🍊", color: "Orange" },
    { name: "Strawberry", emoji: "🍓", color: "Red" },
    { name: "Kiwi", emoji: "🥝", color: "Green" }
];

// ------------------------------------------------------------
// STEP 2: Hent elementer fra HTML
// ------------------------------------------------------------
const fruitListElement = document.getElementById("fruit-list");
const toggleButtonElement = document.getElementById("toggle-fruits");
const statusMessageElement = document.getElementById("status-message");

// ------------------------------------------------------------
// STEP 3: Byg frugtlisten med forEach og template literals
// ------------------------------------------------------------
fruits.forEach(function (fruit) {
    fruitListElement.innerHTML += `
        <li class="fruit-item">
            ${fruit.emoji} ${fruit.name} - ${fruit.color}
        </li>
    `;
});

// ------------------------------------------------------------
// STEP 4: Funktion til at vise og skjule listen
// ------------------------------------------------------------
// Udleveret på forhånd i starterfilen.
function clearStatusMessage() {
    statusMessageElement.textContent = "";
}

// Funktionsrammen og classList.toggle var udleveret på forhånd.
function toggleFruitList() {
    const isVisible = fruitListElement.classList.toggle("show");

    // Skrevet af den studerende.
    if (isVisible) {
        toggleButtonElement.textContent = "Close fruit list";
        statusMessageElement.textContent = "Fruit list is open";
    } else {
        toggleButtonElement.textContent = "Show fruit list";
        statusMessageElement.textContent = "Fruit list is closed";
    }

    // Udleveret på forhånd i starterfilen.
    setTimeout(clearStatusMessage, 2000);
}

// ------------------------------------------------------------
// STEP 5: Kobl knappen til funktionen
// ------------------------------------------------------------
toggleButtonElement.addEventListener("click", toggleFruitList);

// ------------------------------------------------------------
// SLUTTJEK
// ------------------------------------------------------------
// ☐ index.html linker til js/script.js med defer
// ☐ fruits indeholder fem objekter
// ☐ Alle tre DOM-elementer er hentet
// ☐ forEach opbygger fem <li>-elementer med template literals
// ☐ Listen er skjult ved start og kan åbnes/lukkes
// ☐ Knappens tekst og statusbesked skifter korrekt
// ☐ Den udleverede timer fjerner statusbeskeden efter 2 sekunder
// ☐ Ingen røde fejl i Console, når opgaven er færdig
// ☐ Dit arbejde er committet og pushet til GitHub
// 💬 Forklar: array → forEach → innerHTML → click → classList
