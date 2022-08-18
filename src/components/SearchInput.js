import React from 'react'

export default function SearchInput({ inputValue }) {
    
    

  return (
    <input onChange={(event) => {
        inputValue(event.target.value)
    }}></input>
  )
}
