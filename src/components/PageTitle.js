import React from 'react';
import style from '../styles/modules/title.module.scss';

const PageTitle = ({ children, ...rest }) => (
  <p className={style.title} {...rest}>
    <h1>{children}</h1>
  </p>
);

export default PageTitle;
