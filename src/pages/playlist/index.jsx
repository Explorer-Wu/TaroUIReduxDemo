import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtNavBar, AtTabBar, AtList, AtListItem, AtButton } from 'taro-ui'

// import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      current: 1
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render () {
    return (
      <View className='index'>
        <AtNavBar
          onClickRgIconSt={this.handleClick}
          onClickRgIconNd={this.handleClick}
          onClickLeftIcon={this.handleClick}
          color='#000'
          title='我的音乐'
          leftIconType='chevron-left'
          rightFirstIconType='bullet-list'
          rightSecondIconType='user'
        />

        <Text>李健专辑</Text>

        <AtList>
          <AtListItem
            title='深海之行'
            note='李健 - 歌手第三季'
            arrow='right'
            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
          />
          <AtListItem
            title='贝加尔湖畔'
            note='李健 - 歌手第三季 第9期'
            arrow='right'
            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
          />
          <AtListItem
            title='假如爱有天意'
            note='李健 - 我是歌手第三季'
            extraText='详细信息'
            arrow='right'
            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
          />
        </AtList>

        <AtButton type='primary' circle>支持</AtButton>
        <Text>共建？</Text>
        <AtButton type='secondary' circle>来</AtButton>

        {/* <AtTabBar
          fixed
          tabList={[
            { title: '发现音乐', iconType: 'sound' },
            { title: '我的音乐', iconType: 'playlist', text: 20, max: 99},
            { title: '个人中心', iconType: 'user' }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        /> */}
      </View>
    )
  }
}
