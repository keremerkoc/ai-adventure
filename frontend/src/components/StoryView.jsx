function StoryView({ story, choices, isLoading, onChoose, onRestart }) {
    return (
      <div style={{ marginTop: 20 }}>
        <div
          style={{
            padding: 16,
            border: "1px solid #ddd",
            borderRadius: 12,
            background: "white",
          }}
        >
          <p style={{ marginTop: 0, lineHeight: 1.5 }}>{story}</p>
  
          <div style={{ marginTop: 12 }}>
            {choices.map((c, idx) => (
              <button
                key={idx}
                onClick={() => onChoose(c)}
                disabled={isLoading}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "0.75rem 1rem",
                  marginTop: 10,
                  borderRadius: 10,
                  border: "1px solid #ddd",
                }}
              >
                {isLoading ? "..." : c}
              </button>
            ))}
          </div>
  
          <div style={{ marginTop: 16, display: "flex", gap: 10 }}>
            <button onClick={onRestart} style={{ padding: "0.6rem 1rem" }}>
              Restart
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default StoryView;
  