import React, { useState } from "react"
import {
  selected
} from './tag-chip.module.css'

const TagChip = ({ text, onAdd, onRemove }) => {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <button
      type="button"
      className={`${isSelected ? selected : ""} btn btn-green`} 
      onClick={() => {
        if (isSelected) {
          onRemove(text)
        } else {
          onAdd(text)
        }
        setIsSelected(!isSelected)
      }}
      data-text={text}
      aria-pressed={isSelected.toString()}
    >
      {text}
    </button>
  )
}

export default TagChip