import React from 'react';
import { render, screen } from '@testing-library/react';
import { Devices } from '../../../pages/devices/Devices';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('Devices', () => {
  test('renders devices table', () => {
    render(<Devices />); // Add the missing `devices` prop
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });
});
