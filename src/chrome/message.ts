import { MessageType } from "../types";

export async function sendMessage<T extends { type: MessageType }, R>(
  msg: T
): Promise<R | null> {
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });

  if (!tab || !tab.id) return null;

  const response = await chrome.tabs.sendMessage(tab.id, msg);
  return response as R;
}
