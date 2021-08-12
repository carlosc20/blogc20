import React from "react"
import SelectableChip from "./SelectableChip"

const FilterList = ({ filters, onChange, onChangeAll, isFilterSelected, areAllFiltersSelected }) => {

  return (
    <ul>
      <li className="inline pr-4" key="All">
        <SelectableChip 
          text="All" isSelected={areAllFiltersSelected} onChange={onChangeAll} />
      </li>
      {filters.map((filter) => (
        <li className="inline pr-4" key={filter} >
          <SelectableChip 
            text={filter} isSelected={isFilterSelected(filter)} onChange={state => onChange(filter, state)} />
        </li>
      ))}
    </ul>
  )
}

export default FilterList
