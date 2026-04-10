const visitDisplay = document.querySelector("#visit-counter");
let visitCount = Number(window.localStorage.getItem("contactVisit-ls")) || 0;

if (visitCount !== 0) {
    visitDisplay.textContent = `You've visited this contact page ${visitCount} times.`;
} else {
    visitDisplay.textContent = "This is your first time contacting us!";
}

visitCount++;
localStorage.setItem("contactVisit-ls", visitCount);