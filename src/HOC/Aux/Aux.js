import React from 'react'

// Now, we can wrap elements to be returned e.g. in
// render(props) {
//     return( 
//      <Aux><Components/></Aux>
//     )
// }
//
// ... and there will not be an extra <div> in the DOM
//
// Note that React 16 has this implemented as an empty tag:
// render(props) {
//     return( 
//      <><Components/></>
//     )
// }
//
// The above has exactly the same functionality as <Aux>
export default (props) =>  props.children