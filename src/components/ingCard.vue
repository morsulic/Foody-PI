<template>
  <tr>
    <td v-if="recipe1[0]">{{ recipe1[0].name }}</td>
    <td>{{ weeklyPlan[0].monday }}</td>
    <td v-if="names[0]">{{ names[0].name1 }}</td>
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

      let length1 = this.recipe1.length;
      for (let i = 0; i < length1; i++) {
        for (let j = 0; j < 35; j++) {
          let name1 = this.recipe1[0].name;
          let name2 = this.names[0].name1;
          console.log(this.recipe1[0].name);
          console.log(this.names[0].name1);
        }
      }
    },
  },
};
</script>
