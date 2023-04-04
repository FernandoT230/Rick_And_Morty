import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/NAV';
import characters, { Rick } from './data.js';
import { useState } from 'react';

function App() {
   const [characters, setCharacters] = useState([])
   
   return (
      <div className='App'>
         <Nav />
         <Cards characters={characters} />
         <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => alert('Emulamos que se cierra la card')}
         />
      </div>
   );
}

export default App;
