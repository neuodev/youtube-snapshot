import { GetPlaylistRes, IVideo, MessageType } from "../types";

main();
/**
 * Content script entry point
 */
function main() {
  skipAds();
}

const handlers = {
  [MessageType.GetPlaylistInfo]: getPlaylistInfo,
  [MessageType.TakeScreenshot]: snapshot,
};

chrome.runtime.onMessage.addListener(function (
  request: { type: MessageType },
  _sender,
  sendResponse
) {
  if (!request.type) sendResponse(null);

  const reqHandler = handlers[request.type];
  if (reqHandler) sendResponse(reqHandler());
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
  const videos: IVideo[] = [];

  document
    .querySelectorAll<HTMLDivElement>("#playlist-items")
    .forEach((video) => {
      if (!video) return;
      const thumbnailEl = video.querySelector<HTMLAnchorElement>("#thumbnail");
      const thumbnailImg =
        video.querySelector<HTMLImageElement>("#thumbnail img");
      const videoTitleEl = video.querySelector<HTMLSpanElement>("#video-title");

      videos.push({
        title: videoTitleEl ? videoTitleEl.innerText : null,
        thumbnail: thumbnailImg ? thumbnailImg.src : null,
        time: thumbnailEl ? thumbnailEl.innerText : null,
      });
    });

  const title = document.querySelector<HTMLAnchorElement>(
    "#header-description h3 a"
  );

  console.log({
    videos,
    title: title ? title.innerText : null,
  });

  return {
    videos,
    title: title ? title.innerText : null,
  };
}

function skipAds() {
  setInterval(() => {
    const skipBtn = document.querySelector<HTMLButtonElement>(
      ".ytp-ad-skip-button"
    );

    if (!skipBtn) return;

    skipBtn.click();

    console.log("Add skipped...");
  }, 1_000);
}
