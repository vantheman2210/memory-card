import React from 'react'; 
import '../Styles/Score.css'

const Score = (props) => { 

  return ( 
    <div className='scoreContainer'> 
      <div className='currentScore'>Score: 0</div> 
      <div className='bestScore'>Best Score: 0</div>
    </div>
  )
} 

export default Score;