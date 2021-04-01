<template>
  <div class="card text-center">
    <div class="card-header">{{ info.name }}</div>
    <div class="card-body p-0">
      <img class="card-img-top" :src="info.imageReference" />
    </div>
    <div class="card-footer text-muted">
      {{ info.preparation }}
      <br />
      {{ info.ingredientes }}
      <br />
      {{ postedFromNow }}
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: ["info"],
  name: "RecipeCard",
  computed: {
    postedFromNow() {
      return moment(this.info.addedEt).fromNow();
    },
  },
};
</script>
