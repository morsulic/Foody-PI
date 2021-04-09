<template>
  <div class="card">
    <div class="card-header">{{ info.name }}</div>
    <div class="card-body p-3">
      <img class="card-img-top" :src="info.imageReference" />
    </div>
    <div class="card-footer text-muted">
      <table class="table-borderless">
        <thead>
          <tr>
            <th scope="col">Ingredients</th>
            <th scope="col" style="padding: 5px; color: #fff">Quantity</th>
            <th scope="col" style="padding: 5px; color: #fff">Meas unit</th>
          </tr>
        </thead>
        <ingredient-card
          v-for="recipes in recipes"
          :key="recipes.id"
          :info="recipes"
        />
      </table>
      <br />
      <p class="float-left p-recipe">
        <b>Preparation:</b><br />
        {{ info.preparation }}
      </p>
      <br />
      <p class="float-right p-date">{{ postedFromNow }}</p>
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

<style lang="scss">
@import "@/assets/scss/main.scss";

.card {
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: none;
  margin-bottom: -20px;
}

.card-header {
  color: #000;
  font-weight: bold;
  text-align: left;
  background: none;
  border-bottom: none;
  margin-top: 5px;
  margin-bottom: -10px;
  text-decoration: underline;
  text-decoration-color: #8bc34a;
  text-decoration-thickness: 5px;
}

.card-footer {
  background: none;
  border-top: none;
  margin-top: -20px;
  margin-left: -15px;
}

.table-borderless {
  font-size: 12px;
  text-align: left;
  margin: 15px;
  color: #444444;
}

tr,
td {
  padding: 5px 0px;
}

.p-recipe {
  margin-top: -30px;
  text-align: left;
  font-weight: normal;
}

.p-date {
  font-weight: normal;
  color: #9f9f9f;
  margin-top: -20px;
}
</style>
