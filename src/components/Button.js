import React from 'react';
import styles from '../styles/modules/button.module.scss';
import { getClasses } from '../utils/getClasses';

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
};

const Button = ({ children, type, variant, ...rest }) => (
  <button
    type={type === 'submit' ? 'submit' : 'button'}
    className={getClasses([styles.button, styles[`button--${variant}`]])}
    {...rest}
  >
    {children}
  </button>
);

const SelectButton = ({ children, id, ...rest }) => (
  <select
    className={getClasses([styles.button, styles.button__select])}
    {...rest}
  >
    {children}
  </select>
);

export { SelectButton };
export default Button;
