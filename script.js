const openBtn = document.getElementById("openBtn");
const card = document.getElementById("card");
const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {
    card.classList.add("open-card"); // Flip animation
    music.volume = 0.5;
    music.play().catch(err => console.log("Autoplay blocked."));
});
