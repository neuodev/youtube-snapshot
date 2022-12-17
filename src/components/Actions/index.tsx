import React, { useState } from "react";
import { GET_PLAYLIST_RESPONSE } from "../../tests/mockData";
import { GetPlaylistRes, MessageType } from "../../types";
import Playlist from "./Playlist";
import styles from "./style.module.css";

const Actions = () => {
  const [playlist, setPlaylist] = useState<GetPlaylistRes>(
    GET_PLAYLIST_RESPONSE
  );
  const getPlaylistInfo = async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
      lastFocusedWindow: true,
    });

    if (!tab || !tab.id) return;

    const response = (await chrome.tabs.sendMessage(tab.id, {
      type: MessageType.GetPlaylistInfo,
    })) as GetPlaylistRes;

    setPlaylist(response);
  };

  return (
    <div id={styles.playlist}>
      <div className={styles.actions}>
        <button className={styles.button}>Take Screenshot</button>
        <button className={styles.button} onClick={getPlaylistInfo}>
          Generate Playlist Titles
        </button>
      </div>

      <Playlist playlist={playlist} />
    </div>
  );
};

export default Actions;
