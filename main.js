document.addEventListener("DOMContentLoaded", function() {
  const videoBackground = document.getElementById("video-background");
  const enterButton = document.querySelector(".enter-button");
  const landingPage = document.getElementById("landing-page");

  
  landingPage.addEventListener("click", function() {
    // Define an array of video URLs
    const videoSources = [
      "https://cdn.gilcdn.com/ContentMediaGenericFiles/26c2be8a4acbb30ccdf3bd018cc3c9a2-Full.mp4?w=1280&h=720&ia=1",
      "https://cdn.gilcdn.com/ContentMediaGenericFiles/c7d705333162124bb7cb3c332a8b66c4-Full.mp4?w=1920&h=1080&ia=1",
	"https://cdn.gilcdn.com/ContentMediaGenericFiles/55bef695aa0c7b20954f72ded2a6bf0e-Full.mp4?w=1920&h=1080&ia=1"
    ];

    // Randomly select a video source from the array
    const randomIndex = Math.floor(Math.random() * videoSources.length);
    const selectedVideoSource = videoSources[randomIndex];

    // Set the selected video source
    videoBackground.src = selectedVideoSource;

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
