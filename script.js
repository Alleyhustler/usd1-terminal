const responses = [
    "Nah chill bro.",
    "Just chilling.",
    "Who is chilled rn?",
    "Best chill night.",
    "Why so serious? Chill!",
    "Catch the vibes, my dude.",
    "All about that chill life.",
    "Just vibing over here.",
    "Relax, it's all good.",
    "Take it easy, bro!"
];

const userInput = document.getElementById("userInput");
const output = document.getElementById("output");

userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && userInput.value.trim() !== "") {
        const userText = userInput.value;
        appendOutput(`> ${userText}`);
        userInput.value = "";

        setTimeout(() => {
            const aiResponse = responses[Math.floor(Math.random() * responses.length)];
            appendOutput(aiResponse);
        }, 1000);
    }
});

function appendOutput(text) {
    const newLine = document.createElement("div");
    newLine.textContent = text;
    output.appendChild(newLine);
    output.scrollTop = output.scrollHeight;
}
