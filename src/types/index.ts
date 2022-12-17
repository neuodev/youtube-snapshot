export enum MessageType {
  GetPlaylistInfo = "get-playlist-info",
  TakeScreenshot = "take-screenshot",
}

export interface IVideo {
  title: string | null;
  thumbnail: string | null;
  time: string | null;
}

export type GetPlaylistReq = {
  type: MessageType.GetPlaylistInfo;
};

export type GetPlaylistRes = {
  title: string | null;
  videos: IVideo[];
};
