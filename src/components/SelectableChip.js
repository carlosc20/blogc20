import React from "react"
import { Switch } from '@headlessui/react'

const SelectableChip = ({ text, isSelected, onChange }) => {

  return (
    <Switch
      checked={isSelected}
      onChange={onChange}
      className={`${isSelected ? "btn-primary-selected" : ""} pill btn-primary`}
      >
      {text}
    </Switch>
  )
}

export default SelectableChip