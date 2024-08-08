// src/components/RestaurantList.js
import React from 'react';

function RestaurantList({ restaurants, onEdit, onDelete }) {
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <h2>{restaurant.name}</h2>
          <p>{restaurant.description}</p>
          <p>{restaurant.location}</p>
          <button onClick={() => onEdit(restaurant)}>Edit</button>
          <button onClick={() => onDelete(restaurant.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default RestaurantList;
