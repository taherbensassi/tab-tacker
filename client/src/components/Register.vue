<template>
  <div>
    <h1>Registration form</h1>
        <input
          id="exampleInputEmail1"
          type="email"
          class="form-control"
          v-model="email"
          aria-describedby="emailHelp"
          placeholder="Enter email">

        <input
          type="password"
          v-model="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password">
      <!-- add listener !-->
      <div class="error" v-html="error" />
      <br>
      <button
      @click="register">
        register
        Register</button>

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
      error: null
    }
  },
  /*
  watch :{
    email(value) {
      console.log('email has changed',value)
    }
  },
  */
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
      } catch (error) {
          this.error = error.response.data.error
      }

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
  .error{
    color:red;
  }
</style>
