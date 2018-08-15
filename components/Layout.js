import React, { Component } from 'react'
import { LocaleProvider } from 'antd-mobile'
import enUS from 'antd-mobile/lib/locale-provider/en_US'

export default class Layout extends Component {
  render () {
    const {children } = this.props
    const locale =  enUS;

    return (
      <LocaleProvider locale={locale}>
        {children}
      </LocaleProvider>
    )
  }
}
