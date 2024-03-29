import {useState} from 'react'
const Statistics = (props) => {

  const total = props.good+props.neutral+props.bad
  const avg = (props.good-props.bad)/total
  const pos = props.good*100/total

  if (total===0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <tr>
      <StatisticLine text="good" value ={props.good} /> 
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="all" value ={total} />
      <StatisticLine text="average" value ={avg} />
      <StatisticLine text="positive" value ={pos} />
      </tr>
    </div>

  )
}

const Button = (props) => {
  return <button onClick={props.handleClick}> {props.text}</button>
}

const StatisticLine = (props) => {
  return(
       <tr>           
        <td>{props.text}</td> 
        <td>{props.value}</td>
       </tr>     
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good+neutral+bad

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
export default App
