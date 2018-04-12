import React, { Component } from "react";


class Container extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { todos } = this.props;
        debugger
        return (
            <div>
                list of todos:
                {
                    todos.map((data, i) => {
                        return (
                            <div key={i + '_text'}>
                                {data.text}
                                <button key={i + '_remove'}> remove </button>
                            </div>)
                    })
                }
            </div >
        )
    }
}

export default Container;
