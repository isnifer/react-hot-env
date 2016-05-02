import '../less/_main.less';
import React from 'react';
import { render } from 'react-dom';
import AwesomeComponent from './components/AwesomeComponent.jsx';

render(React.createElement(AwesomeComponent), document.getElementById('react-root'));
