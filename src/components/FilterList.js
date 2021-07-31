import React from "react"
import SelectableChip from "./SelectableChip"

const FilterList = ({ filters, onChange, onChangeAll, isFilterSelected, areAllFiltersSelected }) => {

  return (
    <ul>
      <li className="inline pr-4" key="All">
        <SelectableChip 
          text="All" isSelected={areAllFiltersSelected} onChange={onChangeAll} />
      </li>
      {filters.map((tag) => (
        <li className="inline pr-4" key={tag} >
          <SelectableChip 
            text={tag} isSelected={isFilterSelected(tag)} onChange={state => onChange(tag, state)} />
        </li>
      ))}
    </ul>
  )
}

export default FilterList
