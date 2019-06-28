<template>
  <div>
    <h1>Registration form</h1>

    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email </label>
        <input
          id="exampleInputEmail1"
          type="email"
          class="form-control"
          v-model="email"
          aria-describedby="emailHelp"
          placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          v-model="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password">
      </div>
      <!-- add listener !-->
      <button

      @click="register">
        register
        Register</button>
    </form>
  </div>
</template>

<!-- our Controller -->
<script>
/* eslint-disable */
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
    }
  },
  /*
  watch :{
    email(value) {
      console.log('email has changed',value)
    }
  },
  */
  methods :{
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
      console.log(response.data)
    }
  },
  /*
  mounted() {
    setTimeout(() => {
        this.email = "hello world"
    },2000)
  }

   */
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
