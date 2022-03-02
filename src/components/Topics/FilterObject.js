import React, {useState} from 'react'

function FilterObject() {

    const [unfiltered, setUnfiltered] = 
    useState([
        { name: "Jimmy Joe", title: "Hack0r", age: 12 },
        { name: "Jeremy Schrader", age: 24, hairColor: "brown" },
        { name: "Carly Armstrong", title: "CEO" },
      ]);

    const [input, setInput] = useState('')
    const [filtered, setFiltered] = useState([])

    const handleClick = (param) => {
        let filter = [];
        for(let i=0; i<unfiltered.length; i++){
            if(unfiltered[i].hasOwnProperty(param)){
                filter.push(unfiltered[i])
            }
        }
        setFiltered({filter})
    }

  return (
      <div>
        <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText">Original: {JSON.stringify(unfiltered)} </span>
        <input className="inputLine" onChange={(e)=> setInput(e.target.value)}></input>
        <button className="confirmationButton"
        onClick={()=>handleClick(input)}>Filter</button>
        <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(filtered)}</span>
        </div> 
      </div>
  )
}

export default FilterObject;