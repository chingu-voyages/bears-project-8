import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class _Dashboard extends Component {
	static propTypes = {};

	state = {};

	render() {
		return <div />;
	}
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(_Dashboard);
