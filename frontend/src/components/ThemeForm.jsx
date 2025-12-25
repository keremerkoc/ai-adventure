function ThemeForm({ theme, setTheme, isLoading, onStart }) {
    return (
      <div style={{ marginTop: "1.25rem" }}>
        <label style={{ display: "block", marginBottom: 8 }}>Theme</label>
  
        <input
          type="text"
          placeholder='e.g., "Cyberpunk Space"'
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          style={{ padding: "0.6rem", width: "100%", boxSizing: "border-box" }}
          disabled={isLoading}
        />
  
        <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
          <button
            onClick={onStart}
            disabled={isLoading}
            style={{ padding: "0.6rem 1rem" }}
          >
            {isLoading ? "Starting..." : "Start Adventure"}
          </button>
        </div>
      </div>
    );
  }
  
  export default ThemeForm;
  