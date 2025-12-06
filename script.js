document.getElementById("openBtn").addEventListener("click", function () {
    const card = document.getElementById("card");
    const container = document.querySelector(".card-container");
    const music = document.getElementById("bgMusic");
    const burst = document.getElementById("burstHearts");

    // Card animation
    card.classList.add("open-card");

    // Glow effect
    container.classList.add("glow");

    // Heart burst
    for (let i = 0; i < 12; i++) {
        let heart = document.createElement("span");
        heart.innerHTML = "💖";
        
        heart.style.setProperty("--x", `${(Math.random() - 0.5) * 200}px`);
        heart.style.setProperty("--y", `${(Math.random() - 0.5) * 200}px`);
        
        burst.appendChild(heart);

        setTimeout(() => heart.remove(), 1000);
    }

    // Play music
    music.volume = 0.5;
    music.play().catch(() => {
        console.log("Autoplay blocked.");
    });
});
