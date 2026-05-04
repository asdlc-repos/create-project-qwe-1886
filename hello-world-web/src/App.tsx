function App() {
  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "1rem",
        backgroundColor: "#f0f4f8",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "2rem",
          borderRadius: "1rem",
          background: "#ffffff",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          maxWidth: "480px",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem, 8vw, 4rem)",
            fontWeight: 700,
            color: "#2d3748",
            letterSpacing: "-0.02em",
          }}
        >
          Hello World
        </h1>
      </div>
    </main>
  );
}

export default App;
