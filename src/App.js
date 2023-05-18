import budik_biely from './img/budik_biely.svg';
import budik_cierny from './img/budik_cierny.svg';
import logo from './img/logo.png';

import lang from "./lang" 

import './css/reset.css';
import './css/style.css';

import AppNavigation from './components/AppNavigation';
import TodoApp from './components/TodoApp/TodoApp';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';
import { Routes, Route, Link} from "react-router-dom";
import {useState} from "react"

function App() {

  const [phrase, setPhrase] = useState(lang.sk.phrase)

  const handleLangChange = (e) => {
    let ver = e.target.value;
    setPhrase(lang[ver].phrase)
  }

  return (
    <div className="App">
      <header>
        <div id="header_obal">
          <div className="kontajner">
            <h1><Link to="/"><img src={budik_biely} alt="budik" /> {phrase["React examples"]}</Link>
            </h1>
            <AppNavigation phrase={phrase} />
            <select onChange={handleLangChange}>
              <option value="sk">SK</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
        <div className="kontajner" id="pasik"></div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={ <TodoApp phrase={phrase} /> } />
          <Route path="/weather" element={ <WeatherForecast phrase={phrase} /> } />
        </Routes>
      </main>

      <footer>
        <div className="kontajner">
          <p><img src={budik_cierny} alt="budik" />{phrase["The application is also available on"]} <a href="">github.com</a></p>
          <div>
            <img src={logo} alt="logo" />
            <p>© gov.sk copyright</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
