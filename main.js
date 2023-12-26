document.addEventListener("DOMContentLoaded", function() {
  const videoBackground = document.getElementById("video-background");
  const enterButton = document.querySelector(".enter-button");
  const backgroundMusic = document.getElementById("background-music");
  const landingPage = document.getElementById("landing-page");

  enterButton.addEventListener("click", function() {
    // Play background music
    backgroundMusic.play();

    // Hide landing page with fade-out effect
    landingPage.style.transition = "opacity 1s";
    landingPage.style.opacity = 0;

    setTimeout(function () {
      landingPage.style.display = "none";
    }, 1000);

    // Show and play the video
    videoBackground.style.display = "block";
    videoBackground.volume = 0.36; // Set the volume to 36% (adjust as needed)
    videoBackground.play();
  });
});
