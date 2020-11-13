import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestPeople, characterCounterClicked } from '../redux/actions';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

const mapStateToProps = (state) => {

    
	return {

		people: state.people,
		isPending: state.isPending,
		error: state.error,
		characterCounter: state.characterCounter
	}
}

const mapDispatchToProps = (dispatch) => {

	return {

		onRequestPeople: () => requestPeople(dispatch), //dispatch(requestRobots())
		onCharacterCounterClicked: () => dispatch(characterCounterClicked())

	}
}

class App extends Component {


	componentDidMount(){

		this.props.onRequestPeople();
	}


	render(){

		return (

				<div className='divapp'>

					<Scroll>
	 				<ErrorBoundry>
					<CardList 
					people={this.props.people}
					characterCounterClicked={this.props.onCharacterCounterClicked}
					toggle={this.props.characterCounter}
					/>
					</ErrorBoundry>
					</Scroll>

				</div>
			);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);