import Api from '@/services/Api'

export default {
  register (cordentials) {
    return Api().post('register', cordentials)
  }
}
/**r
AuthenticationService.register({
  email :
  password
})
*/
