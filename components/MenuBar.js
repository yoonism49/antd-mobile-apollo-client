import React, { Component } from 'react'
import Router from 'next/router'
import { TabBar, Icon } from 'antd-mobile'

export default class MenuBar extends Component {
  render() {
    const {
      pathname,
      children
    } = this.props
    console.log(pathname);
    return (
      <TabBar>
        {tabBarData.map(({ title, icon, selectedIcon, link, dot, component: Component, text }) => (
          <TabBar.Item
            key={link}
            title={title}
            icon={<div style={{'fontSize': '22px', 'margin': '20x'}}>{title}<Icon type={icon} /></div>}
            selectedIcon={<div style={{'fontSize': '22px', 'margin': '20x'}}>{title}<Icon type={selectedIcon} /></div>}
            selected={pathname === link}
            onPress={() => Router.push(link)}
          >
            {children}
          </TabBar.Item>
        ))}
      </TabBar>
    )
  }
}

const tabBarData = [
  {
    title: 'Show Reservation',
    icon: 'check-circle-o',
    selectedIcon: 'check-circle-o',
    link: '/home'

  },
  {
    title: 'Create Reservation',
    icon: 'plus',
    selectedIcon: 'plus',
    link: '/create'
  }
]
