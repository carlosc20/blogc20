import React from "react"
import TagChip from "./tag-chip"

const PostFilterList = ({ filters, onAdd, onRemove }) => {
  return (
    <ul>
      {filters.map((tag) => (
        <li className="inline pr-4" >
          <TagChip 
            text={tag} onAdd={onAdd} onRemove={onRemove} />
        </li>
      ))}
    </ul>
  )
}

export default PostFilterList
