import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("");
  const [story, setStory] = useState("");
  const [choices, setChoices] = useState([]);

  function handleStart() {
    // Simulate backend response
    setStory(`You enter a world of ${theme}. Neon lights flicker as danger lurks nearby.`);
    setChoices([
      "Explore the city",
      "Hide in the shadows",
      "Call for backup"
    ]);
  }

  function handleChoice(choice) {
    // Simulate next step
    setStory(`You chose to "${choice}". The story continues...`);
    setChoices([
      "Keep going",
      "Change direction",
      "End adventure"
    ]);
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial", maxWidth: "600px" }}>
      <h1>AI Adventure Game</h1>

      {story === "" && (
        <>
          <input
            type="text"
            placeholder="Enter a theme (e.g. Cyberpunk Space)"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            style={{ padding: "0.5rem", width: "100%" }}
          />

          <br /><br />

          <button onClick={handleStart} style={{ padding: "0.5rem 1rem" }}>
            Start Adventure
          </button>
        </>
      )}

      {story !== "" && (
        <>
          <p style={{ marginTop: "1.5rem" }}>{story}</p>

          <div>
            {choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleChoice(choice)}
                style={{ display: "block", margin: "0.5rem 0", padding: "0.5rem 1rem" }}
              >
                {choice}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
