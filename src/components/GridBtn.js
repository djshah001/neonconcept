import React from 'react'

function GridBtn(props) {
  return (
    <button type="button" className="button_mains  m-1" onClick={props.onClick} >
      {props.name}
    </button>
  )
}

export default GridBtn