export enum MessageType {
  GetPlaylistInfo = "get-playlist-info",
}

export interface IVideo {
  title: string | null;
  thumbnail: string | null;
  time: string | null;
}

export type GetPlaylistRes = {
  title: string | null;
  videos: IVideo[];
};
