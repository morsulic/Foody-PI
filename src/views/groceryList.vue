<template>
  <div class="groceryList">
    <div class="container.fluid">
      <div class="white-block">
        <div class="row">
          <div class="col-sm"></div>
          <div class="col-sm">
            <a @click="$router.go(-1)">
              <img
                src="https://img.icons8.com/android/20/000000/back.png"
                class="rounded float-left"
              />
            </a>
            <router-link to="/">
              <h1 style="font-size: 20px">
                <span style="color: #000">F</span>
                <span style="color: #ff7043">oo</span>
                <span style="color: #000">dy</span>
              </h1>
            </router-link>
            <h2>Weekly plan</h2>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">/</th>
                  <th scope="col">Breakfast</th>
                  <th scope="col">Brunch</th>
                  <th scope="col">Lunch</th>
                  <th scope="col">Snack</th>
                  <th scope="col">Dinner</th>
                </tr>
              </thead>
              <weekly-plan-card
                v-for="weeklyPlan in weeklyPlan"
                :key="weeklyPlan.id"
                :info="weeklyPlan"
              />
            </table>
          </div>
          <div class="col-sm"></div>
        </div>
        <div class="row">
          <div class="grocery-list">
            <div class="col-sm"></div>
            <div class="col-sm">
              <h2 @click.prevent="isShowingGL ^= true" class="float-left">
                ˇ Grocery list
              </h2>

              <ing-card
                v-for="i in recipe"
                :key="i.id"
                :recipe="recipe"
                :weeklyPlan="weeklyPlan"
                v-show="isShowingGL"
              />
            </div>
            <div class="col-sm"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "@/firebase";
import store from "@/store";
import WeeklyPlanCard from "../components/weeklyPlanCard.vue";
import IngCard from "../components/ingCard.vue";

export default {
  name: "GroceryList",
  data() {
    return {
      weeklyPlan: [],
      recipe: [],
      helpList: ["1"],
      isShowingGL: false,
    };
  },
  methods: {},
  mounted() {
    //dohvat iz Firebase
    this.getWeeklyPlan;
    this.getRecipes;
    this.inputNames;
  },
  computed: {
    getWeeklyPlan() {
      db.collection("weeklyPlan")
        .get()
        .then((query) => {
          this.weeklyPlan = [];
          query.forEach((doc) => {
            const data = doc.data();

            this.weeklyPlan.push({
              monday: data.monday,
              tuesday: data.tuesday,
              wednesday: data.wednesday,
              thursday: data.thursday,
              friday: data.friday,
              saturday: data.saturday,
              sunday: data.sunday,
            });
          });
        });
    },
    getRecipes() {
      db.collection("recipe")
        .get()
        .then((query) => {
          this.recipe = [];
          query.forEach((doc) => {
            const data = doc.data();
            this.recipe.push({
              id: doc.id,
              name: data.name,
              ingredientes: data.ingredientes,
            });
          });
        });
    },
  },
  components: {
    WeeklyPlanCard,
    IngCard,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

table {
  font-size: 9px;
}
</style>
