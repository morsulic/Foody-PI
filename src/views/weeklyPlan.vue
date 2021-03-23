<template>
  <div class="weeklyPlan">
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form class="login-form">
            <div class="form-group">
              <h2 @click.prevent="openClose(this.bool)" for="monday">
                ˇMonday
              </h2>
              <day-card></day-card>
            </div>
            <div class="form-group">
              <h2 @click.prevent="openClose(this.bool)" for="tuesday">
                ˇTuesday
              </h2>
              <day-card></day-card>
            </div>
            <div class="form-group">
              <h2 @click.prevent="openClose(this.bool)" for="tuesday">
                ˇWednesday
              </h2>
              <day-card></day-card>
            </div>
            <div class="form-group">
              <h2 @click.prevent="openClose(this.bool)" for="tuesday">
                ˇThursday
              </h2>
              <day-card></day-card>
            </div>
            <div class="form-group">
              <h2 @click.prevent="openClose(this.bool)" for="tuesday">
                ˇFriday
              </h2>
              <day-card></day-card>
            </div>
            <div class="form-group">
              <h2
                @click.prevent="this.bool = openClose(this.bool)"
                for="tuesday"
              >
                ˇSaturday
              </h2>
              <day-card></day-card>
            </div>
            <div class="form-group">
              <h2 @click.prevent="openClose(this.bool)" for="tuesday">
                ˇSunday
              </h2>
              <day-card></day-card>
            </div>
            <button type="submit" class="btn btn-primary">
              Generate
            </button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "@/firebase";
import store from "@/store";
import dayCard from "@/components/dayCard.vue";
export default {
  name: "Recipe",

  data() {
    return {
      bool: false,
      breakfast: "",
      brunch: "",
      lunch: "",
      snack: "",
      dinner: "",
    };
  },
  methods: {
    openClose(bool) {
      if (this.bool == false) {
        return true;
      } else {
        return false;
      }
    },
  },
  components: {
    dayCard,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
