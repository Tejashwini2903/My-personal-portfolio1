document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form")?.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Message Sent Successfully!");
    });
});