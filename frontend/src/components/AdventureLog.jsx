function AdventureLog({ theme, entries, onClear }) {
    return (
      <div className="panel">
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
          <div>
            <h2 className="panelTitle">Adventure Log</h2>
            <div className="muted">
              Theme: <strong>{theme || "—"}</strong>
            </div>
          </div>
  
          <button className="button" onClick={onClear} disabled={entries.length === 0}>
            Clear
          </button>
        </div>
  
        {entries.length === 0 ? (
          <p className="muted" style={{ marginTop: 12 }}>
            Your story history will appear here after you start.
          </p>
        ) : (
          <div style={{ marginTop: 12, maxHeight: 420, overflow: "auto", paddingRight: 4 }}>
            {entries.map((e, idx) => (
              <div key={idx} className="logItem">
                <div className="muted" style={{ marginBottom: 6 }}>
                  Turn {idx + 1}
                </div>
                <div style={{ lineHeight: 1.55 }}>{e.paragraph}</div>
  
                {e.choice && (
                  <div className="logChoice">
                    Choice: <strong>{e.choice}</strong>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  
  export default AdventureLog;
  