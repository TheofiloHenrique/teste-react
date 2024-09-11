import bolsonaru from './bolsonaru.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mao Tse Noro</h1>
        <img src={bolsonaru} className="App-bolsonaru" alt="bolsonaru" />
        <p>
          Mude <code>src/App.js</code> e salve para bla bla bla...
        </p>
        <a
          className="App-link"
          href="https://pt.wikipedia.org/wiki/Muralha_da_China"
          target="_blank"
          rel="noopener noreferrer"
        >
          Da uma sacada na muralha da China
        </a>
      </header>
    </div>
  );
}

export default App;
