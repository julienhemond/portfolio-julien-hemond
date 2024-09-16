import logo from './logo.svg';
import logoDev from './logo-developper-engineering.png';
import './App.css';

function HeaderButton(buttonTextContent) {
  function HandleClick() {
    // TODO: Implement this logic later
    // FIXME: Handle what clicking does
  }
  return (
    <button>{buttonTextContent}</button>

  )
}

// Navbar structure
function Navbar() {
  return (
    <nav>
      <img src={logoDev} alt="Logo developper and engineer" />
      <h2>Julien Hémond</h2>
      <div>
        <button>{HeaderButton("Projets")}</button>
        <button>{HeaderButton("À propos")}</button>
        <button>{HeaderButton("Github")}</button>
        <button>{HeaderButton("Contact")}</button>
      </div>
      {/* TODO : add envoyer un message button */}
    </nav>
  )
}

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div>
  );
}

export default App;
