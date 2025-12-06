document.getElementById("openBtn").addEventListener("click", function () {
    const cover = document.getElementById("coverCard");
    const inside = document.getElementById("insideCard");
    const music = document.getElementById("bgMusic");

    // Card animation
    cover.classList.add("hidden");
    inside.classList.remove("hidden");

    // Play music
    music.volume = 0.5;
    music.play().catch(err => {
        console.log("Autoplay blocked. User will tap to enable sound.");
    });
});
