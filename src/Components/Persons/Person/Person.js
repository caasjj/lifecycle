import React from 'react'

import './Person.css'

export default class Person extends React.Component {
  constructor(props) {
    super(props)
    console.log('[Person] Constructor - props: ', props)
    this.state = {}
  }

  componentWillMount() { // *** deprecated ***
    console.log('[Person] ComponentWillMount')
  }

  // Render() occurs here

  componentDidMount() {
    console.log('[Person] ComponentDidMount')
  }

  componentWillUnmount() {
    console.log('[Person] ComponentWillUnmount')
  }

  componentWillReceiveProps(nextProps) { // *** deprecated ***
    console.log(
      '[Person] ComponentsWillReceiveProps - nextProps: ',
      nextProps,
      ' props: ',
      this.props
    )
  }
    
  static getDerivedStateFromProps(nextProps, prevState) {  
    // Use instead of componentWillReceiveProps / componentWillMount / componentWillUpdate
    // Always executed when props change, giving chance to update the state by returning it
    // Note that state should seldom be coupled to props
    console.log('[Person] getDrivedStateFromProps - nextProps: ', nextProps, ' prevState: ', prevState)
    return(prevState)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      '[Person] shouldComponentUpdate - nextProps: ',
      nextProps,
      ' nextState: ',
      nextState
    )

    return nextProps.name !== this.props.name
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Get a snapshot of the actual DOM before it actually updates
    console.log('[Person] getSnapshotBeforeUpdate')
    return 'Person snapshot'
  }

  // following call to `componentWillUpdate`, `render`, `componentDidUpdate will NOT occur if above returns `false`

  componentWillUpdate(nextProps, nextState) { // *** deprecated ***
    console.log(
      '[Person] componentWillUpdate - nextProps: ',
      nextProps,
      ' nextState: ',
      nextState
    )
  }  

  // [Optional] Render() will occur here

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Person] componentDidUpdate - snapshot: ', snapshot)
  }

  render() {
    console.log('[Person] render')
    return (
      <div className="[Person]">
        <p onClick={ () => {console.log('[Person] clicked'); this.props.click()}}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    )
  }
  
}
