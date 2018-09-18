import React, { Component } from 'react'
import './App.css'
import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Cockpit/Cockpit'

export default class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    buttonMsg: 'Show Persons',
    showPersons: false
  }

  // Creation lifecycle
  constructor(props) {
    // ABSOLUTELY NO SIDE EFFECTS IN CONSTRUCTOR !!!
    super(props)
    console.log('[App] Constructor done - props: ', props)
  }

  componentWillMount() {
    // Use to update state, do last minute optimization
    // this method is no longer really used, still around mostly for historical reasons
    // NO SIDE EFFECTS
    console.log('[App] ComponentWillMount')
  }

  componentDidMount() {
    // Now, you can do side effects such as fetch data from web
    // DO NOT UPDATE STATE HERE AS IT WILL CAUSE ANOTHER RENDER
    // NO setState() HERE
    console.log('[App] ComponentDidMount **********')
  }

  shouldComponentUpdate(nextProps, nextState) { 
    console.log('[App] shouldComponentUpdate')
    return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons
  }

  componentWillUpdate() { 
    console.log('[App] ComponentWillUpdate')
  }

  componentDidUpdate() {
    console.log('[App] ComponentDidUpdate **********')
  }

  togglePersonsHandler = () => {
    console.log('[APP] state change togglePersonHandler')
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow,
      buttonMsg: doesShow ? 'Show Persons' : 'Hide Persons'
    })
  }

  changePersonNameHandler = (event, id) => {
    console.log('[APP] state change personNameHandler')
    let persons = [...this.state.persons]
    persons.find(item => item.id === id).name = event.target.value
    this.setState({ persons })
  }

  deletePersonHandler = index => {
    console.log('[APP] state change deletePersonHandler')
    let persons = [...this.state.persons]
    persons.splice(index, 1)
    this.setState({ persons })
  }

  render() {
    // This does not necessarily update the DOM!
    // DOM Update only done if change is detected
    // Child components are known at this piont and
    // will be rendered moving down the tree
    console.log('[App] Render')
    const persons = this.state.showPersons ? (
      <Persons
        persons={this.state.persons}
        changed={this.changePersonNameHandler}
        clicked={this.deletePersonHandler}
      />
    ) : (
      [null]
    )
    return (
      <div className="App">
        <Cockpit
          toggle={this.togglePersonsHandler}
          msg={this.state.buttonMsg}
          show={this.state.showPersons}
        />
        {persons}
      </div>
    )
  }
}
