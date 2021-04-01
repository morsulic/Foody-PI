<template>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-10">
      <h2 class="recipe">Recipe</h2>
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
          this.Dinner = [];
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
<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
