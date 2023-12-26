document.addEventListener("DOMContentLoaded", function() {
  const videoBackground = document.getElementById("video-background");
  const enterButton = document.querySelector(".enter-button");
  const landingPage = document.getElementById("landing-page");

  enterButton.addEventListener("click", function() {
    // Show and play the video
    videoBackground.style.display = "block";
    videoBackground.play();

    // Hide landing page with fade-out effect
    landingPage.style.transition = "opacity 1s";
    landingPage.style.opacity = 0;

    setTimeout(function () {
      landingPage.style.display = "none";
    }, 1000);
  });
});
