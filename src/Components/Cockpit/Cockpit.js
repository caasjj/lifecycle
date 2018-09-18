import React from 'react'
import Lifecycle from '../../Containers/Lifecycle/Lifecycle'
export default (props) => {
  const style = {
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    backgroundColor: props.show ? 'red' : 'green'
  }
  return (
    <div>
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      {props.children}
      <button style={style} onClick={() => { console.log('[Cockpit] button clicked'); props.toggle()} }>
        {props.msg}
      </button>
      <Lifecycle name="New Lifecycle"/>
    </div>
  )
}
