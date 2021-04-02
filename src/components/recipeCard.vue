<template>
  <div class="card text-center">
    <div class="card-header">{{ info.name }}</div>
    <div class="card-body p-0">
      <img class="card-img-top" :src="info.imageReference" />
    </div>
    <div class="card-footer text-muted">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Ingredient</th>
            <th scope="col">Quantity</th>
            <th scope="col">Meas unit</th>
          </tr>
        </thead>
        <ingredient-card
          v-for="recipes in recipes"
          :key="recipes.id"
          :info="recipes"
        />
      </table>
      <br />
      {{ info.preparation }}
      <br />
      {{ postedFromNow }}
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { db } from "@/firebase";
import ingredientCard from "./ingredientCard.vue";
export default {
  props: ["info"],
  name: "RecipeCard",
  data: function() {
    return {
      recipes: this.info.ingredientes,
      ingredient: [],
      measUnit: [],
      quantity: [],
    };
  },
  mounted() {
    this.getMeal;
  },
  computed: {
    postedFromNow() {
      return moment(this.info.addedEt).fromNow();
    },
  },
  components: { ingredientCard },
};
</script>
