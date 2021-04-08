<template>
  <tr>
    <td>{{ recipe1 }}</td>
    <td>{{ weeklyPlan[0].monday }}</td>
    <td>{{ names }}</td>
  </tr>
</template>

<script>
export default {
  props: ["recipe", "weeklyPlan", "recipe1"],
  name: "IngCard",
  data() {
    return { names: [], ingredientes: [] };
  },
  mounted() {
    this.inputIgredient;
  },
  computed: {
    inputIgredient() {
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
      console.log(this.names);
      let duzina = this.recipe.length;
      for (let i = 0; i < duzina; i++) {
        for (let j = 0; j < 35; j++) {
          if (this.recipe.name[i] == this.names[j].name1) {
            this.ingredientes.push({
              ingredient: this.recipe.ingredientes[i],
            });
          }
        }
      }
      console.log(this.ingredientes);
    },
  },
};
</script>
