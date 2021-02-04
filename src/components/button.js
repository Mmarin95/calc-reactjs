import React, { Component } from 'react'

class Button extends Component {

    render() {
        const { symbol, cols, action } = this.props;
        return (
            <div className={`column-${cols}`}>
                <button
                    className="calc-button"
                    onClick={() => action(symbol)}
                >
                    {symbol}
                </button>
            </div>
        )
    }

}

export default Button