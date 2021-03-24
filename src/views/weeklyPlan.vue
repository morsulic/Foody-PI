<template>
  <div class="weeklyPlan">
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form class="login-form">
            <div class="form-group">
              <h2 @click="isShowing" for="monday">
                ˇ Monday
              </h2>
              <day-card
                :breakfast="breakfast"
                :brunch="brunch"
                :lunch="lunch"
                :snack="snack"
                :dinner="dinner"
                :day="1"
                class="card"
                v-if="isShowing"
              />
            </div>
            <div class="form-group">
              <h2 @click="isShowing ^= true" for="tuesday">
                ˇ Tuesday
              </h2>
              <day-card
                :breakfast="breakfast"
                :brunch="brunch"
                :lunch="lunch"
                :snack="snack"
                :dinner="dinner"
                :day="2"
                class="card"
                v-show="isShowing"
              />
            </div>
            <div class="form-group">
              <h2 @click="isShowing ^= true" for="wednesday">
                ˇ Wednesday
              </h2>
              <day-card
                :breakfast="breakfast"
                :brunch="brunch"
                :lunch="lunch"
                :snack="snack"
                :dinner="dinner"
                :day="3"
                class="card"
                v-show="isShowing"
              />
            </div>
            <div class="form-group">
              <h2 @click="isShowing ^= true" for="thursday">
                ˇ Thursday
              </h2>
              <day-card
                :breakfast="breakfast"
                :brunch="brunch"
                :lunch="lunch"
                :snack="snack"
                :dinner="dinner"
                :day="4"
                v-show="isShowing"
              />
            </div>
            <div class="form-group">
              <h2 @click="isShowing ^= true" for="friday">
                ˇ Friday
              </h2>
              <day-card
                :breakfast="breakfast"
                :brunch="brunch"
                :lunch="lunch"
                :snack="snack"
                :dinner="dinner"
                :day="5"
                class="card"
                v-show="isShowing"
              />
            </div>
            <div class="form-group">
              <h2 @click="isShowing ^= true" for="saturday">
                ˇ Saturday
              </h2>
              <day-card
                :breakfast="breakfast"
                :brunch="brunch"
                :lunch="lunch"
                :snack="snack"
                :dinner="dinner"
                :day="6"
                class="card"
                v-show="isShowing"
              />
            </div>
            <div class="form-group">
              <h2 @click="isShowing ^= true" for="sunday">
                ˇ Sunday
              </h2>
              <day-card
                :breakfast="breakfast"
                :brunch="brunch"
                :lunch="lunch"
                :snack="snack"
                :dinner="dinner"
                :day="7"
                class="card"
                v-show="isShowing"
              />
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
      breakfast: [],
      brunch: [],
      lunch: [],
      snack: [],
      dinner: [],
      isShowing: false,
    };
  },
  mounted() {
    //dohvat iz Firebasea
    this.getBreakfast;
    this.getBrunch;
    this.getLunch;
    this.getSnack;
    this.getDinner;
  },
  methods: {
    openClose(bool) {
      if (bool == false) {
        return true;
      } else {
        return false;
      }
    },
  },
  components: {
    dayCard,
  },
  computed: {
    getBreakfast() {
      db.collection("recipe")
        .where("category", "==", "Breakfast")
        .get()
        .then((query) => {
          this.breakfast = [];
          query.forEach((doc) => {
            const data = doc.data();
            this.breakfast.push({
              id: doc.id,
              name: data.name,
            });
          });
        });
    },
    getBrunch() {
      db.collection("recipe")
        .where("category", "==", "Brunch")
        .get()
        .then((query) => {
          this.brunch = [];
          query.forEach((doc) => {
            const data = doc.data();
            this.brunch.push({
              id: doc.id,
              name: data.name,
            });
          });
        });
    },
    getLunch() {
      db.collection("recipe")
        .where("category", "==", "Lunch")
        .get()
        .then((query) => {
          this.lunch = [];
          query.forEach((doc) => {
            const data = doc.data();
            this.lunch.push({
              id: doc.id,
              name: data.name,
            });
          });
        });
    },
    getSnack() {
      db.collection("recipe")
        .where("category", "==", "Snack")
        .get()
        .then((query) => {
          this.snack = [];
          query.forEach((doc) => {
            const data = doc.data();
            this.snack.push({
              id: doc.id,
              name: data.name,
            });
          });
        });
    },
    getDinner() {
      db.collection("recipe")
        .where("category", "==", "Dinner")
        .get()
        .then((query) => {
          this.dinner = [];
          query.forEach((doc) => {
            const data = doc.data();
            this.dinner.push({
              id: doc.id,
              name: data.name,
            });
          });
        });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
