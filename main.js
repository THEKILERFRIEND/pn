document.addEventListener("DOMContentLoaded", function() {
  const videoBackground = document.getElementById("video-background");
  const enterButton = document.querySelector(".enter-button");
  const backgroundMusic = document.getElementById("background-music");
  const landingPage = document.getElementById("landing-page");

  enterButton.addEventListener("click", function() {
    // Play background music
    backgroundMusic.play();

    // Display and play the video background
    videoBackground.style.display = "block";
    videoBackground.play();

    // Set disableRemotePlayback to prevent video pause on tab switch
    videoBackground.setAttribute("disableRemotePlayback", "true");

    // Hide landing page with fade-out effect
    landingPage.style.transition = "opacity 1s";
    landingPage.style.opacity = 0;

    setTimeout(function () {
      landingPage.style.display = "none";
    }, 1000);
  });
});
