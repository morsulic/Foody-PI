<template>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-10">
      <h2 class="recipe">Recept</h2>
      <recipe-card
        v-for="breakfast in breakfast"
        :key="breakfast.id"
        :info="breakfast"
        class="card"
      />
    </div>
    <div class="col-1"></div>
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
      store,
    };
  },
  mounted() {
    this.getPosts;
    this.getPosts1;
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
          this.Dinner = [];
          query.forEach((doc) => {
            const data = doc.data();
            this.dinner.push({
              id: doc.id,
              name: data.name,
            });
          });
        });
    },

    /*filteredRecipe() {
      let termin = this.store.searchTerm;

      return this.recipe.filter(
        (recipe) =>
          recipe.naslov.includes(terminFiltracije) || recipe.opis.includes(terminFiltracije)
      );
    },*/
  },
  components: {
    recipeCard,
  },
};
</script>
