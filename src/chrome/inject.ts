import { GetPlaylistRes, MessageType } from "../types";

chrome.runtime.onMessage.addListener(function (request, _sender, sendResponse) {
  if (request.type === MessageType.GetPlaylistInfo)
    sendResponse(getPlaylistInfo());
});

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey === true && event.code === "KeyI") snapshot();
});

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
    Math.floor(canvas.width) +
    "x" +
    Math.floor(canvas.height) +
    ".jpg";

  const a = document.createElement("a");
  a.download = filename;
  a.href = base64ImageData;
  const img = document.createElement("img");
  img.src = base64ImageData;
  img.alt = filename;
  img.title = "Click to save " + filename;

  const tab = window.open();
  if (!tab) return;
  const body = tab.document.body;
  body.appendChild(a).appendChild(img);
  // Todo: Add download button
}

function getPlaylistInfo(): GetPlaylistRes {
  const videos: string[] = [];
  document
    .querySelectorAll<HTMLSpanElement>(
      "#video-title.ytd-playlist-panel-video-renderer"
    )
    .forEach((video) => videos.push(video.innerText));

  const title = document.querySelector("#header-description h3 a");

  if (!title || videos.length === 0) return null;
  console.log({
    videos,
    title: title.innerHTML,
  });
  return {
    videos,
    title: title.innerHTML,
  };
}
