import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CustomButton from './CustomButton';

test('renders the button with children text', () => {
    render(<CustomButton>Click Me</CustomButton>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
});

test('triggers onClick function when clicked', () => {
    const handleClick = jest.fn();
    render(<CustomButton onClick={handleClick}>Click Me</CustomButton>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
});
