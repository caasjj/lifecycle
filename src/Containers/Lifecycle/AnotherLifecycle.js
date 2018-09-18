import React, {Component} from 'react'

export default class AnotherLifecycle extends Component {

    // Creation lifecycle
    constructor(props) {
        // ABSOLUTELY NO SIDE EFFECTS IN CONSTRUCTOR !!!
        super(props)
        console.log('[AntherLifecycle] Constructor')
    }

    componentWillMount(){
        // Use to updat state, do last minute optimization
        // this method is no longer really used, still around mostly for historical reasons
        // NO SIDE EFFECTS
        console.log('[AntherLifecycle] ComponentWillMount')
    }

    componentDidMount(){
        // Now, you can do side effects such as fetch data from web
        // DO NOT UPDATE STATE HERE AS IT WILL CAUSE ANOTHER RENDER
        // NO setState() HERE
        console.log('[AntherLifecycle] ComponentDidMount')
    }

    render(){
        // This does not necessarily update the DOM!
        // DOM Update only done if change is detected
        // Child components are known at this piont and 
        // will be rendered moving down the tree
        console.log('[AntherLifecycle] Render')
        return <h1>AntherLifecycle</h1>
    }
    
}