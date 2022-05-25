import {useState} from 'react'

const Statistics = (props) =>{
  return (
    <div>
      <p> {props.name} {props.point} </p>      
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
      <Statistics name='good' point={good}/>
      <Statistics name='neutrual' point={neutral}/>
      <Statistics name='bad' point={bad}/>    
      <div>average {((good-bad)/(good+neutral+bad))}</div>
      <div>positive {good/(good+neutral+bad) * 100}%</div> 

    </div>
  )
}

export default App
