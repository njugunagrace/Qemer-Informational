import React from 'react';
import { render } from '@testing-library/react';
import About from './index'; 

test('renders the About component', () => {
  const { getByText, getByAltText } = render(<About />);

  const heading = getByText('What We Do');
  expect(heading).toBeInTheDocument();

  const missionText = getByText(
    /Qemer's mission is to decrease rickets cases in Kayole, Kenya./i
  );
  expect(missionText).toBeInTheDocument();

  const image = getByAltText('children');
  expect(image).toBeInTheDocument();
});
