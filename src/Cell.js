import React, { Component } from 'react';

export default class Cell extends Component {

	constructor(props) {
	  super()
	  this.state = {
	  	color: props.value
  	} // ...define initial state with a key of 'color' set to the 'value' prop
	}

	handleClickEvent = (event) => {
		const newValue = '#333'
		this.setState({
			color: newValue
		})
	}

	render() {
		return (
			<div onClick={this.handleClickEvent} className="cell" style={{backgroundColor: this.state.color}}></div>
		)
	}

}