const yesBtn = document.getElementById("yes");
const video = document.querySelector(".video-background video");
const noBtn = document.getElementById("no");
const mainText = document.getElementById("mainText");
const subText = document.getElementById("subText");

let yesScale = 1;
let noClicks = 0;

const noMessages = [
    { text: "Are you really going to say no?", emoji: "https://em-content.zobj.net/source/apple/391/pleading-face_1f97a.png" },
    { text: "Come on, think again!", emoji: "https://em-content.zobj.net/source/apple/391/crying-face_1f622.png" },
    { text: "You know you want to say yes 💔", emoji: "https://em-content.zobj.net/source/apple/391/broken-heart_1f494.png" },
    { text: "I’ll be super sad if you say no 😭", emoji: "https://em-content.zobj.net/source/apple/391/loudly-crying-face_1f62d.png" },
    { text: "Last chance to make me happy 🥹", emoji: "https://em-content.zobj.net/source/apple/391/face-holding-back-tears_1f979.png" }
];

noBtn.addEventListener("click", () => {
    if (noClicks < noMessages.length) {
        const message = noMessages[noClicks];
        mainText.innerHTML = `${message.text} <br><img src="${message.emoji}" width="50">`;

        yesScale += 0.25;
        yesBtn.style.transform = `scale(${yesScale})`;
        noBtn.style.transform = `scale(${1 - noClicks * 0.1})`;

        noClicks++;
    } else {
        noBtn.style.display = "none";
        mainText.innerHTML = "Alright... you leave me no choice 😔";
    }
});

yesBtn.addEventListener("click", () => {
    mainText.innerHTML = `YES! 💖 <br>
        <img src="https://em-content.zobj.net/source/apple/391/smiling-face-with-hearts_1f970.png" width="70">
    `;
    subText.innerHTML = "You just made me the happiest guy alive 💘";

    yesBtn.style.transform = "scale(1.4)";
    noBtn.style.display = "none";

    video.style.display = "block";

    setTimeout(() => {
        video.style.display = "none";
    }, 9000);
});
