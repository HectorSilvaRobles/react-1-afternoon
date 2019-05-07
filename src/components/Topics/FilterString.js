import React, { Component } from 'react';

class FilterString extends Component{
    constructor(){
        super()

        this.state = {
            unFilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredArray: []
        }
    }
    
    handleChange(val){
        this.setState({ userInput: val})
    }

    filteredString(userInput){
        let strings = this.state.unFilteredArray
        let filteredString = [];

        for(let i = 0; i<strings.length; i++){
            if( strings[i].includes(userInput)){
                filteredString.push(strings[i]);
            }
        }
        this.setState({filteredString: filteredString})
    }

    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4></h4>
                <span className='puzzleText'>Unfiltered Strings: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className='inputLine' onChange={(e) => this.hanldeChange(e.target.value) }></input>
                <button className='confirmationButton' onClick={ () => {this.filteredString(this.state.userInput)}}> Filter String </button>
                <span className='resultsBox filterStringRB'>Filtered Strings: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}


export default FilterString