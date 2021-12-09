import React, { Component } from 'react';
export default class Couter extends Component {
    render() {
        const { couter, increment, decrement, reset } = this.props;
        return (
            <div className="App">
                <div>{couter}</div>
                <div>
                    <button onClick = {increment}>INCREMENT BY 1</button>
                </div>
                <div>
                    <button onClick = {decrement}>DECREMENT BY 1</button>
                </div>
                <div>
                    <button onClick = {reset}>RESET</button>
                </div>
            </div>
        );
    }
}
