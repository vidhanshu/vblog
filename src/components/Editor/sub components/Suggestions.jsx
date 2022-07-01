import React from 'react'

function Suggestions({ filteredSug, setCurrentTag, setIsSuggestion, postNewTagHandler, currentTag }) {
  return (
    <ul className="suggestions">
      {
        filteredSug.length
          ? filteredSug.map((sug, idx) => (
            <li
              key={idx}
              onClick={() => {
                setCurrentTag(sug);
                setIsSuggestion(false);
              }}
              className="sug"
            >
              {sug}
            </li>
          ))
          : <li onClick={postNewTagHandler}>add {currentTag}</li>
      }
    </ul>
  )
}

export default Suggestions