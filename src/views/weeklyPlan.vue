<template>
  <div class="weeklyPlan">
    <div class="container.fluid">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form class="login-form" @submit.prevent="addWeeklyPlan">
            <a @click="$router.go(-1)">
              <img
                src="https://img.icons8.com/android/20/000000/back.png"
                class="rounded float-left"
              />
            </a>
            <router-link to="/">
              <h1 style="font-size: 20px;">
                <span style="color: #000">F</span>
                <span style="color: #FF7043">oo</span>
                <span style="color: #000">dy</span>
              </h1>
            </router-link>
            <div class="form-group">
              <h2>Weekly plan</h2>
              <h2 @click.prevent="isShowing0 ^= true" for="monday">
                ˇ Monday
              </h2>
              <day-card
                :breakfast="breakfast"
                :brunch="brunch"
                :lunch="lunch"
                :snack="snack"
                :dinner="dinner"
                :day="0"
                class="card"
                v-show="isShowing0"
              />
            </div>
            <div class="form-group">
              <h2 @click.prevent="isShowing1 ^= true" for="tuesday">
                ˇ Tuesday
              </h2>
              <day-card
                :breakfast="breakfast"
                :brunch="brunch"
                :lunch="lunch"
                :snack="snack"
                :dinner="dinner"
                :day="1"
                class="card"
                v-show="isShowing1"
              />
            </div>
            <div class="form-group">
              <h2 @click.prevent="isShowing2 ^= true" for="wednesday">
                ˇ Wednesday
              </h2>
              <day-card
                :breakfast="breakfast"
                :brunch="brunch"
                :lunch="lunch"
                :snack="snack"
                :dinner="dinner"
                :day="2"
                class="card"
                v-show="isShowing2"
              />
            </div>
            <div class="form-group">
              <h2 @click.prevent="isShowing3 ^= true" for="thursday">
                ˇ Thursday
              </h2>
              <day-card
                :breakfast="breakfast"
                :brunch="brunch"
                :lunch="lunch"
                :snack="snack"
                :dinner="dinner"
                :day="3"
                v-show="isShowing3"
              />
            </div>
            <div class="form-group">
              <h2 @click.prevent="isShowing4 ^= true" for="friday">
                ˇ Friday
              </h2>
              <day-card
                :breakfast="breakfast"
                :brunch="brunch"
                :lunch="lunch"
                :snack="snack"
                :dinner="dinner"
                :day="4"
                class="card"
                v-show="isShowing4"
              />
            </div>
            <div class="form-group">
              <h2 @click.prevent="isShowing5 ^= true" for="saturday">
                ˇ Saturday
              </h2>
              <day-card
                :breakfast="breakfast"
                :brunch="brunch"
                :lunch="lunch"
                :snack="snack"
                :dinner="dinner"
                :day="5"
                class="card"
                v-show="isShowing5"
              />
            </div>
            <div class="form-group">
              <h2 @click.prevent="isShowing6 ^= true" for="sunday">
                ˇ Sunday
              </h2>
              <day-card
                :breakfast="breakfast"
                :brunch="brunch"
                :lunch="lunch"
                :snack="snack"
                :dinner="dinner"
                :day="6"
                class="card"
                v-show="isShowing6"
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
import router from "@/router";

export default {
  name: "Recipe",

  data() {
    return {
      breakfast: [],
      brunch: [],
      lunch: [],
      snack: [],
      dinner: [],
      user: store.currentUser,
      monday: store.monday,
      tuesday: store.tuesday,
      wednesday: store.wednesday,
      thursday: store.thursday,
      friday: store.friday,
      saturday: store.saturday,
      sunday: store.sunday,
      isShowing0: false,
      isShowing1: false,
      isShowing2: false,
      isShowing3: false,
      isShowing4: false,
      isShowing5: false,
      isShowing6: false,
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
      console.log(bool);
      if (bool == false) {
        return true;
      } else {
        return false;
      }
    },

    addWeeklyPlan() {
      db.collection("weeklyPlan")
        .add({
          monday: this.monday,
          tuesday: this.tuesday,
          wednesday: this.wednesday,
          thursday: this.thursday,
          friday: this.friday,
          saturday: this.saturday,
          sunday: this.sunday,
          user: this.user,
          addedEt: Date.now(),
        })
        .then(() => {
          alert("Data entered in base.");
          router.push({ name: "GroceryList" });
        })
        .catch((e) => {
          alert("Error " + e);
        });
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
