import { useEffect, useRef, useState } from "react";
import { startStory, choose } from "./api/storyApi";
import ThemeForm from "./components/ThemeForm";
import StoryView from "./components/StoryView";
import AdventureLog from "./components/AdventureLog";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("");
  const [storyId, setStoryId] = useState(null);
  const [story, setStory] = useState("");
  const [choices, setChoices] = useState([]);

  const [turn, setTurn] = useState(0);
  const [logEntries, setLogEntries] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const endRef = useRef(null);
  const hasStory = story !== "";

  useEffect(() => {
    if (hasStory) endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [story, hasStory]);

  async function handleStart() {
    setError("");
    setIsLoading(true);

    try {
      const res = await startStory(theme);

      setStoryId(res.story_id);
      setStory(res.paragraph);
      setChoices(res.choices);

      setTurn(1);
      setLogEntries([{ paragraph: res.paragraph, choice: null }]);
    } catch (e) {
      setError(e?.message || "Something went wrong.");
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

      setTurn((t) => t + 1);
      setLogEntries((prev) => [
        ...prev,
        { paragraph: res.paragraph, choice: choiceText },
      ]);
    } catch (e) {
      setError(e?.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleRestart() {
    setTheme("");
    setStoryId(null);
    setStory("");
    setChoices([]);
    setTurn(0);
    setError("");
    setIsLoading(false);
    setLogEntries([]);
  }

  function handleClearLog() {
    setLogEntries([]);
  }

  return (
    <div className="page">
      <div className="card">
        <header className="header">
          <div>
            <h1 className="title">AI Adventure Game</h1>
            <p className="subtitle">
              Enter a theme. The game generates a story and choices.
            </p>
          </div>

          {hasStory && (
            <div className="meta">
              <div className="pill">
                Theme: <strong>{theme}</strong>
              </div>
              <div className="pill">
                Turn: <strong>{turn}</strong>
              </div>
            </div>
          )}
        </header>

        {!hasStory && (
          <ThemeForm
            theme={theme}
            setTheme={setTheme}
            isLoading={isLoading}
            onStart={handleStart}
          />
        )}

        {error && (
          <div className="errorBox">
            <strong>Error:</strong> {error}
          </div>
        )}

        {hasStory && (
          <div className="grid">
            {/* LEFT: Main story panel */}
            <div className="panel">
              <StoryView
                story={story}
                choices={choices}
                isLoading={isLoading}
                onChoose={handleChoice}
                onRestart={handleRestart}
              />
              <div ref={endRef} />
            </div>

            {/* RIGHT: Adventure log panel */}
            <AdventureLog
              theme={theme}
              entries={logEntries}
              onClear={handleClearLog}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
