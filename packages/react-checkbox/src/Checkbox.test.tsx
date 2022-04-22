import * as React from 'react';
import { Button } from './Checkbox';
import { render } from '@testing-library/react';

describe('Button', () => {
  it('renders a basic Button', () => {
    const renderedComponent = render(<Button />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });
});
