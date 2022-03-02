import React, { Component } from 'react'

export class Palindrome extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userInput: '',
         palindrome: ''
      }
        this.handleChange = this.handleChange.bind(this) 
    }
    handleChange (event) {
        this.setState({userInput: event.target.value})
    }

    isPalindrome = () => {
        const inputValue = this.state.userInput.split(' ').join('');
        let forwardsStr = inputValue
        let backwardStr = inputValue.split('').reverse().join('');

        if(forwardsStr=== backwardStr){
            this.setState({palindrome: 'true'})
        }else{
            this.setState({palindrome: 'false'})
        }
    }
  render() {
    return (
        <div className="puzzleBox palindromePB">
            <h4> Palindrome </h4>
            <input className="inputLine"
            value={this.state.userInput}
            onChange={this.handleChange}
            ></input>
            <button className="confirmationButton" 
            onClick={this.isPalindrome}>
              Check
            </button>
        <span className="resultsBox"> Palindrome: {this.state.palindrome}</span>
      </div>
    )
  }
}

export default Palindrome