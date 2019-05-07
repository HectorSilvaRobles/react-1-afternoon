import React, {Component} from 'react';

import EvenAndOdd from '../Topics/EvenAndOdd';
import Sum from '../Topics/Sum';
import Palindrome from '../Topics/Palindrome';
import FilterString from '../Topics/FilterString';
import FilterObject from '../Topics/FilterObject';


class TopicBrowser extends Component {
    render (){
        return (
            <div>
                <EvenAndOdd/>
                <Sum/>
                <Palindrome/>
                <FilterString/>
                <FilterObject/>
            </div>
        )
    }
}

export default TopicBrowser;