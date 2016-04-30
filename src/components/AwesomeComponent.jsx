import React, { Component} from 'react';

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

export default AwesomeComponent;
