import './App.css';
import { useState } from 'react';

function App() {

  const [fruits, setFruits] = useState([
    { name: 'banana', color: 'yellow', price: 2 },
    { name: 'cherry', color: 'red', price: 3 },
    { name: 'strawberry', color: 'red', price: 4 },
  ]);

  function filterRedFruits(){
    setFruits((oldFruits) => {
      return oldFruits.filter(fruit => fruit.color === 'red');
    })
  }

  let totalPrice = fruits.reduce((pv, cv) => pv + cv.price, 0);

  return (
    <div id="container">
      <div id="principal-container">
        <h2>Preço total: R${totalPrice}</h2>
        <ul id="fruits-list">
          {
            fruits.map((fruit, index) => (
              <li key={index} className="fruit">
                <p>{fruit.name}</p>
              </li>
            ))
          }
        </ul>
        <button id="show-red-fruits__button" onClick={() => filterRedFruits()}>Mostrar frutas vermelhas</button>
      </div>
    </div>
  );
}

export default App;
