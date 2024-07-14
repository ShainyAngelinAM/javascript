import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import State from './App';
import Effect from './App1';
import Context from './Cont';
import Apply from './Refhook';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h3>useState hook</h3>
    <State /><br></br>
    <h3>useEffect hook</h3>
    <Effect /><br></br>
    <h3>useContext hook</h3>
    <Context /><br></br>
    <h3>useRef hook</h3>
    <Apply />
  </React.StrictMode>
);


reportWebVitals();
