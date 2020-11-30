import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtAvatar, AtNavBar, AtButton, AtAccordion, AtList, AtListItem } from 'taro-ui'
import horse from '../../asset/images/horse.jpeg'
// import "taro-ui/dist/style/components/button.scss" // 按需引入
// import './index.scss'

export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      open: false,
    }
    this.handleOClose = this.handleOClose.bind(this)
    this.handleBack = this.handleBack.bind(this)
  }

  handleBack(val) {
    Taro.navigateBack({
      delta: val
    })
  }

  handleOClose (value) {
    this.setState({
      open: value
    })
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        <AtNavBar
          // onClickRgIconSt={this.handleClick}
          // onClickRgIconNd={this.handleClick}
          onClickLeftIcon={this.handleBack}
          color='#000'
          title='个人中心'
          leftIconType='chevron-left'
          rightFirstIconType='bullet-list'
        />
        <View className='page-box at-row'>
          <View className='at-col at-col-2'>
            <AtAvatar size='large' circle image={horse}></AtAvatar>
          </View>
          <View className='at-col at-col-8'>
            <View className='topr-title'>
              梧韵
              <Text className='txt'>L.v 5.0</Text>
            </View>
          </View>
          <View className='at-col at-col-2'>
            <Text className='orange'>签到</Text>
          </View>
        </View>
          
        <AtAccordion 
          title='账户信息'
          open={this.state.open}
          onClick={this.handleOClose}
          icon={{ value: 'chevron-down', color: 'red', size: '15' }}
        >
          <AtList hasBorder={false}>
            <AtListItem
              title='个人资料'
              arrow='right'
              thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
            />
            <AtListItem
              title='我的收藏'
              note='描述信息'
              arrow='right'
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            />
            <AtListItem
              title='我的消息'
              extraText='详细信息'
              arrow='right'
              thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
            />
          </AtList>
        </AtAccordion>

        <AtList className='mar-15-0'>
          <AtListItem
            title='设置'
            arrow='right'
            iconInfo={{ size: 20, color: '#9e9e9e', value: 'settings', }}
          />
          <AtListItem
            title='扫一扫'
            arrow='right'
            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
          />
          <AtListItem
            title='个性换肤'
            arrow='right'
            iconInfo={{ size: 20, color: '#9e86fe', value: 'eye', }}
          />
          <AtListItem
            title='优惠卷'
            arrow='right'
            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
          />
        </AtList>
      </View>
    )
  }
}