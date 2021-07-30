import React, { useState } from "react"
import TagChip from "./tag-chip"

const PostFilterList = ({ filters, onChange, onChangeAll, isTagSelected, areAllTagsSelected }) => {

  return (
    <ul>
      <li className="inline pr-4" key="All">
        <TagChip 
          text="All" isSelected={areAllTagsSelected} onChange={onChangeAll} />
      </li>
      {filters.map((tag) => (
        <li className="inline pr-4" key={tag} >
          <TagChip 
            text={tag} isSelected={isTagSelected(tag)} onChange={state => onChange(tag, state)} />
        </li>
      ))}
    </ul>
  )
}

export default PostFilterList
