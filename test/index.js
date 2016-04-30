import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import AwesomeComponent from '../lib/AwesomeComponent.js';

test('Awesome Component', t => {
    const wrapper = shallow(<AwesomeComponent />);
    console.log(wrapper);
    t.equal(wrapper.node.type, 'div', `Root tag should be 'div'`);
    t.equal(wrapper.node.props.className, 'awesome-component', `ClassName should be 'awesome-component'`);
    t.equal(wrapper.length, 1, `There is should be one component`);

    t.end();
});
