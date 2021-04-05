<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form class="login-form">
            <h1 class="reset">
              <span style="color: #000">F</span>
              <span style="color: #FF7043">oo</span>
              <span style="color: #000">dy</span>
            </h1>
            <h2 class="reset">
              Reset your password:
            </h2>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="email"
                aria-describedby="emailHelp"
                placeholder="Your email"
              />
            </div>

            <button type="button" @click="sendEmail" class="btn btn-primary">
              <transition name="fade" mode="out-in">
                <span v-if="!emailSending">Send</span>
                <span v-else>Sending...</span>
              </transition>
            </button>
            <p class="reset">
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
  name: "forgotPassword",
  data() {
    return {
      email: "",
      error: null,
      emailSending: false,
    };
  },
  methods: {
    sendEmail() {
      if (!this.email) {
        this.error = "Please type in a valid email address.";
        return;
      }
      this.error = null;
      this.emailSending = true;
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.emailSending = false;
        })
        .catch((error) => {
          this.emailSending = false;
          this.error = error.message;
        });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

h1.reset {
  margin-top: 50px !important;
}

h2.reset {
  font-size: 14px;
  margin-top: 70px;
  margin-bottom: 15px;
}

p.reset {
  margin-top: 100px;
}
</style>
