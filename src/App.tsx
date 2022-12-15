import "./App.css";

function App() {
  return (
    <main className="App">
      <header id="header">
        <img src="/logo128.png" alt="YouTube Snapshot Logo" />
        <h1>YouTube Snapshot</h1>
        <p>
          Take a snapshot of YouTube videos at any moment with a click of a
          button
        </p>
      </header>

      <section className="section">
        <h1>How To Use?</h1>
        <p>
          Open any youtube video and when you want to take a snapshot of the
          video click
          <span>
            <code>CTRL</code>
            <span>+</span>
            <code>I</code>
          </span>
        </p>
      </section>

      <section className="section">
        <h1>Report Issues</h1>
        <p>
          To report crashes or bugs you can open an issue on{" "}
          <a href="https://github.com/AhmedIbrahim336/youtube-snapshot">
            GitHub
          </a>
        </p>
        <p>
          Or you can email me directly at{" "}
          <a href="mailto:me@ahmedibrahim.dev">me@ahmedibrahim.dev</a>
        </p>
      </section>

      <section>
        <h1>Thanks ❤️ — By Ahmed Ibrahim</h1>
      </section>
    </main>
  );
}

export default App;
