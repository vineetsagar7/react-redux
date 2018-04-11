import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'


class Todo extends Component {
    render() {
        return (<div>
            <div onClick={this.props.onClick()}>click here </div>
            This is todo component
             </div>)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            debugger
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

Todo = connect(mapStateToProps, mapDispatchToProps)(Todo)

export default Todo;