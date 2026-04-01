const visitFeedback = document.querySelector('#timeBetween');
const lastVisit = localStorage.getItem("lastVisitDate");
const now = Date.now();

if (!lastVisit) {
    visitFeedback.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const msecsPerDay = 86400000;
    const daysSince = Math.floor((now - lastVisit) / msecsPerDay);

    if (daysSince < 1) {
        visitFeedback.textContent = "Back so soon! Awesome!";
    } else {
        const dayWord = daysSince === 1 ? "day" : "days";
        visitFeedback.textContent = `You last visited ${daysSince} ${dayWord} ago.`;
    }
}
localStorage.setItem("lastVisitDate", now);