// src/utils/validators.js
export const validateRestaurant = ({ name, location }) => {
    const errors = {};
    if (!name) errors.name = 'Name is required';
    if (!location) errors.location = 'Location is required';
    return errors;
};
