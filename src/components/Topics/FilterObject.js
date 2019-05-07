import React, { Component } from 'react';

class FilterObject extends Component{
    constructor(){
        super();

        this.state = {
            unFilteredArray: ['apple', 'banana', 'orange', 'pear', 'strawberry', 'watermelon', 'melon'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    filterArray(prop){
        let fruits = this.state.unFilteredArray;
        let filteredArray = [];

        for(let i = 0; i< fruits.length; i++){
            if(fruits[i].hasOwnProperty(prop)){
                filteredArray.push(fruits[i]);
            }
        }
        this.state({filteredArray: filteredArray});
    }

    render(){
        return (
            <div className ='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'> Unfiltered Array: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className='confirmationButton' onClick={ () => {this.filterArray(this.state.userInput)}}> Filter </button>
                <span className='resultsBox filterObjectRB'>Filtered Array: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObject;