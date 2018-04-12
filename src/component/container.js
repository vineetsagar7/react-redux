import React, { Component } from "react";



class Container extends Component {

    constructor(props) {
        super(props)

    }

    render() {

        const { todos } = this.props;

        return (
            <div>
                list of todos:
            </div >
        )
    }
}

export default Container;