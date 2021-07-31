import React from "react"
import { Switch } from '@headlessui/react'

const SelectableChip = ({ text, isSelected, onChange }) => {

  return (
    <Switch
      checked={isSelected}
      onChange={onChange}
      className={`${isSelected ? "font-bold ring-4 ring-green-900 ring-opacity-50" : ""} btn btn-green`}
      >
      {text}
    </Switch>
  )
}

export default SelectableChip