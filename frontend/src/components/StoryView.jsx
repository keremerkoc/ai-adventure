function StoryView({ story, choices, isLoading, onChoose, onRestart }) {
    return (
      <div style={{ marginTop: 18 }}>
        <div
          style={{
            padding: 16,
            border: "1px solid #e6e6e6",
            borderRadius: 16,
            background: "white",
          }}
        >
          <p style={{ marginTop: 0, lineHeight: 1.6, fontSize: 16 }}>{story}</p>
  
          <div style={{ marginTop: 12 }}>
            {choices.map((c, idx) => (
              <button
                key={idx}
                onClick={() => onChoose(c)}
                disabled={isLoading}
                className="button choiceButton"
                >
                {isLoading ? "..." : c}
            </button>
            
            ))}
          </div>
  
          <div style={{ marginTop: 16, display: "flex", gap: 10 }}>
          <button
                onClick={onRestart}
                className="button"
                >
                Restart
            </button>

          </div>
        </div>
      </div>
    );
  }
  
  export default StoryView;
  