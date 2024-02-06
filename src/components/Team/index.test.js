import React from 'react';
// import { getByPlaceholderText, render } from '@testing-library/react';
import { render } from '@testing-library/react';
import Team from '.';

test('renders team members', () => {
  const { getByText } = render(<Team />);
  const teamRoles = 'Software Developer';
  const headerElement = getByText('Team');
  expect(headerElement).toBeInTheDocument();
});