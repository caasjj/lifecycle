import React, {Component} from 'react'

// Use as : withClass(App, 'AppClass')
export default (WrappedComponent, className) => {
    return (props) => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    )
}

// or to make it a stateful component
const withClassWrapper = (WrappedComponent, className) => {

    return class extends Component {
        // this is just a regular component class and we can do anything we
        // can do in any stateful component
        render(props) {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props}/>
                </div>
            )
        }
    }
}

export {withClassWrapper}