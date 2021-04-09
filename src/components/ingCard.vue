<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Ingredient</th>
        <th scope="col">Quantity</th>
        <th scope="col">Meas unit</th>
      </tr>
    </thead>
    <row-card
      v-for="ingredientes in ingredientes"
      :key="ingredientes.id"
      :info="ingredientes"
    />
  </table>
</template>

<script>
import store from "@/store";
import { db } from "@/firebase";
import rowCard from "./rowCard.vue";
export default {
  components: { rowCard },
  props: ["recipe", "weeklyPlan"],
  name: "IngCard",
  data() {
    return { names: [], ingredientes: [], store, ingList: [] };
  },
  mounted() {
    this.inputNames;
    this.getRecipes;
  },
  computed: {
    inputNames() {
      for (let i = 0; i < 5; i++) {
        this.names.push({
          name1: this.weeklyPlan[0].monday[i],
        });
        this.names.push({
          name1: this.weeklyPlan[0].tuesday[i],
        });
        this.names.push({
          name1: this.weeklyPlan[0].wednesday[i],
        });
        this.names.push({
          name1: this.weeklyPlan[0].thursday[i],
        });
        this.names.push({
          name1: this.weeklyPlan[0].friday[i],
        });
        this.names.push({
          name1: this.weeklyPlan[0].saturday[i],
        });
        this.names.push({
          name1: this.weeklyPlan[0].sunday[i],
        });
      }
    },

    getRecipes() {
      for (let j = 0; j < 35; j++) {
        db.collection("recipe")
          .where("name", "==", this.names[j].name1)
          .get()
          .then((query) => {
            query.forEach((doc) => {
              const data = doc.data();
              this.ingredientes.push({
                row: data.ingredientes,
              });
            });
          });
      }
    },
    inputIngredient() {
      console.log(this.ingredientes);
      this.ingredientes.forEach(function(val, i) {
        this.ingredientes[i].row.forEach(function(value, j) {
          console.log(this.ingredientes[i].row[j]);
          this.ingList.push({
            ingredient: this.ingredientes[i].row[j].ingredient,
            quantity: this.ingredientes[i].row[j].quantity,
            measUnit: this.ingredientes[i].row[j].measUnit,
          });
        });
      });
      console.log(this.ingList);
    },
  },
};
</script>
