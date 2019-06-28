import Api from '@/services/Api'

export default {
  register (cordentials) {
    return Api().post('register', cordentials)
  }
}

/**
AuthenticationService.register({
  email :
  password
})
*/
