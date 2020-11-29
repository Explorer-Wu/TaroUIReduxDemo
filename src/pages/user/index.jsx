import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtNavBar, AtButton } from 'taro-ui'

// import "taro-ui/dist/style/components/button.scss" // 按需引入
// import './index.scss'

export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      // current: 1
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <AtNavBar
          onClickRgIconSt={this.handleClick}
          onClickRgIconNd={this.handleClick}
          onClickLeftIcon={this.handleClick}
          color='#000'
          title='个人中心'
          leftIconType='chevron-left'
          rightFirstIconType='bullet-list'
          rightSecondIconType='user'
        />

        <Text>个人设置</Text>

        <AtButton type='primary' circle>支持</AtButton>
        <Text>共建？</Text>
        <AtButton type='secondary' circle>来</AtButton>

      </View>
    )
  }
}