import React from 'react'
function Query() {
  return (
    <div className='queryBox'>
      <p>How do you <span>feel</span> today?</p>
      <div className='moodOptions'>
        <button>🤬</button>
        <button>😢</button>
        <button>😒</button>
        <button>😊</button>
        <button>😁</button>
      </div>
    </div>
  )
}

export default Query
