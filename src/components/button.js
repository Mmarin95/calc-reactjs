import React, { Component } from 'react'

class Button extends Component {

    render() {
        const { symbol, cols, action } = this.props;
        return (
            <button
                className={`column-${cols}`}
                onClick={() => action(symbol)}
            >
                {symbol}
            </button>
        )
    }

}

export default Button