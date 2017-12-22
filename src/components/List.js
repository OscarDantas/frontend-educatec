import React, { Component } from "react"
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"
import { fetchLeis } from "../actions/leiActions"

class List extends Component {
  componentDidMount() {
    this.props.fetchLeis()
  }

  render() {

  	console.log(this.props.leis);

  	return (
    	<div></div>
    );
  }
}

const mapStateToProps = (state) => {
	return { leis: state.all };
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ fetchLeis }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
