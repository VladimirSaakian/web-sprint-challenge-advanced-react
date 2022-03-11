import axios from 'axios'
import React, {useState} from 'react'

export default function AppFunctional(props) {
  axios.post('http://localhost:9000/api/result', back)
  .then(res=> {
    setMessage(res.data.message)
    setEmail(email)
  })
  .catch(err=> {
    setMessage(err.response.data.message)
  })
  .finally(() => {
    setEmail('')
  })

  const onChange = event => {
    const {value} = event.target
    setEmail(value)
  }
  const moveLeft = () => {
    if(x > 1){
      setX(x-1)
      setSteps(steps + 1)
    } else {
      setMessage("You can't go left")
    }
  }
  const moveRight = () => {
    if(x >= 1 && x < 3){
      setX(x+1)
      setSteps(steps + 1)
    } else {
      setMessage("You can't go right")
    }
  }
  const moveUp = () => {
    if(y > 1 ) {
      setY(y-1)
      setSteps(steps + 1)
    } else {
      setMessage("You can't go up")
    }
  const moveDown = () => {
    if(y >= 1 && y < 3){
      setY(y+1)
      setSteps(steps + 1)
    } else {
      setMessage("You can't go down")
    }
  })
}
  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates (2, 2)</h3>
        <h3 id="steps">You moved 0 times</h3>
      </div>
      <div id="grid">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square active">B</div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
      <div className="info">
        <h3 id="message"></h3>
      </div>
      <div id="keypad">
        <button id="left">LEFT</button>
        <button id="up">UP</button>
        <button id="right">RIGHT</button>
        <button id="down">DOWN</button>
        <button id="reset">reset</button>
      </div>
      <form>
        <input id="email" type="email" placeholder="type email"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
