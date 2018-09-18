import React, {Component} from 'react'

/****
 * 
 * IMPORTANT IDEA:
 * Component updates can occur either internally, or from the parent.
 * Internally, an update occurs when we invoke `setState()`, and externally
 * when the parent sets props.
 * 
 */
export default class Lifecycle extends Component {

    // Creation lifecycle
    constructor(props) {
        super(props)
        console.log('[Lifecycle] Constructor done')
        // NO SIDE EFFECTS, state=... OK - in fact, warning will generate if not done
        this.state = {}
    }

    componentWillMount(){      // *** deprecated ***
        // Deprecated as of React 16.3, will generate warning if defined along with getDerivedStateFromProps
        // and will not be called in that case.
        // Use to update state, do last minute optimization
        // this method is no longer really used, still around mostly for historical reasons
        // NO SIDE EFFECTS, setState() OK
        console.log('[Lifecycle] ComponentWillMount')
    }

    // Render() occurs here
    
    componentDidMount(){
        // Now, you can do side effects such as fetch data from web
        // DO NOT UPDATE STATE HERE AS IT WILL CAUSE ANOTHER RENDER
        // SIDE EFFECTS OK, NO setState()
        console.log('[Lifecycle] ComponentDidMount')
    }

    componentWillReceiveProps(nextProps) {  // *** deprecated ***
        // Deprecated as of React 16.3, will generate warning if defined along with getDerivedStateFromProps
        // and will not be called in that case.
        // Use this point to synchronize component state to props, to derive state from
        // a combination of props (like selectors in redux). Use setState() as a render
        // is pending anyway.  Note that this method will NOT trigger on setState(), only 
        // on the parent changing the props.
        // NO SIDE EFFECTS, setState() OK
        console.log('[LifeCycle] ComponentsWillReceiveProps - nextProps: ', nextProps, ' props: ', this.props)
    }   
  
    static getDerivedStateFromProps(nextProps, prevState) {  
        // Use instead of componentWillReceiveProps / componentWillMount / componentWillUpdate. MUST BE DECLARED `static`
        // Always executed when props change, giving chance to update the new state simply by returning it
        // Note that state should seldom be coupled to props
        console.log('[Lifecycle] getDrivedStateFromProps - nextProps: ', nextProps, ' prevState: ', prevState)
        return(prevState)
    }

    shouldComponentUpdate(nextProps, nextState) {   
        // Use this point to determine whether or not a re-rendering of the component is needed based
        // on changes made either by the parent, through nextProps, or internal state, through nextState.
        // At this point, the state is guaranteed to reflect any changes made by the setState() call
        // in componentWillReceiveProps
        // NO SIDE EFFECTS, NO setState()
        console.log('[LifeCycle] shouldComponentUpdate - nextProps: ', nextProps, ' nextState: ', nextState)

        // Now, do a check of whether any of the relevant props and state parameters have changed that would
        // require this component to re-render:
        //
        // e.g. return (nextProps.person.name !== this.props.person.name || nextState.someValue !== this.state.someValue)
        //
        // Alternatively, we could declare this component to inherit from React.PureComponent instead of React.Component
        // In PureComponents, the component itself will perform the *shallow* check above to determine whether or
        // not to update.  If the comparison required is a deep comparison (i.e. props and states are references), 
        // then you *have* to inherit from Component.  Also, if an update is a foregone conclusion *every* time, then
        // implementing a PureComponent is wasteful because it will *always* run the above check.
        return true
    }

    // following call to `componentWillUpdate`, `render`, `componentDidUpdate will NOT occur if above returns `false`

    componentWillUpdate(nextProps, nextState) {    // *** deprecated ***
        // Deprecated as of React 16.3, will generate warning if defined along with getDerivedStateFromProps
        // and will not be called in that case.
        // You can use this point to synchronize component state to props.  At this point, it is *guaranteed* 
        // that a `render` will take place
        // NO SIDE EFFECTS, setState() OK
        console.log('[LifeCycle] componentWillUpdate - nextProps: ', nextProps, ' nextState: ', nextState)
    }
  
    getSnapshotBeforeUpdate(prevProps, prevState) {
        // Get a snapshot of the actual DOM before it actually updates. Capture any
        // value to be provided to componentDidUpdate
        console.log('[Lifecycle] getSnapshotBeforeUpdate')
        return null
    }

    // [Optional] Render() will occur here, but only if shouldComponentUpdate returned true

    componentDidUpdate(prevProps, prevState, snapshot) {
        // You can cause side effects here, such as Ajax calls.  But, do NOT cause update of the component
        // state here as that will re-trigger a render.  This point is the `update` phase equivalent of
        // `componentDidMount` in the `create` phase of the component.
        // SIDE EFFECTS OK, NO setState()
        console.log('[LifeCycle] componentDidUpdate - snapshot: ', snapshot) 
    }

    componentWillUnmount() {
        console.log('[LifeCycle] componentWillUnmount') 
    }

    render(){
        // This does not necessarily update the actual DOM!
        // DOM Update only done if change is detected
        // Child components are known at this piont and 
        // will be rendered moving down the tree
        // NO SIDE EFFECTS, NO setState()
        console.log('[Lifecycle] Render')
        return <h1>[Lifecycle]</h1>
    }
    
}

Lifecycle.defaultProps = {
    name: 'Lifecycle Class'
}