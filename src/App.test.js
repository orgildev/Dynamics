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
  const titleElements = screen.getAllByText(/Drone Technology/i);
  expect(titleElements.length).toBeGreaterThan(0);
});

test('renders research content', () => {
  render(<App />);
  const researchTitles = screen.getAllByText(/Projectile Motion of a Drone’s Payload/i);
  expect(researchTitles.length).toBeGreaterThan(0);
});
