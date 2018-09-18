import React from 'react'
import Person from './Person/Person'

export default class Persons extends React.Component {

  constructor(props) {
    super(props)
    console.log('[Persons] Constructor - props: ', props)
    this.state = {}

  }

  componentWillMount() { // *** deprecated ***
    console.log('[Persons] ComponentWillMount')
  }

  // Render() occurs at this state

  componentWillUnmount() {
    console.log('[Persons] ComponentWillUnmount')
  }

  componentWillReceiveProps(nextProps) { // *** deprecated ***
    console.log('[Persons] ComponentsWillReceiveProps - nextProps: ', nextProps, ' props: ', this.props)
  }

  static getDerivedStateFromProps(nextProps, prevState) {  
    // Use instead of componentWillReceiveProps / componentWillMount / componentWillUpdate
    // Always executed when props change, giving chance to update the state using setState()
    // Note that state should seldom be coupled to props
    console.log('[Persons] getDrivedStateFromProps - nextProps: ', nextProps, ' prevState: ', prevState)
    return(prevState)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      '[Persons] shouldComponentUpdate - nextProps: ',
      nextProps,
      ' nextState: ',
      nextState
    )
    return nextProps.persons !== this.props.persons
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Get a snapshot of the actual DOM before it actually updates
    console.log('[Persons] getSnapshotBeforeUpdate')
    return 'Persons snapshot'
  }

  // following call to `componentWillUpdate`, `render`, `componentDidUpdate will NOT occur if above returns `false`

  componentWillUpdate(nextProps, nextState) {
    console.log(
      '[Persons] componentWillUpdate - nextProps: ',
      nextProps,
      ' nextState: ',
      nextState
    )
  }

  // [Optional] Render() occurs here

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons] componentDidUpdate - snapshot: ', snapshot)
  }

  render() {
    console.log('[Persons] render')
    return this.props.persons.map((person, index) => (
      <Person
        name={person.name}
        age={person.age}
        click={() => { this.props.clicked(index) } }
        changed={event => this.props.changed(event, person.id)}
        key={person.id}
      />
    ))
  }

  
}
