// src/services/api.js

const API_URL = 'http://localhost:3001';
;

export const fetchRestaurants = async () => {
    const response = await fetch(`${API_URL}/restaurants`);
    if (!response.ok) {
        throw new Error('Failed to fetch restaurants');
    }
    return response.json();
};

export const createRestaurant = async (restaurant) => {
    const response = await fetch(`${API_URL}/restaurants`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(restaurant),
    });
    if (!response.ok) {
        throw new Error('Failed to create restaurant');
    }
    return response.json();
};

export const updateRestaurant = async (id, restaurant) => {
    const response = await fetch(`${API_URL}/restaurants/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(restaurant),
    });
    if (!response.ok) {
        throw new Error('Failed to update restaurant');
    }
    return response.json();
};

export const deleteRestaurant = async (id) => {
    const response = await fetch(`${API_URL}/restaurants/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete restaurant');
    }
    return response.json();
};
