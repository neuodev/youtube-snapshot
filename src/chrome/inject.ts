// Todo: Refractor this function again
// Add validation and error handling `alert(...errors)`
// chosoe a better name for the snapshot
// Stop the video
function snapshot() {
  const canvas = document.createElement("canvas");
  const video = document.querySelector<HTMLVideoElement>("video");
  const ctx = canvas.getContext("2d");

  if (!video || !ctx) return;

  canvas.width = video.offsetWidth;
  canvas.height = video.offsetHeight;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  const base64ImageData = canvas.toDataURL("image/jpeg");
  const filename =
    "snap-" +
    canvas.width +
    "x" +
    canvas.height +
    "-" +
    video.currentTime +
    ".jpg";

  const a = document.createElement("a");
  a.download = filename;
  a.href = base64ImageData;
  const img = document.createElement("img");
  img.src = base64ImageData;
  img.alt = filename;
  img.title = "Click to save " + filename;
  window.open()?.document.body.appendChild(a).appendChild(img);
}

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey === true && event.code === "KeyI") snapshot();
});

export {};
