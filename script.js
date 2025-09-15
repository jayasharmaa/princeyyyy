const cuteArea = document.getElementById('cuteArea');

function singSong() {
    cuteArea.innerHTML = '';

    let audio = new Audio('Standard recording 1.mp3'); 
    audio.play();

    let songLines = [
        "🎶 La la la princeyyyy~ 🎶",
        "🎵 You make my heart go boom boom! 🎵",
        "🎶 Sending you hugs, kisses, and flowers 🌸💖 🎶",
        "🎵 Even from far away, I’m thinking of you 😍 🎵",
        "🎶 Run this whenever you miss me! 💕 🎶"
    ];

    songLines.forEach((line, i) => {
        setTimeout(() => { cuteArea.innerHTML += line + "<br>"; }, i*1500);
    });
}
