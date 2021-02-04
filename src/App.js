import React, { Component } from 'react'
import Button from './components/button'
import './css/style.css'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentNumber: '0',
      previousNumbers: [],
      nextIsReset: false
    }
  }

  addToCurrentNumberr = (symbol) => {
    this.setState({
      currentNumber: this.state.currentNumber + symbol
    })
  }

  addToCurrentNumber = (symbol) => {

    let { currentNumber, previousNumbers, nextIsReset } = this.state;

    if (['/', '*', '-', '+'].indexOf(symbol) > -1) {
      previousNumbers.push(currentNumber + symbol);
      this.setState({ previousNumbers, nextIsReset: true });

    } else {

      if ((this.state.currentNumber === "0" && symbol !== ".") || nextIsReset) {
        this.setState({ currentNumber: symbol, nextIsReset: false })
      } else {
        this.setState({ currentNumber: currentNumber + symbol })
      }
    }

  }

  solve = (symbol) => {
    let { currentNumber, previousNumbers } = this.state;

    if (previousNumbers.length > 0) {
      currentNumber = eval(String(previousNumbers[previousNumbers.length - 1] + currentNumber));
      this.setState({ currentNumber, previousNumbers: [], nextIsReset: true });
    }
  }

  reset = () => {
    this.setState({ currentNumber: '0', previousNumbers: [], nextIsReset: true })
  }

  backspace = () => {
    let { currentNumber } = this.state;
    if (currentNumber.length === 1) {
      this.setState({ currentNumber: '0' })
    } else {
      this.setState({ currentNumber: currentNumber.slice(0, -1) })
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {

    const buttons = [
      { symbol: 'CE', cols: '2', action: this.reset },
      { symbol: 'Back', cols: '1', action: this.backspace },
      { symbol: '/', cols: '1', action: this.addToCurrentNumber },

      { symbol: '7', cols: '1', action: this.addToCurrentNumber },
      { symbol: '8', cols: '1', action: this.addToCurrentNumber },
      { symbol: '9', cols: '1', action: this.addToCurrentNumber },
      { symbol: '*', cols: '1', action: this.addToCurrentNumber },

      { symbol: '4', cols: '1', action: this.addToCurrentNumber },
      { symbol: '5', cols: '1', action: this.addToCurrentNumber },
      { symbol: '6', cols: '1', action: this.addToCurrentNumber },
      { symbol: '+', cols: '1', action: this.addToCurrentNumber },

      { symbol: '1', cols: '1', action: this.addToCurrentNumber },
      { symbol: '2', cols: '1', action: this.addToCurrentNumber },
      { symbol: '3', cols: '1', action: this.addToCurrentNumber },
      { symbol: '-', cols: '1', action: this.addToCurrentNumber },

      { symbol: '0', cols: '1', action: this.addToCurrentNumber },
      { symbol: '.', cols: '1', action: this.addToCurrentNumber },
      { symbol: '=', cols: '2', action: this.solve },
    ]

    const { currentNumber, previousNumbers } = this.state;

    return (
      <div className="wrapper">
        <div className="display-box">
          <div className="previous">{previousNumbers[previousNumbers.length - 1]}</div>
          <input read-only="true" className="result" type="text" value={currentNumber} onChange={this.onChange}></input>
        </div>
        {buttons.map((button, i) => {
          return <Button key={i} symbol={button.symbol} cols={button.cols} action={(symbol) => button.action(symbol)} />
        })}
      </div>
    )
  }

}


export default App


// import logo from './logo.svg';
// import './App.css';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */