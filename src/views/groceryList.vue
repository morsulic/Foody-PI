<template>
  <div class="groceryList">
    <div class="container.fluid">
      <div class="white-block">
        <div class="row">
          <div class="col-sm"></div>
          <div class="col-sm">
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
          <div class="col-sm"></div>
          <div class="col-sm">
            <h2>Grocery list</h2>
          </div>
          <div class="col-sm"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "@/firebase";
import store from "@/store";
import WeeklyPlanCard from "../components/weeklyPlanCard.vue";

export default {
  name: "GroceryList",
  data() {
    return {
      weeklyPlan: [],
    };
  },
  methods: {},
  mounted() {
    //dohvat iz Firebase
    this.getWeeklyPlan;
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
  },
  components: {
    WeeklyPlanCard,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

table {
  font-size: 9px;
}
</style>
