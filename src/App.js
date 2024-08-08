// src/App.js
import React, { useState } from 'react';
import RestaurantDashboard from './pages/RestaurantDashboard';
import "./assets/styles/styles.css"

function App() {
  const [restaurants, setRestaurants] = useState([]);

  return (
    <div className="App">
      <RestaurantDashboard restaurants={restaurants} setRestaurants={setRestaurants} />
    </div>
  );
}

export default App;
