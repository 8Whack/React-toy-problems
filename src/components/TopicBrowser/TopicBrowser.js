import React from 'react'
import EvensAndOdds from '../Topics/EvenAndOdd.js'
import FilterObject from "../Topics/FilterObject"
import FilterString from '../Topics/FilterString.js'
import Palindrome from '../Topics/Palindrome.js'
import Sum from '../Topics/Sum.js'

function TopicBrowser() {
  return (
    <div> 
      <p>Hello World</p>
        <p>Evens and Odds</p>
        <EvensAndOdds />
        <p>Filter Object</p>
        <FilterObject />
        <p>Filter String</p>
        <FilterString />
        <p>Palindrome</p>
        <Palindrome />
        <p>Sum</p>]
        <Sum />
    </div>
  )
}

export default TopicBrowser