import React from "react"
import SelectableChip from "./SelectableChip"

const FilterList = ({ filters, onChange, onChangeAll, isFilterSelected, areAllFiltersSelected }) => {

  return (
    <ul className="flex flex-wrap gap-3">
      <li key="all">
        <SelectableChip 
          text="all" isSelected={areAllFiltersSelected} onChange={onChangeAll} />
      </li>
      {filters.map((filter) => (
        <li key={filter} >
          <SelectableChip 
            text={filter} isSelected={isFilterSelected(filter)} onChange={state => onChange(filter, state)} />
        </li>
      ))}
    </ul>
  )
}

export default FilterList
