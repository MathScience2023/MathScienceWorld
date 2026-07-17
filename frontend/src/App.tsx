function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          padding: "20px 40px",
          borderBottom: "1px solid #ddd",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>🌎 MathScienceWorld</h1>

        <nav>
          Inicio | Cursos | Practicar | Tutor IA
        </nav>
      </header>

      <main
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h2>Bienvenido a MathScienceWorld</h2>

        <p>Aprende comprendiendo.</p>

        <button>Comenzar</button>
      </main>

      <footer
        style={{
          borderTop: "1px solid #ddd",
          padding: "20px",
          textAlign: "center",
        }}
      >
        © 2026 MathScienceWorld
      </footer>
    </div>
  );
}

export default App;