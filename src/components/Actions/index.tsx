import React, { useState } from "react";
import { sendMessage } from "../../chrome/message";
import { GetPlaylistReq, GetPlaylistRes, MessageType } from "../../types";
import Playlist from "./Playlist";
import styles from "./style.module.css";

const Actions = () => {
  const [playlist, setPlaylist] = useState<GetPlaylistRes | null>(null);
  const getPlaylistInfo = async () => {
    const response = await sendMessage<GetPlaylistReq, GetPlaylistRes>({
      type: MessageType.GetPlaylistInfo,
    });

    if (!response) return;

    setPlaylist(response);
  };

  const takeScreenshot = async () => {
    await sendMessage({ type: MessageType.TakeScreenshot });
  };

  return (
    <div id={styles.playlist}>
      <div className={styles.actions}>
        <button className={styles.button} onClick={takeScreenshot}>
          Take Screenshot
        </button>
        <button className={styles.button} onClick={getPlaylistInfo}>
          Generate Playlist Titles
        </button>
      </div>

      {playlist && <Playlist playlist={playlist} />}
    </div>
  );
};

export default Actions;
