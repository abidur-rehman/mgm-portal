import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Dashboard extends Component {
  componentWillMount () {
  }
  render () {
    const { dashboardDetails, defaultServices } = this.props
    return (
      <div>
        <div className='content'>
          Welcome User
        </div>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return {

  }
}

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps)
export default connectedStateAndProps(Dashboard)
