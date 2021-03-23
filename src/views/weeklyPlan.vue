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
              <day-card
                :breakfast="breakfast"
                :brunch="brunch"
                :lunch="lunch"
                :snack="snack"
                :dinner="dinner"
                class="card"
              />
            </div>
            <div class="form-group">
              <h2 @click.prevent="openClose(this.bool)" for="tuesday">
                ˇ Tuesday
              </h2>
              <day-card
                :breakfast="breakfast"
                :brunch="brunch"
                :lunch="lunch"
                :snack="snack"
                :dinner="dinner"
                class="card"
              />
            </div>
            <div class="form-group">
              <h2 @click.prevent="openClose(this.bool)" for="tuesday">
                ˇWednesday
              </h2>
              <day-card
                :breakfast="breakfast"
                :brunch="brunch"
                :lunch="lunch"
                :snack="snack"
                :dinner="dinner"
                class="card"
              />
            </div>
            <div class="form-group">
              <h2 @click.prevent="openClose(this.bool)" for="tuesday">
                ˇThursday
              </h2>
              <day-card
                :breakfast="breakfast"
                :brunch="brunch"
                :lunch="lunch"
                :snack="snack"
                :dinner="dinner"
                class="card"
              />
            </div>
            <div class="form-group">
              <h2 @click.prevent="openClose(this.bool)" for="tuesday">
                ˇFriday
              </h2>
              <day-card
                :breakfast="breakfast"
                :brunch="brunch"
                :lunch="lunch"
                :snack="snack"
                :dinner="dinner"
                class="card"
              />
            </div>
            <div class="form-group">
              <h2
                @click.prevent="this.bool = openClose(this.bool)"
                for="tuesday"
              >
                ˇSaturday
              </h2>
              <day-card
                :breakfast="breakfast"
                :brunch="brunch"
                :lunch="lunch"
                :snack="snack"
                :dinner="dinner"
                class="card"
              />
            </div>
            <div class="form-group">
              <h2 @click.prevent="openClose(this.bool)" for="tuesday">
                ˇSunday
              </h2>
              <day-card
                :breakfast="breakfast"
                :brunch="brunch"
                :lunch="lunch"
                :snack="snack"
                :dinner="dinner"
                class="card"
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
          this.snack = []; // ime liste koju koristimo
          query.forEach((doc) => {
            const data = doc.data();
            this.snack.push({
              // promjeni ime u pravu listi !!
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
