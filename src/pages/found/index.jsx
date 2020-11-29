import React, { Component } from 'react'
import { View, Swiper, SwiperItem, Image, Video } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtNavBar } from 'taro-ui'

import nangaoyin3 from '../../asset/images/3danangaoyin.jpeg'
import lijian1 from '../../asset/images/lijian1.jpeg'
import wanghongwei from '../../asset/images/wanghongwei.jpeg'
import huangheyy from '../../asset/images/huangheyy.jpg'
import leijia from '../../asset/images/leijia.jpg'
import liaochy from '../../asset/images/liaochangyong.jpg'

import sixkj from '../../asset/media/sixkeji.mp4'
// export default class Index extends Taro.Component
export default class Found extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const tabList = [{ title: '音乐' }, { title: '视频' }, { title: '直播' }]
    const imgList = [{
      url: nangaoyin3,
      mode: 'scaleToFill',
      webp: true,
      text: '三大男高音'
    }, {
      url: lijian1,
      mode: 'heightFix',
      webp: true,
      text: '李健'
    }, {
      url: wanghongwei,
      mode: 'aspectFill',
      webp: true,
      text: '王宏伟'
    }, {
      url: huangheyy,
      mode: 'aspectFill',
      webp: false,
      text: '黄河遥遥'
    }, {
      url: leijia,
      mode: 'aspectFit',
      webp: true,
      text: '雷佳'
    }, {
      url: liaochy,
      mode: 'widthFix',
      webp: true,
      text: '廖昌永'
    }]

    const videoList = [{
      url: 'https://music.163.com/78d15cf8-a687-4be7-963b-c833e8172b3a',
      id: 'Vjnanml',
      auto: true,
      loop: false,
      muted: false
    }, {
      url: 'blob:https://www.bilibili.com/a86e7379-4e98-4ec0-a62c-55c2f69c4210',
      id: 'Vmudhua',
      auto: false,
      loop: true,
      muted: false
    }, {
      url: sixkj,
      id: 'Vsixkj',
      auto: false,
      loop: false,
      muted: true
    }]

    return (
      <View className='index'>
        <AtNavBar
          onClickRgIconSt={this.handleClick}
          onClickRgIconNd={this.handleClick}
          onClickLeftIcon={this.handleClick}
          color='#333'
          title='发现音乐'
          leftIconType='chevron-left'
          rightFirstIconType='bullet-list'
        />

        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View style='background-color: #FAFBFC;text-align: center;' >
              <Swiper
                indicatorColor='#999'
                indicatorActiveColor='#333'
                circular
                indicatorDots
                autoplay
              >
                {
                  imgList.map((el, index) => <SwiperItem>
                      <Image key={`img${index}`} src={el.url} webp={el.webp} mode={el.mode} imgProps={el.text} />
                  </SwiperItem>)
                }
                {/* <SwiperItem>
                  <View className='demo-text-1'>
                    <Image src={nangaoyin3} webp='true' />
                  </View>
                </SwiperItem>
                <SwiperItem>
                  <View className='demo-text-2'>
                    <Image src={lijian1}  />
                  </View>
                </SwiperItem>
                <SwiperItem>
                  <View className='demo-text-3'>
                    <Image src={wanghongwei} mode='aspectFill' />
                  </View>
                </SwiperItem>
                <SwiperItem>
                  <View className='demo-text-2'>
                    <Image src={huangheyy} mode='aspectFit' />
                  </View>
                </SwiperItem>
                <SwiperItem>
                  <View className='demo-text-2'>
                    <Image src={leijia} mode='heightFix' />
                  </View>
                </SwiperItem>
                <SwiperItem>
                  <View className='demo-text-2'>
                    <Image src={liaochy} />
                  </View>
                </SwiperItem> */}
              </Swiper>
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <Swiper
              indicatorColor='#999'
              indicatorActiveColor='#333'
              circular
              indicatorDots
              autoplay
            >
              {
                videoList.map(vd => <SwiperItem>
                  <Video
                    key={vd.id}
                    id={vd.id}
                    src={vd.url}
                    autoplay={vd.auto}
                    initialTime='0'
                    poster='https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
                    loop={vd.loop}
                    muted={vd.muted}
                    objectFit='fill'
                  />
                </SwiperItem>)
              }
            </Swiper>
            
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}