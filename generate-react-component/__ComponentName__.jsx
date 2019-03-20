/* IF class */import React, {PureComponent} from 'react';
/* ENDIF */
/* IF !class */import React from 'react';
/* ENDIF */
// import PropTypes from 'prop-types';
import {
	TextStyle,
} from '@shopify/polaris';
/* IF class */

class __ComponentName__ extends PureComponent {
	static propTypes = {}

	static defaultProps = {};

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<TextStyle>This is {'<__ComponentName__ />'}</TextStyle>
		);
	}
}
/* ENDIF */
/* IF !class */
__ComponentName__.propTypes = {};
__ComponentName__.defaultProps = {};
function __ComponentName__(props) {
	return (
		<TextStyle>{props}</TextStyle>
	);
}
/* ENDIF */

export default __ComponentName__;
