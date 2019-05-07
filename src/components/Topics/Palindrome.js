import React, { Component } from 'react';

class Palindrome extends Component{
    constructor(){
        super()

        this.state = {
            unFilteredArray: ['hi', 'no','buy','chicken','phone'],
            userInput: '',
            filteredArray: []
        }
    }
    
    handleChange(val){
        this.setState({ userInput: val})
    }

    

    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4></h4>
                <span className='puzzleText'></span>
                <input className='inputLine' onChange={(e) => this.hanldeChange(e.target.value) }></input>
                <button className='confirmationButton' onClick={ () => {this.assign}}></button>
                <span className='resultsBox filterStringRB'></span>
            </div>
        )
    }
}

export default Palindrome;