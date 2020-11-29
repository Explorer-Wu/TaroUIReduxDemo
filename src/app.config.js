export default {
  pages: [
    'pages/playlist/index',
    'pages/found/index',
    'pages/user/index'
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#00C5DC",
    // navigationBarTitleText: "WeChat",
    navigationBarTitleText: '知音云音乐',
    navigationBarTextStyle: 'white'
  },
  tabBar: {
    color: '#ffffff',
    selectedColor: '#DCCC00',
    backgroundColor: '#00AFDC',
    list: [{
      pagePath: 'pages/found/index',
      text: '发现音乐',
      iconPath: 'asset/images/music.png',
      selectedIconPath: 'asset/images/music_cur.png'
    }, {
      pagePath: 'pages/playlist/index',
      text: '我的音乐', 
      iconPath: 'asset/images/playlist.png', //text: 20, max: 99
      selectedIconPath: 'asset/images/playlist_cur.png'
    }, {
      pagePath: 'pages/user/index',
      text: '个人中心',
      iconPath: 'asset/images/user.png',
      selectedIconPath: 'asset/images/user_cur.png'
    }]
  },
  // cloud: true,
  // 申明需要后台运行的能力，类型为数组. audio: 后台音乐播放
  requiredBackgroundModes: ["audio"],
  networkTimeout: {
    request: 6000,
    connectSocket: 10000,
    uploadFile: 10000,
    downloadFile: 10000
  }
}
