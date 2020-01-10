import React from 'react';

class Cell extends React.Component {

constructor(props) {
    super(props)
    this.state = {
        color: this.props.value
    }
}

changeState = () => {
    const newColor = '#333'
    this.setState({
        color: newColor
    })
}

render() {
    return (
      <div onClick={this.changeState} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }


}

export default Cell