import { useState } from 'react'

const Header =(props)  => {
  return (
    <div>
    <h1>{props.text} </h1>
    </div>
  )
}
const Button =({handleClick,text}) =>{
  return (
    <button onClick = {handleClick}> {text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(10))

  const setToSelected = (props) => {
    setSelected(props)
  }

  const setToVotes = () =>{
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
     <Header text = 'Anecdote of the day' />
      <div>{anecdotes[selected]} </div>
      <div>has {votes} votes</div> 
      <Button handleClick={() => setToVotes()} text='vote' />    
      <Button handleClick={() => setToSelected(() => Math.floor(Math.random() * anecdotes.length))} text="next anecdote"/>
   
    <Header text = 'Anecdote with most votes' />   
    <div>{anecdotes[votes.indexOf(Math.max.apply(0,votes))]}</div>
    <div>has {votes[votes.indexOf(Math.max.apply(0,votes))]} votes</div>
    </div>
  )
}

export default App