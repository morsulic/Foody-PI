<template>
  <div class="container">
    <div class="white-block">
      <a @click="$router.go(-1)">
        <img
          src="https://img.icons8.com/android/20/000000/back.png"
          class="rounded float-left"
        />
      </a>
      <router-link to="/" v-if="store.currentUser">
        <h1 style="font-size: 20px;">
          <span style="color: #000">F</span>
          <span style="color: #FF7043">oo</span>
          <span style="color: #000">dy</span>
        </h1>
      </router-link>
      <div
        class="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div class="col-sm">
          <button
            type="button"
            @click.prevent="changeMeal(0)"
            class="btn btn-primary menu-button first recipe"
            style="margin-right: 0px"
          >
            Breakfast</button
          ><br />
        </div>
        <div class="col-sm">
          <button
            type="button"
            @click.prevent="changeMeal(1)"
            class="btn btn-primary menu-button first recipe"
          >
            Brunch</button
          ><br />
        </div>
        <div class="col-sm">
          <button
            type="button"
            @click.prevent="changeMeal(2)"
            class="btn btn-primary menu-button first recipe"
          >
            Lunch</button
          ><br />
        </div>
        <div class="col-sm">
          <button
            type="button"
            @click.prevent="changeMeal(3)"
            class="btn btn-primary menu-button first recipe"
          >
            Snack</button
          ><br />
        </div>
        <div class="col-sm">
          <button
            type="button"
            @click.prevent="changeMeal(4)"
            class="btn btn-primary menu-button first recipe"
          >
            Dinner</button
          ><br />
        </div>
      </div>
      <br />
      <div class="col-11">
        <form class="form-inline">
          <input
            v-model="store.searchTerm"
            class="form-control mr-sm-2"
            id="pretraga"
            type="search"
            placeholder="Pretraga"
            aria-label="Search"
          />
        </form>
      </div>
      <br />
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <recipe-card
            v-for="breakfast in filterBreakfast"
            :key="breakfast.id"
            :info="breakfast"
            class="card"
            v-show="isShowing0"
          />
          <recipe-card
            v-for="brunch in filterBrunch"
            :key="brunch.id"
            :info="brunch"
            class="card"
            v-show="isShowing1"
          />
          <recipe-card
            v-for="lunch in filterLunch"
            :key="lunch.id"
            :info="lunch"
            class="card"
            v-show="isShowing2"
          />
          <recipe-card
            v-for="snack in filterSnack"
            :key="snack.id"
            :info="snack"
            class="card"
            v-show="isShowing3"
          />
          <recipe-card
            v-for="dinner in filterDinner"
            :key="dinner.id"
            :info="dinner"
            class="card"
            v-show="isShowing4"
          />
        </div>
        <br />
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
import recipeCard from "@/components/recipeCard.vue";
import store from "@/store";
import { db } from "@/firebase";

export default {
  name: "Recipes",
  data: function() {
    return {
      breakfast: [],
      brunch: [],
      lunch: [],
      snack: [],
      dinner: [],
      isShowing0: true,
      isShowing1: false,
      isShowing2: false,
      isShowing3: false,
      isShowing4: false,
      store,
      recipe: [],
    };
  },
  methods: {
    changeMeal(i) {
      if (i == 0) {
        this.isShowing0 = true;
        this.isShowing1 = false;
        this.isShowing2 = false;
        this.isShowing3 = false;
        this.isShowing4 = false;
      }
      if (i == 1) {
        this.isShowing0 = false;
        this.isShowing1 = true;
        this.isShowing2 = false;
        this.isShowing3 = false;
        this.isShowing4 = false;
      }
      if (i == 2) {
        this.isShowing0 = false;
        this.isShowing1 = false;
        this.isShowing2 = true;
        this.isShowing3 = false;
        this.isShowing4 = false;
      }
      if (i == 3) {
        this.isShowing0 = false;
        this.isShowing1 = false;
        this.isShowing2 = false;
        this.isShowing3 = true;
        this.isShowing4 = false;
      }
      if (i == 4) {
        this.isShowing0 = false;
        this.isShowing1 = false;
        this.isShowing2 = false;
        this.isShowing3 = false;
        this.isShowing4 = true;
      }
    },
  },
  mounted() {
    this.getBreakfast;
    this.getBrunch;
    this.getLunch;
    this.getSnack;
    this.getDinner;
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
              imageReference: data.imageReference,
              addedEt: data.addedEt,
              category: data.category,
              ingredientes: data.ingredientes,
              preparation: data.preparation,
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
              addedEt: data.addedEt,
              category: data.category,
              ingredientes: data.ingredientes,
              preparation: data.preparation,
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
              addedEt: data.addedEt,
              category: data.category,
              ingredientes: data.ingredientes,
              preparation: data.preparation,
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
              addedEt: data.addedEt,
              category: data.category,
              ingredientes: data.ingredientes,
              preparation: data.preparation,
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
              addedEt: data.addedEt,
              category: data.category,
              ingredientes: data.ingredientes,
              preparation: data.preparation,
            });
          });
        });
    },

    filterBreakfast() {
      let termin = this.store.searchTerm;

      return this.breakfast.filter(
        (breakfast) =>
          breakfast.name.includes(termin) ||
          breakfast.preparation.includes(termin)
      );
    },
    filterBrunch() {
      let termin = this.store.searchTerm;

      return this.brunch.filter(
        (brunch) =>
          brunch.name.includes(termin) || brunch.preparation.includes(termin)
      );
    },
    filterLunch() {
      let termin = this.store.searchTerm;

      return this.lunch.filter(
        (lunch) =>
          lunch.name.includes(termin) || lunch.preparation.includes(termin)
      );
    },
    filterSnack() {
      let termin = this.store.searchTerm;

      return this.snack.filter(
        (snack) =>
          snack.name.includes(termin) || snack.preparation.includes(termin)
      );
    },
    filterDinner() {
      let termin = this.store.searchTerm;

      return this.dinner.filter(
        (dinner) =>
          dinner.name.includes(termin) || dinner.preparation.includes(termin)
      );
    },
  },
  components: {
    recipeCard,
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/main.scss";

button.recipe {
  font-size: 10px !important;
  background-color: white !important;
  color: grey;
  width: 70px !important;
  margin-right: -30px !important;
  text-align: left;
}

button.recipe:hover {
  color: #000;
  background-color: white !important;
  border: 0px;
}

button.recipe:active {
  border: 0px !important;
  color: rgb(240, 137, 3);
}
</style>
