import React from 'react'

function Loader() {
  return (
    <div className="dots" data-model="1">
    <svg viewBox="0 0 400 400">
    <path className="dot1" d="M 100 200  A 10 10 0 0 1 50 200 A 10 10 0 0 1 100 200 " />
    <path className="dot2" d="M 200 200  A 10 10 0 0 1 150 200 A 10 10 0 0 1 200 200 " />
    <path className="dot3" d="M 300 200  A 10 10 0 0 1 250 200 A 10 10 0 0 1 300 200 " />
    </svg>
  </div>
  )
}

export default Loader
