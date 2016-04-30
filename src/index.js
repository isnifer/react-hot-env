import '../less/_main.less';
import React, { Component } from 'react';
import { render } from 'react-dom';

class AwesomeComponent extends Component {
    state = {
        body: 'Awesome Component',
    }

    render() {
        return (
            <div className="awesome-component">
                {this.state.body}
            </div>
        );
    }
}

render(React.createElement(AwesomeComponent), document.getElementById('react-root'));
