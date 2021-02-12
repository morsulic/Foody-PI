<template>
  <div class="mainMenu">
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form class="menu-form">
            <h1 style="padding: 45px;">
              <span style="color: #000">F</span>
              <span style="color: #FF7043">oo</span>
              <span style="color: #000">dy</span>
            </h1>

            <button
              type="button"
              @click.prevent="pushRoute"
              class="btn btn-primary menu-button first"
            >
              New weekly plan</button
            ><br />
            <button type="button" class="btn btn-primary menu-button second">
              View recipes</button
            ><br />
            <button type="button" class="btn btn-primary menu-button third">
              Add new food</button
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
    pushRoute() {
      router.push({ name: "WeeklyPlan" });
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
  width: 100%;
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
