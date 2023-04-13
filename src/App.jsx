import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="body bg-dark text-light">
      <header className="container-fluid">
        <nav classNameName="navbar fixed-top navbar-dark">
          <div className="navbar-brand">
            Simon<sup>&reg;</sup>
          </div>
          <menu className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="index.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="play.html">
                Play
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="scores.html">
                Scores
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="about.html">
                About
              </a>
            </li>
          </menu>
        </nav>
      </header>

      <footer class="bg-dark text-dark text-muted">
        <div class="container-fluid">
          <span class="text-reset">Juan Cuevas</span>
          <a class="text-reset" href="https://github.com/jac377/simon-websocket">Source</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
