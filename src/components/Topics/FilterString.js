import React, {useState} from 'react'

function FilterString() {
  const unFilteredArray = [
    "James",
    "Jessica",
    "Melody",
    "Tyler",
    "Blake",
    "Jennifer",
    "Mark",
    "Maddy",
  ];
  const [input, setInput] = useState('');
  const [display, setDisplay] = useState([]);

  const handleClick = (param) =>{
    let filteredArr = [];
    for(let i=0; i<unFilteredArray.length; i++){
      if(unFilteredArray[i].includes(param)){
        filteredArr.push(unFilteredArray[i])
      }
    }
    setDisplay(filteredArr);
  }

  return (
    <div className="puzzleBox filterStringPB">
    <h4> Filter String </h4>
 
    {/* display */}
    <span className="puzzleText"> Names: {JSON.stringify(unFilteredArray)}</span>
 
    {/* user input */}
    <input className="inputLine" onChange={(e)=>setInput(e.target.value)}></input>
 
    {/* button */}
    <button className="confirmationButton" onClick={()=> handleClick(input)}>Filter</button>
 
    {/* display filtered names */}
    <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(display)} </span>
  </div>
  )
}

export default FilterString