import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './containers/GameContainer';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(<Game />, document.getElementById('App'));
registerServiceWorker();
