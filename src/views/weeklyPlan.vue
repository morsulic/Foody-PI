<template>
  <div class="weeklyPlan">
    <div class="container.fluid">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <div class="form-group">
            <h2 @click.prevent="openClose" for="monday">ˇMonday</h2>
            <div class="dropdown" v-if="this.bool == true">
              <label for="breakfast">Breakfast</label>
              <input
                type="text"
                v-model="breakfast"
                class="form-control"
                id="input1"
              />
              <label for="brunch">Brunch</label>
              <input
                type="text"
                v-model="brunch"
                class="form-control"
                id="input1"
              />
              <label for="lunch">Lunch</label>
              <input
                type="text"
                v-model="lunch"
                class="form-control"
                id="input1"
              />
              <label for="snack">Snack</label>
              <input
                type="text"
                v-model="snack"
                class="form-control"
                id="input1"
              />
              <label for="dinner">Dinner</label>
              <input
                type="text"
                v-model="dinner"
                class="form-control"
                id="input1"
              />
            </div>
          </div>
          <div class="form-group">
            <h2 @click.prevent="openClose" for="tuesday">ˇTuesday</h2>
            <div class="dropdown" v-if="this.bool == true">
              <label for="breakfast">Breakfast</label>
              <input
                type="text"
                v-model="breakfast"
                class="form-control"
                id="input1"
              />
              <label for="brunch">Brunch</label>
              <input
                type="text"
                v-model="brunch"
                class="form-control"
                id="input1"
              />
              <label for="lunch">Lunch</label>
              <input
                type="text"
                v-model="lunch"
                class="form-control"
                id="input1"
              />
              <label for="snack">Snack</label>
              <input
                type="text"
                v-model="snack"
                class="form-control"
                id="input1"
              />
              <label for="dinner">Dinner</label>
              <input
                type="text"
                v-model="dinner"
                class="form-control"
                id="input1"
              />
            </div>
          </div>
          <div class="form-group">
            <h2 @click.prevent="openClose" for="tuesday">ˇWednesday</h2>
            <div class="dropdown" v-if="this.bool == true">
              <label for="breakfast">Breakfast</label>
              <input
                type="text"
                v-model="breakfast"
                class="form-control"
                id="input1"
              />
              <label for="brunch">Brunch</label>
              <input
                type="text"
                v-model="brunch"
                class="form-control"
                id="input1"
              />
              <label for="lunch">Lunch</label>
              <input
                type="text"
                v-model="lunch"
                class="form-control"
                id="input1"
              />
              <label for="snack">Snack</label>
              <input
                type="text"
                v-model="snack"
                class="form-control"
                id="input1"
              />
              <label for="dinner">Dinner</label>
              <input
                type="text"
                v-model="dinner"
                class="form-control"
                id="input1"
              />
            </div>
          </div>
          <div class="form-group">
            <h2 @click.prevent="openClose" for="tuesday">ˇThursday</h2>
            <div class="dropdown" v-if="this.bool == true">
              <label for="breakfast">Breakfast</label>
              <input
                type="text"
                v-model="breakfast"
                class="form-control"
                id="input1"
              />
              <label for="brunch">Brunch</label>
              <input
                type="text"
                v-model="brunch"
                class="form-control"
                id="input1"
              />
              <label for="lunch">Lunch</label>
              <input
                type="text"
                v-model="lunch"
                class="form-control"
                id="input1"
              />
              <label for="snack">Snack</label>
              <input
                type="text"
                v-model="snack"
                class="form-control"
                id="input1"
              />
              <label for="dinner">Dinner</label>
              <input
                type="text"
                v-model="dinner"
                class="form-control"
                id="input1"
              />
            </div>
          </div>
          <div class="form-group">
            <h2 @click.prevent="openClose" for="tuesday">ˇFriday</h2>
            <div class="dropdown" v-if="this.bool == true">
              <label for="breakfast">Breakfast</label>
              <input
                type="text"
                v-model="breakfast"
                class="form-control"
                id="input1"
              />
              <label for="brunch">Brunch</label>
              <input
                type="text"
                v-model="brunch"
                class="form-control"
                id="input1"
              />
              <label for="lunch">Lunch</label>
              <input
                type="text"
                v-model="lunch"
                class="form-control"
                id="input1"
              />
              <label for="snack">Snack</label>
              <input
                type="text"
                v-model="snack"
                class="form-control"
                id="input1"
              />
              <label for="dinner">Dinner</label>
              <input
                type="text"
                v-model="dinner"
                class="form-control"
                id="input1"
              />
            </div>
          </div>
          <div class="form-group">
            <h2 @click.prevent="openClose" for="tuesday">ˇSaturday</h2>
            <div class="dropdown" v-if="this.bool == true">
              <label for="breakfast">Breakfast</label>
              <input
                type="text"
                v-model="breakfast"
                class="form-control"
                id="input1"
              />
              <label for="brunch">Brunch</label>
              <input
                type="text"
                v-model="brunch"
                class="form-control"
                id="input1"
              />
              <label for="lunch">Lunch</label>
              <input
                type="text"
                v-model="lunch"
                class="form-control"
                id="input1"
              />
              <label for="snack">Snack</label>
              <input
                type="text"
                v-model="snack"
                class="form-control"
                id="input1"
              />
              <label for="dinner">Dinner</label>
              <input
                type="text"
                v-model="dinner"
                class="form-control"
                id="input1"
              />
            </div>
          </div>
          <div class="form-group">
            <h2 @click.prevent="openClose" for="tuesday">ˇSunday</h2>
            <div class="dropdown" v-if="this.bool == true">
              <label for="breakfast">Breakfast</label>
              <input
                type="text"
                v-model="breakfast"
                class="form-control"
                id="input1"
              />
              <label for="brunch">Brunch</label>
              <input
                type="text"
                v-model="brunch"
                class="form-control"
                id="input1"
              />
              <label for="lunch">Lunch</label>
              <input
                type="text"
                v-model="lunch"
                class="form-control"
                id="input1"
              />
              <label for="snack">Snack</label>
              <input
                type="text"
                v-model="snack"
                class="form-control"
                id="input1"
              />
              <label for="dinner">Dinner</label>
              <input
                type="text"
                v-model="dinner"
                class="form-control"
                id="input1"
              />
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Generate
          </button>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "@/firebase";
import store from "@/store";

export default {
  name: "Recipe",

  data() {
    return {
      bool: [],
      breakfast: "",
      brunch: "",
      lunch: "",
      snack: "",
      dinner: "",
    };
  },
  methods: {
    openClose() {
      if (this.bool == false) {
        this.bool = true;
      } else {
        this.bool = false;
      }
    },
  },
};
</script>
