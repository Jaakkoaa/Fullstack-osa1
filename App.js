import React, { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = good / all * 100 + "%"
  const [selected, setSelected] = useState(0)
  const points = [0,0,0,0,0,0]
  const [point, setPoint] = useState(points)

  
  const addVotes = (selected, points) => {

  console.log(points)
  const copy = [...point]
  copy[selected] += 1    
  setPoint(copy)
  console.log(copy)
  } 
    
  return (
    <div>
      <h1>give feedback</h1>
      <Buttons good={good} bad={bad} neutral={neutral} setGood={setGood} setBad={setBad} setNeutral={setNeutral}  />
      <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} positive={positive}/>

      <h1>very important sayings</h1>
      <Anecdote selected={selected} point = {point}/>
      <Points selected={selected} points = {point} />
      <Buttons2 selected={selected} points = {point} setSelected={setSelected} addVotes={addVotes}/>

    </div>
  )
}

const Buttons = (props) => {

return (
<div>
      <Button handleClick={() => props.setGood(props.good + 1)} text="good" />
      <Button handleClick={() => props.setNeutral(props.neutral + 1)} text="neutral" />
      <Button handleClick={() => props.setBad(props.bad + 1)} text="bad"/>

</div>
)
}

const Buttons2 = ({selected, points, addVotes, setSelected}) => {

  return (
  <div>
         <Button handleClick={() => setSelected(Math.floor(Math.random() * 6))} text="press for a anecdote"/>
        <Button handleClick={() => addVotes(selected, points)} text="vote"/>
  
  </div>
  )
  }

const Statistics = ({good, bad, neutral, all, average, positive}) => {

  if (all !== 0) { 
    return (
      <div>
      <h1>statistics</h1>
      <table>
      <tbody>
      <StatisticsLine value={good} text="good"/>
      <StatisticsLine value={neutral} text="neutral"/>
      <StatisticsLine value={bad} text="bad"/>
      <StatisticsLine value={average} text="average"/>
      <StatisticsLine value={positive} text="positive"/>
      </tbody>
      </table>
      </div>
    )
  } else {
      return (
        <div>
          <h1>statistics</h1>
          <p>no feedback given</p>
        </div>

      )
  }
}

const StatisticsLine = (props) => {

  return (
    <tr>
    <Display value={props.text}/>
    <Display value={props.value}/>
    </tr>  
  )
}

const Display = (props) =>  <td>{props.value}</td>

const Button = (props) => {
  return (
  <button onClick={props.handleClick}>
  {props.text}
 </button>
  )
}

const Anecdote = ({selected, point}) => {

  const a = Object.values(point)
  const suurin = Math.max(...a)
  const most = a.indexOf(suurin)
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  return (
    <div>
      <h2>most votes</h2>
      {anecdotes[most]}
      <br/><br/><br/>
      <h2>vote for your favorite!</h2>
      {anecdotes[selected]}
   
    </div>
  )
}

const Points = ({selected, points}) => {

  return (
    <div>
      {points[selected]}
    </div>

  )
}




export default App