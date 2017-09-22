import React, { Component } from 'react'
import { connect } from 'react-redux'

class View extends Component {
  render () {
    const { DisplayedComponent } = this.props
    return (
      <div>
        <div>
          <div>
            Hello World
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
  }
}

const connectedStateAndProps = connect(mapStateToProps)
export default (connectedStateAndProps(View))
