import React, { useState, useEffect } from 'react';
import './Navbar.css';

const App = () => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(prevTheme => {
      document.body.style.backgroundColor = prevTheme ? 'lightgray' : 'black ';
      document.body.style.color = prevTheme ? 'black' : 'white';
      return !prevTheme;
    });
  };

  useEffect(() => {
    let duration = 1600;

    const success = button => {
      // Success function
      button.classList.add('success');
    };

    const handleButton = button => {
      button.style.setProperty('--duration', duration + 'ms');
      
      ['mousedown', 'touchstart', 'keypress'].forEach(e => {
        button.addEventListener(e, ev => {
          if (e !== 'keypress' || (e === 'keypress' && ev.which === 32 && !button.classList.contains('process'))) {
            button.classList.add('process');
            button.timeout = setTimeout(success, duration, button);
          }
        });
      });

      ['mouseup', 'mouseout', 'touchend', 'keyup'].forEach(e => {
        button.addEventListener(e, ev => {
          if (e !== 'keyup' || (e === 'keyup' && ev.which === 32)) {
            button.classList.remove('process');
            clearTimeout(button.timeout);
          }
        }, false);
      });
    };

    document.querySelectorAll('.button-hold').forEach(button => {
      handleButton(button);
    });
  }, []); // Empty dependency array to run the effect only once on mount

  const buttonText = isDarkTheme ? 'Light Theme' : 'Dark Theme';

  const themeStyle = {
    backgroundColor: isDarkTheme ? null : null,
    color: isDarkTheme ? '#fff' : '#333',
  };

  return (
    <div className='navbar'>
      <div className='kalvium'>
        <h1>Kalvium</h1>
      </div>
      <div className='theme-button' style={themeStyle}>
        <button className='button-hold' onClick={toggleTheme}>
          <div>
            <svg className="icon" viewBox="0 0 16 16">
              <polygon points="1.3,6.7 2.7,8.1 7,3.8 7,16 9,16 9,3.8 13.3,8.1 14.7,6.7 8,0"></polygon>
            </svg>
            <svg className="progress" viewBox="0 0 32 32">
              <circle r="8" cx="16" cy="16" />
            </svg>
            <svg className="tick" viewBox="0 0 24 24">
              <polyline points="18,7 11,16 6,12" />
            </svg>
          </div>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default App;