import React, {Component} from 'react'
import {
  WhiteSpace, WingBlank,
  NavBar, Icon, Pagination
} from 'antd-mobile'
import Layout from '../components/Layout'
import MenuBar from '../components/MenuBar'
import Reservations from '../components/Reservations'
import WithApollo from '../lib/with-apollo'
export class Home extends Component {
  static getInitialProps ({ req }) {
    const language = req ? req.headers['accept-language'] : navigator.language

    return {
      language
    }
  }

  render () {
    const {
      language,
      url: { pathname }
    } = this.props

    return (
      <Layout>
        <MenuBar
          pathname={pathname}
        >
         
          <WhiteSpace />
          <Pagination total={5} current={0} />
          <WhiteSpace />
          <Reservations/>
          
        </MenuBar>
      </Layout>
    )
  }
}

export default WithApollo(Home)