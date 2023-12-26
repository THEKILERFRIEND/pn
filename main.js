document.addEventListener("DOMContentLoaded", function() {
  const videoBackground = document.getElementById("video-background");
  const enterButton = document.querySelector(".enter-button");
  const backgroundMusic = document.getElementById("background-music");
  const landingPage = document.getElementById("landing-page");

  enterButton.addEventListener("click", function() {
    backgroundMusic.play();

    videoBackground.style.display = "block";
    videoBackground.play();

    landingPage.style.transition = "opacity 1s";
    landingPage.style.opacity = 0;

    setTimeout(function () {
      landingPage.style.display = "none";
    }, 1000);
  });
});
