/*!
 * @license
 * Copyright Squiz Australia Pty Ltd. All Rights Reserved.
 */

import { render } from '@testing-library/react';
import React from 'react';
import { Header } from './Header';

const mockTitle = `Header title`;

describe(`<Header />`, () => {
  it(`should render a component`, async () => {
    const mockProps = {
        title: mockTitle
    };

    const { baseElement } = render(<Header {...mockProps} />);
    expect(baseElement).toBeTruthy();
  });
});
