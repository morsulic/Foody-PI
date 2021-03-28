<template>
  <div class="card text-left">
    <div class="card-body p-0">
      {{ day }}
      <label for="breakfast">breakfast: </label>
      <div class="dropdown" id="dropdown">
        <input
          v-model.trim="inputValue[0]"
          list="breakfastList"
          class="dropdown-input"
          type="text"
          placeholder="Search..."
          v-if="Object.keys(selectedItem).length === 0"
        />
        <datalist id="breakfastList">
          <dropdown-card
            v-for="breakfast in breakfast"
            :key="breakfast.id"
            :info="breakfast"
            class="dropdown-item"
            v-show="
              inputValue[0].toString().length > 0 && itemVisible(breakfast, 0)
            "
            @click="
              selectItem(breakfast, 0);
              inputList(day, inputValue);
            "
          />
        </datalist>
      </div>

      <label for="brunch">brunch: </label>
      <div class="dropdown" id="dropdown">
        <input
          v-model.trim="inputValue[1]"
          list="brunchList"
          class="dropdown-input"
          type="text"
          placeholder="Search..."
          v-if="Object.keys(selectedItem).length === 0"
        />
        <datalist id="brunchList">
          <dropdown-card
            v-for="brunch in brunch"
            :key="brunch.id"
            :info="brunch"
            class="dropdown-item"
            v-show="
              inputValue[1].toString().length > 0 && itemVisible(brunch, 1)
            "
            @click="
              selectItem(brunch, 1);
              inputList(day, inputValue);
            "
          />
        </datalist>
      </div>
      <label for="lunch">lunch: </label>
      <div class="dropdown" id="dropdown">
        <input
          v-model.trim="inputValue[2]"
          list="lunchList"
          class="dropdown-input"
          type="text"
          placeholder="Search..."
          v-if="Object.keys(selectedItem).length === 0"
        />
        <datalist id="lunchList">
          <dropdown-card
            v-for="lunch in lunch"
            :key="lunch.id"
            :info="lunch"
            class="dropdown-item"
            v-show="
              inputValue[2].toString().length > 0 && itemVisible(lunch, 2)
            "
            @click="
              selectItem(lunch, 2);
              inputList(day, inputValue);
            "
          />
        </datalist>
      </div>
      <label for="snack">snack: </label>
      <div class="dropdown" id="dropdown">
        <input
          v-model.trim="inputValue[3]"
          list="snackList"
          class="dropdown-input"
          type="text"
          placeholder="Search..."
          v-if="Object.keys(selectedItem).length === 0"
        />
        <datalist id="snackList">
          <dropdown-card
            v-for="snack in snack"
            :key="snack.id"
            :info="snack"
            class="dropdown-item"
            v-show="
              inputValue[3].toString().length > 0 && itemVisible(snack, 3)
            "
            @click="
              selectItem(snack, 3);
              inputList(day, inputValue);
            "
          />
        </datalist>
      </div>
      <label for="dinner">dinner: </label>
      <div class="dropdown" id="dropdown">
        <input
          v-model.trim="inputValue[4]"
          list="dinnerList"
          class="dropdown-input"
          type="text"
          placeholder="Search..."
          v-if="Object.keys(selectedItem).length === 0"
        />
        <datalist id="dinnerList">
          <dropdown-card
            v-for="dinner in dinner"
            :key="dinner.id"
            :info="dinner"
            class="dropdown-item"
            v-show="
              inputValue[4].toString().length > 0 && itemVisible(dinner, 4)
            "
            @click="
              selectItem(dinner, 4);
              inputList(day, inputValue);
            "
          />
        </datalist>
      </div>
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
      inputValue: ["", "", "", "", ""],
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
    inputList(day, inputValue) {
      if (day == 1) {
        for (i in inputValue) {
          store.monday[i] = inputValue[i];
        }
      } else if (day == 2) {
        for (i in inputValue) {
          store.tuesday[i] = inputValue[i];
        }
      } else if (day == 3) {
        for (i in inputValue) {
          store.wednesday[i] = inputValue[i];
        }
      } else if (day == 4) {
        for (i in inputValue) {
          store.thursday[i] = inputValue[i];
        }
      } else if (day == 5) {
        for (i in inputValue) {
          store.friday[i] = inputValue[i];
        }
      } else if (day == 6) {
        for (i in inputValue) {
          store.saturday[i] = inputValue[i];
        }
      } else {
        for (i in inputValue) {
          store.sunday[i] = inputValue[i];
        }
      }
    },
    itemVisible(item, i) {
      let currentName = item.name.toLowerCase();
      let currentInput = this.inputValue[i].toLowerCase();
      return currentName.includes(currentInput);
    },
    selectItem(theItem, i) {
      this.selectedItem = theItem;
      this.inputValue[i] = "";
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
    border: 0px solid #c4c4c4;
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
