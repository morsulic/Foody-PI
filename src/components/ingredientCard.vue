<template>
  <div class="row">
    <div class="col-4">
      <div class="form-group">
        <label for="ingredient">Ingredient</label>
        <input
          type="text"
          v-model="ingredient"
          class="form-control"
          id="ingredient"
          placeholder="Ingredient"
        />
      </div>
    </div>
    <div class="col-4">
      <div class="form-group">
        <label for="quantity">Quantity</label>
        <input
          type="number"
          v-model="quantity"
          class="form-control"
          id="quantity"
          placeholder="Quantity"
        />
      </div>
    </div>
    <div class="col-4">
      <div class="form-group">
        <label for="measUnit">Meas unit</label>
        <select
          class="form-control"
          id="measUnit"
          type="text"
          v-model="measUnit"
        >
          <option>grams</option>
          <option>mililiters</option>
          <option>piece</option>
          <option>pinch</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"],
  name: "ingredientCard",
  data() {
    return {
      ingredient: "",
      quantity: "",
      measUnit: "",
    };
  },
};
</script>
