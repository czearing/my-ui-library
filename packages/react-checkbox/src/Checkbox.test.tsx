import * as React from 'react';
import { Checkbox } from './Checkbox';
import { render } from '@testing-library/react';

describe('Button', () => {
  it('renders a basic Button', () => {
    const renderedComponent = render(<Checkbox />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });
});
