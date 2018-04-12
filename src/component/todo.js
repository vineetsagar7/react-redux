import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import AppBar from "material-ui/AppBar";
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import { addTodo } from '../actions'
import { Container } from './container';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
    input: {
        display: 'none'
    },
    root: {
        flexGrow: 1
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200
    },

})

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    // componentWillReceiveProps(props) {
    //     debugger
    // }
    handleChange = name => event => {
        this.setState({ text: event.target.value })
    }

    addTodo = text => event => {
        this.props.addTodo(this.state.text)
        debugger
    }

    render() {

        const { classes } = this.props;
        return (<div>
            {/* <div className={classes.root}> */}

            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="title" color="inherit"> TODO:</Typography>
                </Toolbar>
            </AppBar>

            <TextField
                id="Name"
                label="Text"
                className={classes.textField}
                value={this.state.text}
                onChange={this.handleChange(this.state.text)}
                margin="normal"
            />

            <Container />

            <Button
                onClick={this.addTodo(this.state.text)}
                variant="raised" color="secondary" className="classes.button" > Add</Button>

        </div >)
    }
}

const mapStateToProps = (state) => ({
    ...state,
    todo: state
})

const mapDispatchToProps = (dispatch, props) => ({
    onClick: (filter) => {
        dispatch(setVisibilityFilter(filter))
    },
    addTodo: (text) => {
        debugger
        dispatch(addTodo(text))

    }
})

TextField.prototypes = {
    classes: PropTypes.object.isRequired
}

Todo = connect(mapStateToProps, mapDispatchToProps)(Todo)

export default withStyles(styles)(Todo);