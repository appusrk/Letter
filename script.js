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
document.addEventListener("DOMContentLoaded", () => {
    const playBtn = document.getElementById("playVideoBtn");
    const popup = document.getElementById("videoPopup");
    const video = document.getElementById("vid1");

    playBtn.addEventListener("click", () => {
        popup.classList.add("show");   // Show popup
        video.currentTime = 0;
        video.muted = true;            // Critical for mobile autoplay

        // Small delay to ensure video is ready to play
        setTimeout(() => {
            video.play().catch(err => console.log("Video play error:", err));
        }, 50);
    });

    // When video ends, hide popup and redirect
    video.addEventListener("ended", () => {
        popup.classList.remove("show");
        window.location.href = "card.html"; // Change this to your card page
    });

    // Optional: click outside video closes popup
    popup.addEventListener("click", (e) => {
        if(e.target === popup){
            video.pause();
            popup.classList.remove("show");
        }
    });
});


