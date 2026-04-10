const urlParams = new URLSearchParams(window.location.search);

const firstName = urlParams.get("fname");
const email = urlParams.get("email");
const subject = urlParams.get("subject");
const message = urlParams.get("message");

if (firstName) {
    document.querySelector("#user-name").textContent = firstName;
    document.querySelector("#user-email").textContent = email;
    document.querySelector("#user-subject").textContent = subject;
    document.querySelector("#user-message").textContent = `"${message}"`;
} else {
    document.querySelector(".message-card").innerHTML = "<h2>No message data found.</h2><a href='contact.html'>Go to Contact Page</a>";
}