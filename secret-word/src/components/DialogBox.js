import React from 'react'
import { ReactDialogBox } from 'react-js-dialog-box'
import 'react-js-dialog-box/dist/index.css'

class DialogBox extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
  }

  openBox = () => {
    this.setState({
      isOpen: true
    })
  }

  closeBox = () => {
    this.setState({
      isOpen: false
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.openBox}>?</button>

        {this.state.isOpen && (
          <>
            <ReactDialogBox
              closeBox={this.closeBox}
              modalWidth='60%'
              headerBackgroundColor='green'
              headerTextColor='white'
              headerHeight='65'
              closeButtonColor='white'
              bodyBackgroundColor='white'
              bodyTextColor='black'
              bodyHeight='200px'
              headerText='Regras'
            >
              <div>
                <h1>Regras aqui</h1>
              </div>
            </ReactDialogBox>
          </>
        )}
      </div>
    )
  }
}

export default DialogBox