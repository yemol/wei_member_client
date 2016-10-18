
// function getAccessToken(name){
//   return request.get('http://127.0.0.1:1901/member/key?key=23423fsdjewirwdsk3434eee989&wei=' + name)
//     .then(res => {
//       return res.data
//     })
// }

import request from 'axios'

export function getUserInfo () {
  const appid = 'wx5aa86e7885f60a8a'
  return request.get('https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect')
    .then(res => {
      return res.data
    })
}
