<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Ingredient</th>
        <th scope="col">Quantity</th>
        <th scope="col">Meas unit</th>
        <th>{{ ingredientes[0] }}</th>
      </tr>
    </thead>
    <row-card
      v-for="ingredientes in ingredientes"
      :key="ingredientes.id"
      :info="ingredientes.ingredientes"
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
    return { names: [], ingredientes: [], store };
  },
  mounted() {
    this.inputNames;
    //this.inputIngredientes;
    this.getRecipes;
    //this.inputIngredientes;
  },
  computed: {
    inputNames() {
      //console.log(this.recipe);
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
                ingredientes: data.ingredientes,
              });
            });
          });
      }
    },
  },
};
</script>
