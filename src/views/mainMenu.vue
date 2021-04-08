<template>
  <div class="mainMenu">
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form class="menu-form">
            <img
              src="https://img.icons8.com/android/18/000000/shutdown.png"
              class="rounded float-right"
            />
            <h1 style="padding: 45px;">
              <span style="color: #000">F</span>
              <span style="color: #FF7043">oo</span>
              <span style="color: #000">dy</span>
            </h1>
            <button
              type="button"
              @click.prevent="pushRoute1"
              class="btn btn-primary menu-button first"
            >
              New weekly plan</button
            ><br />
            <button
              type="button"
              @click.prevent="pushRoute2"
              class="btn btn-primary menu-button second"
            >
              View recipes</button
            ><br />
            <button
              type="button"
              @click.prevent="pushRoute3"
              class="btn btn-primary menu-button third"
            >
              Add new recipes</button
            ><br />
            <p style="padding-bottom:140px;"></p>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
<script>
import router from "@/router";
export default {
  name: "mainMenu",
  data() {
    return {};
  },
  methods: {
    pushRoute1() {
      router.push({ name: "WeeklyPlan" });
    },
    pushRoute2() {
      router.push({ name: "Recipes" });
    },
    pushRoute3() {
      router.push({ name: "Recipe" });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

button.menu-button {
  background-color: $green !important;
  border: 0 !important;
  font-size: 14px;
  font-weight: bold;
  height: 40px;
  margin-top: 10px;
  outline: 0;
  text-transform: uppercase;
  width: 70% !important;
}

form.menu-form {
  background-image: url("../assets/img/mainMenu.png");
  background-position: right top;
  background-color: #fff;
  border-radius: 5px;
  margin: 50px auto 0 auto;
  padding: 25px 15px;
  text-align: center;
  width: 375px;
}

button.first {
  background-color: #8bc34a !important;
}

button.second {
  background-color: #9dcc66 !important;
}

button.third {
  background-color: #b4da88 !important;
}
</style>
