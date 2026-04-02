import { render, screen } from '@testing-library/react';
import App from './App';

// Mocking ResizeObserver for tests
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

test('renders app container', () => {
  render(<App />);
  const titleElement = screen.getByText(/Drone Technology/i);
  expect(titleElement).toBeInTheDocument();
});
