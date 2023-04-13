import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');

  // Asynchronously determine if the user is authenticated by calling the service
  const [authState, setAuthState] = React.useState(AuthState.Unknown);
  React.useEffect(() => {
    if (userName) {
      fetch(`/api/user/${userName}`)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
        })
        .then((user) => {
          const state = user?.authenticated ? AuthState.Authenticated : AuthState.Unauthenticated;
          setAuthState(state);
        });
    } else {
      setAuthState(AuthState.Unauthenticated);
    }
  }, [userName]);

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
            {authState === AuthState.Authenticated && (
              <li className='nav-item'>
                <a className='nav-link' href='play.html'>
                  Play
                </a>
              </li>
            )}
            {authState === AuthState.Authenticated && (
              <li className='nav-item'>
                <a className='nav-link'  href='scores.html'>
                  Scores
                </a>
              </li>
            )}
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
