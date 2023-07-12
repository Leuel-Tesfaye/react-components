import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

/** creating react components */
/** Functional Component */

const component = (
  <header>
    <h1>header testing</h1>
  </header>
)

const app= (
  <div>
    {component}
  </div>
)

const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)




