import React from "react"
import { Switch } from '@headlessui/react'

const SelectableChip = ({ text, isSelected, onChange }) => {

  return (
    <Switch
      checked={isSelected}
      onChange={onChange}
      className={`${isSelected ? "btn-test-selected" : "btn-test"} pill `}
      >
      {text}
    </Switch>
  )
}

export default SelectableChip