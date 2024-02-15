document.addEventListener("DOMContentLoaded", function() {
  const videoBackground = document.getElementById("video-background");
  const enterButton = document.querySelector(".enter-button");
  const landingPage = document.getElementById("landing-page");

  
  landingPage.addEventListener("click", function() {
    // Define an array of video URLs
    const videoSources = [
      "https://cdn.discordapp.com/attachments/1187374876516958208/1189253728079978566/kakashi.mp4?ex=659d7dd8&is=658b08d8&hm=3369a0057e3e80e7baa98f794a7aa1a22b52ea8fca35c2cc5f1cb2b9ec1e3166&",
      "https://cdn.discordapp.com/attachments/1187374876516958208/1189247803529121812/edit2.mp4?ex=659d7853&is=658b0353&hm=424e79d913e1a13ee32df870a84c0b3e50fa6c842e50f999fb6b5da5acb4952f&",
      "https://cdn.discordapp.com/attachments/1187374876516958208/1189254143324455042/bouto.mp4?ex=659d7e3b&is=658b093b&hm=5c44562d22da49101223699ffaf44046e15760776fabdd851c875dba81330635&",
	"https://cdn.discordapp.com/attachments/1187374876516958208/1189253039861792879/mahito.mp4?ex=659d7d33&is=658b0833&hm=74c5dbbbc4c3438f03897c89e7d08897e96fe0c56058b2e0b5ea881220841804&",
	"https://cdn.discordapp.com/attachments/1189209130930548847/1200505441831096380/20min.mp4?ex=65c66cd1&is=65b3f7d1&hm=a7db8e83d952d6b6df1fa3a1602d951a7e995e6a460a28b59439fb906cb04a01&",
	    "https://cdn.discordapp.com/attachments/1204391339672735784/1206967319998373888/y2mate.com_-_Jotaro_Dio_Emptiness_EditAMV_1080p.mp4?ex=65ddeee9&is=65cb79e9&hm=b99746538ce88d55411e4114731cef0d6a1d6d386a54cab27974f9169d6223b3&"
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
