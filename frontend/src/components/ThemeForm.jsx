function ThemeForm({ theme, setTheme, isLoading, onStart }) {
    return (
      <div style={{ marginTop: 18 }}>
        <label style={{ display: "block", marginBottom: 8, fontWeight: 600 }}>
          Theme
        </label>
  
        <input
          type="text"
          placeholder='e.g., "Cyberpunk Space"'
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          disabled={isLoading}
          style={{
            padding: "12px 12px",
            width: "100%",
            boxSizing: "border-box",
            borderRadius: 12,
            border: "1px solid #e0e0e0",
            outline: "none",
          }}
        />
  
        <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
        <button
            onClick={onStart}
            disabled={isLoading}
            className="button"
            >
            {isLoading ? "Starting..." : "Start Adventure"}
            </button>

        </div>
      </div>
    );
  }
  
  export default ThemeForm;
  