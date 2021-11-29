import React from 'react';
import classes from './Header.module.scss';
import SocialLinks from './SocialLinks';
import { socialLinks, actionButtons } from './constants';

const Header = () => {
    return (
      <header className={classes.Header}>
        <div className={classes.Header__controls}>
          <button>
            Eng
          </button>
          <button>
            --{'>'}
          </button>
        </div>
        <h1 className={classes.Header__title}>Bite me</h1>
        <p className={classes.Header__disclaimer}>Пощёчина общественному вкусу</p>

        <SocialLinks items={socialLinks}/>
      </header>
    );
};

export default Header;
