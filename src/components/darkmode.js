import React from 'react';
import useDarkMode from 'use-dark-mode';

const Toggle = ({ checked, onChange }) => (
  <span className="toggle-control">
    <input
      className="dmcheck"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="dmcheck"
    />
    <label htmlFor="dmcheck" />
  </span>
);

const DarkModeToggle = () => {
    const darkMode = useDarkMode(false);
    return (
      <div className="dark-mode-toggle">
        <button type="button" onClick={darkMode.enable}>
          ☀
        </button>
        <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
        <button type="button" onClick={darkMode.disable}>
          ☾
        </button>
      </div>
    );
  };

  
  export default DarkModeToggle;
  