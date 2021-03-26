<template>
  <div class="card text-left">
    <div class="card-body p-0">
      <label for="breakfast">proba: </label>
      <div class="dropdown" id="dropdown">
        <input
          v-model.trim="inputValue"
          class="dropdown-input"
          type="text"
          placeholder="Search..."
          v-if="Object.keys(selectedItem).length === 0"
        />
        <div v-else @click="resetSelection" class="dropdown-selected">
          <dropdown-card></dropdown-card>
        </div>
        <div class="dropdown-list">
          <dropdown-card
            v-for="breakfast in breakfast"
            :key="breakfast.id"
            :info="breakfast"
            class="dropdown-item"
            v-show="itemVisible(breakfast)"
            @click="selectItem(breakfast)"
          />
        </div>
      </div>

      <label for="breakfast">breakfast: </label>
      {{ day }}
      <select
        v-model="breakfast1[day]"
        class="form-control mr-sm-2"
        id="pretraga"
        type="search"
        placeholder="breakfast[0].name"
        aria-label="Search"
      >
        <dropdown-card
          v-for="breakfast in breakfast"
          :key="breakfast.id"
          :info="breakfast"
        />
      </select>

      <label for="brunch">brunch: </label>
      <select
        v-model="brunch1[day]"
        class="form-control mr-sm-2"
        id="pretraga"
        type="search"
        placeholder="Search..."
        aria-label="Search"
      >
        <dropdown-card
          v-for="brunch in brunch"
          :key="brunch.id"
          :info="brunch"
        />
      </select>
      <label for="lunch">lunch: </label>
      <select
        v-model="lunch1[day]"
        class="form-control mr-sm-2"
        id="pretraga"
        type="search"
        placeholder="Search..."
        aria-label="Search"
      >
        <dropdown-card v-for="lunch in lunch" :key="lunch.id" :info="lunch" />
      </select>
      <label for="snack">snack: </label>
      <select
        v-model="snack1[day]"
        class="form-control mr-sm-2"
        id="pretraga"
        type="search"
        placeholder="Search..."
        aria-label="Search"
      >
        <dropdown-card v-for="snack in snack" :key="snack.id" :info="snack" />
      </select>
      <label for="dinner">dinner: </label>
      <select
        v-model="dinner1[day]"
        class="form-control mr-sm-2"
        id="pretraga"
        type="search"
        placeholder="Search..."
        aria-label="Search"
      >
        <dropdown-card
          v-for="dinner in dinner"
          :key="dinner.id"
          :info="dinner"
        />
      </select>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import dropdownCard from "./dropdownCard.vue";
export default {
  components: { dropdownCard },
  props: ["breakfast", "brunch", "lunch", "snack", "dinner", "day"],
  name: "DayCard",
  data() {
    return {
      inputValue: "",
      selectedItem: {},
      breakfast1: [],
      brunch1: [],
      lunch1: [],
      snack1: [],
      dinner1: [],
      store,
      listLoaded: true,
    };
  },
  methods: {
    itemVisible(item) {
      let currentName = item.name.toLowerCase();
      let currentInput = this.inputValue.toLowerCase();
      return currentName.includes(currentInput);
    },
    selectItem(theItem) {
      this.selectedItem = theItem;
      this.inputValue = "";
      this.$emit("on-item-selected", theItem);
    },
    resetItem() {
      this.selectedItem = {};
      this.$nextTick(() => this.$refs.dropdowninput.focus());
      this.$emit("on-item-reset");
    },
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

.dropdown {
  position: relative;
  width: 100%;
  margin: 0 auto;
}
.dropdown-list {
  display: absolute;
  position: relative;
  padding: 10px 16px;
}
.dropdown-input {
  width: 100%;
  padding: 10px 16px;
  border: 1px solid transparent;
  background: #edf2f7;
  line-height: 1.5em;
  outline: none;
  border-radius: 8px;
}
.dropdown-input:focus {
  background: #fff;
  border-color: #e2e8f0;
}
.dropdown-input::placeholder {
  opacity: 0.7;
}
</style>
