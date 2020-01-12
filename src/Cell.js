import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super()
    this.state = {
      color: props.value
    }
  }
  
  handleClick = () => {
    this.setState({
      color: '#333'
    })
  }
  
  render() {
    return (
      <div 
        className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}>
      </div>
    )
  }
  
}

// import React, { Component } from 'react';


// export default class Cell extends Component {
  
// constuctor(props) {
//     super()
//     this.state = {
//         color: this.props.value
//     }
    
// }
// updateState = () => {
//     this.setState({
//         color: "#333"
//     })
// }

// render() {
//     return (
//       <div 
//       className="cell" 
//       style={{backgroundColor: this.state.color}}      
//       onClick={this.updateState}>
//       </div>
//     )
//   }


// }
