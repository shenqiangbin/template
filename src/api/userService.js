import api from './api'
import qs from 'qs'

export default {
  changePwd(oldPwd, newPwd) {
    return api({
      url: '/user/changePwd',
      method: 'post',
      data: qs.stringify({ oldPwd, newPwd }) //这里简写了
    })
  }
}
