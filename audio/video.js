document.addEventListener("DOMContentLoaded", () => {
    const playBtn = document.getElementById("playVideoBtn");
    const nextBtn = document.getElementById("nextBtn");
    const popup = document.getElementById("videoPopup");
    const video = document.getElementById("vid1");

    // Play first video
    playBtn.addEventListener("click", () => {
        popup.classList.add("show");
        video.currentTime = 0;
        video.muted = true;

        setTimeout(() => {
            video.play().catch(err => console.log(err));
        }, 50);
    });

    // After video ends
    video.addEventListener("ended", () => {
        popup.classList.remove("show");

        // Hide the first button
        playBtn.style.display = "none";

        // Show the surprise button
        nextBtn.style.display = "block";
    });

    // When he clicks "Here is your real surprise ❤️"
    nextBtn.addEventListener("click", () => {
        window.location.href = "card.html";
    });
});
