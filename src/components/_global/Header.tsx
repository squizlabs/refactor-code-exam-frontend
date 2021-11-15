/*!
 * @license
 * Copyright Squiz Australia Pty Ltd. All Rights Reserved.
 */

import React from 'react';
import {
    HeaderProps,
} from './Header.props';

/**
 * Header component.
 * @param {HeaderProps} props Props passed to `<Header />`.
 * @export
 * @returns {JSX.Element} The `<Header />` component.
 */
export const Header = (props: HeaderProps): JSX.Element => {
  const title = props.title;
  const wrapping_class = 'header__wrapper';

  return (
    <div>
        <div className={wrapping_class}>
            <div className="header">
                <div className="header__title">{title}</div>
            </div>
        </div>
    </div>
  );
};
