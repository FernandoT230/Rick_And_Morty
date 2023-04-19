import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/NAV";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites"
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "6e2b9313e085.f11b05b9bf9940661b7a";

const email = "fer@gmail.com";
const password = "2304";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const login = (userData) => {
    if (userData.email === email && userData.password === password) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    if (!access) {
      navigate("/");
    } else {
      navigate("/home");
    }
  }, [access]);

  const onSearch = (id) => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(charactersFiltered);
  };

  return (
    <Provider store={store}>
      <div className="App rick-morty-background">
        {location.pathname !== "/" && (
          <Nav onSearch={onSearch} setAccess={setAccess} />
        )}
        <Routes>
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/" element={<Form login={login} />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
