import * as React from 'react';
import { Checkbox } from './Checkbox';
import { render } from '@testing-library/react';

describe('Checkbox', () => {
  it('renders a basic Checkbox', () => {
    const renderedComponent = render(<Checkbox />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });
});
