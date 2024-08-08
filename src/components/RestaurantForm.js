// src/components/RestaurantForm.js
import React, { useState, useEffect } from 'react';

function RestaurantForm({ onAdd, onUpdate, editingRestaurant }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (editingRestaurant) {
      setName(editingRestaurant.name);
      setDescription(editingRestaurant.description);
      setLocation(editingRestaurant.location);
    } else {
      setName('');
      setDescription('');
      setLocation('');
    }
  }, [editingRestaurant]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const restaurant = {
      id: editingRestaurant ? editingRestaurant.id : Date.now(),
      name,
      description,
      location
    };

    if (editingRestaurant) {
      onUpdate(restaurant);
    } else {
      onAdd(restaurant);
    }

    setName('');
    setDescription('');
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <button type="submit">{editingRestaurant ? 'Update' : 'Add'} Restaurant</button>
    </form>
  );
}

export default RestaurantForm;
