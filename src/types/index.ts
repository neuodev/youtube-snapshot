export enum MessageType {
  GetPlaylistInfo = "get-playlist-info",
}

export type GetPlaylistRes = {
  title: string;
  videos: string[];
} | null;
