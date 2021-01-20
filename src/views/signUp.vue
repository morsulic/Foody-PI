<template>
  <div class="signUp">
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form class="login-form">
              <h1 style="padding: 45px;">
                <span style='color: #000'>F</span>
                <span style='color: #FF7043'>oo</span>
                <span style='color: #000'>dy</span>
              </h1>
              <h2>Create an account</h2>
            <div class="form-group">
              <input
                type="email"
                v-model="korisnik"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                v-model="lozinka"
                class="form-control"
                id="lozinka1"
                placeholder="Password"
              />
            </div>
            <div class="form-group" style="padding-bottom:15px;">
              <input
                type="password"
                v-model="ponoviLozinku"
                class="form-control"
                id="lozinka2"
                placeholder="Repeat password"
              />
            </div>
            <button type="button" @click="signup" class="btn btn-primary">Sign up</button>
            <p>Already have an account? <router-link to="/login">Log in</router-link></p>
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
  name: "Signup",
  data() {
    return {
      korisnik: "",
      lozinka: "",
      ponoviLozinku: "",
    };
  },

  methods: {
    signup() {
      if (this.lozinka === this.ponoviLozinku) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.korisnik, this.lozinka)
          .then(function() {
            console.log("Uspješna registracija");
          })
          .catch(function(error) {
            alert(error);
          });
      } else {
        alert("Lozinka i ponovljena lozinka moraju biti identične.");
      }

      console.log("Nastavak");
    },
  },
};
</script>

<style lang="scss">
  @import '@/assets/scss/main.scss';
</style>

