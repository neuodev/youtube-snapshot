import React, { useState } from "react";
import { GetPlaylistRes } from "../../../types";
import styles from "./style.module.css";

const Playlist: React.FC<{ playlist: GetPlaylistRes }> = ({ playlist }) => {
  const [copiedVideoId, setCopiedVideoId] = useState<string | null>(null);
  const [failedCopyVideoId, setFailedCopyVideoId] = useState<string | null>(
    null
  );

  function copyToClipBoard(text: string) {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopiedVideoId(text);
      },
      (err) => {
        console.log(err);
        setFailedCopyVideoId(text);
      }
    );
  }

  if (!playlist) return null;
  return (
    <div className={styles.playlist}>
      <h1 className={styles.title}>{playlist.title}</h1>
      <ul className={styles.list}>
        {playlist.videos.map((video, idx) => (
          <li key={video.title} className={styles.listItem}>
            <p className={styles.listItemText}>
              {idx + 1} {")"} {video.title || "--"}
            </p>
            <p className={styles.time}>{video.time || "--"}</p>
            {video.title !== null && (
              <button
                onClick={() => video.title && copyToClipBoard(video.title)}
                className={styles.copy}
              >
                {copiedVideoId === video.title ? (
                  "Copied!!"
                ) : failedCopyVideoId === video.title ? (
                  "Unable to copy!!"
                ) : (
                  <i className="fa-solid fa-copy"></i>
                )}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
