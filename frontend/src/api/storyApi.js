import { startStory as mockStart, choose as mockChoose } from "./mockStoryApi";

const USE_MOCK = (import.meta.env.VITE_USE_MOCK ?? "true") === "true";
const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000";

async function postJson(url, body) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    let msg = `Request failed (${res.status})`;
    try {
      const data = await res.json();
      msg = data?.detail || data?.message || msg;
    } catch {}
    throw new Error(msg);
  }

  return res.json();
}

export async function startStory(theme) {
  if (USE_MOCK) return mockStart(theme);
  return postJson(`${API_BASE}/api/story/start`, { theme });
}

export async function choose(storyId, choice) {
  if (USE_MOCK) return mockChoose(storyId, choice);
  return postJson(`${API_BASE}/api/story/choose`, { story_id: storyId, choice });
}
