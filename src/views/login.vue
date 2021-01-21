<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form class="login-form">
            <img src="@/assets/img/foody.png" alt="" height="200" />
            <h1>
              <span style="color: #000">F</span>
              <span style="color: #FF7043">oo</span>
              <span style="color: #000">dy</span>
            </h1>
            <div class="form-group">
              <input
                type="email"
                v-model="user"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
            </div>
            <div class="form-group" style="padding-bottom:15px;">
              <input
                type="password"
                v-model="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <button type="button" @click="login" class="btn btn-primary">
              Login
            </button>
            <p>
              Don't have an account?
              <router-link to="/signUp">Sign up</router-link>
            </p>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { firebase } from "@/firebase.js";
export default {
  name: "login",
  data() {
    return {
      user: "",
      password: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user, this.password)
        .then((resault) => {
          console.log("You are now loged in :D");
        })
        .catch(function(e) {
          alert(e);
        });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
