<template>
  <div class="card text-left">
    <div class="card-body p-0">
      <label for="breakfast">breakfast: </label>
      <input
        v-model="store.searchTerm"
        class="form-control mr-sm-2"
        id="pretraga"
        type="search"
        placeholder="Search..."
        aria-label="Search"
      />
      <label for="snack">snack: </label>
      <input
        v-model="store.searchTerm"
        class="form-control mr-sm-2"
        id="pretraga"
        type="search"
        placeholder="Search..."
        aria-label="Search"
      />
      <label for="lunch">lunch: </label>
      <input
        v-model="store.searchTerm"
        class="form-control mr-sm-2"
        id="pretraga"
        type="search"
        placeholder="Search..."
        aria-label="Search"
      />
      <label for="snack">snack: </label>
      <input
        v-model="store.searchTerm"
        class="form-control mr-sm-2"
        id="pretraga"
        type="search"
        placeholder="Search..."
        aria-label="Search"
      />
      <label for="dinner">dinner: </label>
      <input
        v-model="store.searchTerm"
        class="form-control mr-sm-2"
        id="pretraga"
        type="search"
        placeholder="Search..."
        aria-label="Search"
      />
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  props: ["info"],
  name: "DayCard",
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss">
.card {
  margin-bottom: 20px;
}

.card input[type="text"] {
  padding: 6px;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
}

/* When the screen is less than 600px wide, stack the links and the search field vertically instead of horizontally */
@media screen and (max-width: 600px) {
  .card input[type="text"] {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
    border-radius: 5px;
    border: 1px solid #c4c4c4;
  }
}
</style>
