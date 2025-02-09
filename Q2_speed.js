let button = document.createElement("button");


button.addEventListener("click", () => {
    let video = document.querySelector("video");
    if (video) {
        video.playbackRate = 10.0;
    } else {
        alert("No video found!");
    }
});
