// src/components/RestaurantDashboard.js
import React, { useEffect, useState } from 'react';
import RestaurantForm from '../components/RestaurantForm';
import RestaurantList from '../components/RestaurantList';

function RestaurantDashboard({ restaurants, setRestaurants }) {
  const [editingRestaurant, setEditingRestaurant] = useState(null);

  const addRestaurant = (newRestaurant) => {
    setRestaurants((prev) => [...prev, newRestaurant]);
  };

  const updateRestaurant = (updatedRestaurant) => {
    setRestaurants((prev) =>
      prev.map((rest) => (rest.id === updatedRestaurant.id ? updatedRestaurant : rest))
    );
    setEditingRestaurant(null);
  };

  const deleteRestaurant = (id) => {
    setRestaurants((prev) => prev.filter((rest) => rest.id !== id));
  };

  useEffect(() => {
    // Load initial data
    // This is a placeholder. Normally, you'd fetch data from an API.
    const initialData = [
      { id: 1, name: 'Restaurant One', description: 'Description for Restaurant One', location: 'Location One' },
      { id: 2, name: 'Restaurant Two', description: 'Description for Restaurant Two', location: 'Location Two' }
    ];
    setRestaurants(initialData);
  }, [setRestaurants]);

  return (
    <div>
      <RestaurantForm
        onAdd={addRestaurant}
        onUpdate={updateRestaurant}
        editingRestaurant={editingRestaurant}
      />
      <RestaurantList
        restaurants={restaurants}
        onEdit={setEditingRestaurant}
        onDelete={deleteRestaurant}
      />
    </div>
  );
}

export default RestaurantDashboard;
