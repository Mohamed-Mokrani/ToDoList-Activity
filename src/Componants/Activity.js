import React from 'react'

const Activity = ({todoActivity, todoDone, todoDescription}) => {
  return (
    <div className="activity">
          <h1>{todoActivity || "Empty"}</h1>
          <h2 className="description">{todoDescription || "Empty"}</h2>
          <h3>{todoDone || "Not done"}</h3>
        </div>
  )
}

export default Activity