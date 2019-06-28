<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
            <input
              id="exampleInputEmail1"
              type="email"
              v-model="email"
              aria-describedby="emailHelp"
              placeholder="Enter email">
            <br>
            <input
                type="password"
                v-model="password"
                id="exampleInputPassword1"
                placeholder="Password">
            <!-- add listener !-->
            <br>
            <div class="error" v-html="error" />
            <br>
            <v-btn
              class="cyan"
              @click="register">
              Register</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
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
