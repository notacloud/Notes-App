import {React} from 'react'

export function CreateNote(props){
  return (
    <>
      <div className='card'>
        <h1>You have no notes</h1>
      </div>
      <div className='card'>
        <button onClick={() => props.createNote()}>Create new one</button>
      </div>
    </>
  )
}
