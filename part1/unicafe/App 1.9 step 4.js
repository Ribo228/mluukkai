import {useState} from 'react'

const Statistics = (props) =>{
  const total = props.good + props.neutral + props.bad
  const avg = (props.good - props.bad)/total
  const pos = props.good*100 / total
  if (total === 0){
    return (
      <div>No feedback given</div>
    )

  }
  return (
    <div>
      <div>good {props.good}</div> 
      <div>neutral {props.neutral}</div>
      <div>bad {props.bad}</div> 
      <div>all {props.total}</div> 
      <div>average {props.avg}</div> 
      <div>positive {props.pos}</div>  
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  return (
    <div>
      <h1>give feedback</h1>     
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
     
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
   
      <h1>statistics</h1>
      <Statistics />      
     

    </div>
  )
}

export default App
