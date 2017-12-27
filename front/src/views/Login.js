import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import loginActions from '../redux/example/actions';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}


	render() {
		return (
			<div onClick={() => this.props.onPeopleClick(23)}>
				<p>{ this.props.people.name }</p>
				<p>{ this.props.people.gender }</p>
				<p></p>
			</div>
		);
	}
}

Login.propTypes = {
	people: PropTypes.object
};

const getPeopleById = (peoples, id) => {
	const pp = peoples.filter(p => {
		return p.id === id;
	});
	if (pp.length > 0) {
		return pp[0];
	} else {
		return false;
	}
};

const mapStateToProps = state => {
	return {
		people: getPeopleById(state.peoples, state.id)
	}
};

const mapDispatchToProps = dispatch => {
	return {actions: bindActionCreators(loginActions, dispatch)};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));



