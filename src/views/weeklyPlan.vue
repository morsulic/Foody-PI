<template>
  <div class="weeklyPlan">
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form class="login-form">
            <div class="form-group">
              <h2 @click.prevent="openClose(this.bool1)" for="monday">
                ˇMonday
              </h2>
              <div class="dropdown" v-if="this.bool1 == true">
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
              <h2 @click.prevent="openClose(this.bool2)" for="tuesday">
                ˇTuesday
              </h2>
              <div class="dropdown" v-if="this.bool2 == true">
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
              <h2 @click.prevent="openClose(this.bool3)" for="tuesday">
                ˇWednesday
              </h2>
              <div class="dropdown" v-if="this.bool3 == true">
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
              <h2 @click.prevent="openClose(this.bool4)" for="tuesday">
                ˇThursday
              </h2>
              <div class="dropdown" v-if="this.bool4 == true">
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
              <h2 @click.prevent="openClose(bool5)" for="tuesday">ˇFriday</h2>
              <div class="dropdown" v-if="this.bool5 == true">
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
              <h2
                @click.prevent="this.bool6 = openClose(this.bool6)"
                for="tuesday"
              >
                ˇSaturday
              </h2>
              <div class="dropdown" v-if="this.bool6 == true">
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
              <h2 @click.prevent="openClose(this.bool7)" for="tuesday">
                ˇSunday
              </h2>
              <div class="dropdown" v-if="this.bool7 == true">
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

export default {
  name: "Recipe",

  data() {
    return {
      bool1: false,
      bool2: false,
      bool3: false,
      bool4: false,
      bool5: false,
      bool6: false,
      bool7: false,
      breakfast: "",
      brunch: "",
      lunch: "",
      snack: "",
      dinner: "",
    };
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
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
