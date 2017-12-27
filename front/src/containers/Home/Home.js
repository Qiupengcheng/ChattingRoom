import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Sider from 'containers/Sider/Sider'
import Header from 'containers/Header/Header'
import Body from 'containers/Body/Body'

export class Home extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

  render() {
    return (
      <div>
          <div>
            <Header />
          </div>
          <div>
            <Sider />
            <Body />
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
