import React from "react"

const SelectableChip = ({ name, link, children }) => {

  return (
    <a href={link} 
        target="_blank" 
        rel="noreferrer" 
        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white">
      <span className="sr-only">{name}</span>
      {children}
    </a>
  )
}

export default SelectableChip