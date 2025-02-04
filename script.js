const messages = [
    "Are you sure?",
    "What if baby mo lumambing sayo??",
    "talaga?",
    "weeeeee?...",
    "Just think about it!",
    "If you say YES, Sama ka mamaya hehe",
    "SORRY NA BABYYYY HEHE...",
    "Kiss po kitaaa",
    "Ihhhhhhh...",
    "Nag attempt pa talaga sa NOOO tskk ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}