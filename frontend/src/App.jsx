import { useState } from "react";
import { startStory, choose } from "./api/mockStoryApi";
import ThemeForm from "./components/ThemeForm";
import StoryView from "./components/StoryView";

function App() {
  const [theme, setTheme] = useState("");
  const [storyId, setStoryId] = useState(null);
  const [story, setStory] = useState("");
  const [choices, setChoices] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleStart() {
    setError("");
    setIsLoading(true);

    try {
      const res = await startStory(theme);
      setStoryId(res.story_id);
      setStory(res.paragraph);
      setChoices(res.choices);
    } catch (e) {
      setError(e.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleChoice(choiceText) {
    setError("");
    setIsLoading(true);

    try {
      const res = await choose(storyId, choiceText);
      setStory(res.paragraph);
      setChoices(res.choices);
    } catch (e) {
      setError(e.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleRestart() {
    setTheme("");
    setStoryId(null);
    setStory("");
    setChoices([]);
    setError("");
    setIsLoading(false);
  }

  const hasStory = story !== "";

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "Arial",
        maxWidth: 700,
        margin: "0 auto",
      }}
    >
      <h1 style={{ marginBottom: "0.25rem" }}>AI Adventure Game</h1>
      <p style={{ marginTop: 0, opacity: 0.8 }}>
        Enter a theme. The game generates a story and choices.
      </p>

      {!hasStory && (
        <ThemeForm
          theme={theme}
          setTheme={setTheme}
          isLoading={isLoading}
          onStart={handleStart}
        />
      )}

      {error && (
        <div
          style={{
            marginTop: 16,
            padding: 12,
            border: "1px solid #ddd",
            borderRadius: 8,
            background: "#fff7f7",
          }}
        >
          <strong>Error:</strong> {error}
        </div>
      )}

      {hasStory && (
        <StoryView
          story={story}
          choices={choices}
          isLoading={isLoading}
          onChoose={handleChoice}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;
