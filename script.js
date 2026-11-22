//your JS code here. If required.
const sounds = [
    "applause",
    "boo",
    "gasp",
    "tada",
    "victory",
    "wrong"
];

const buttons = document.getElementById("buttons");

sounds.forEach(sound => {
    const button = document.createElement("button");

    button.classList.add("btn");
    button.innerText = sound;

    button.addEventListener("click", () => {
        stopSounds();

        const audio = document.createElement("audio");
        audio.src = `sounds/${sound}.mp3`;
        audio.play();
    });

    buttons.appendChild(button);
});

const stopButton = document.createElement("button");

stopButton.classList.add("btn", "stop");
stopButton.innerText = "Stop";

stopButton.addEventListener("click", stopSounds);

buttons.appendChild(stopButton);

function stopSounds() {
    const audios = document.querySelectorAll("audio");

    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}