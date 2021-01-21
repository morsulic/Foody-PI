<template>
  <div class="recipe">
    <div class="container.fluid">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form @submit.prevent="addRecipe">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                v-model="name"
                class="form-control"
                id="name"
                placeholder="Name"
              />
            </div>
            <div class="form-group">
              <label for="category">Category</label>
              <select
                class="form-control"
                id="category"
                type="text"
                v-model="category"
              >
                <option>Breakfast</option>
                <option>Brunch</option>
                <option>Lunch</option>
                <option>Snack</option>
                <option>Dinner</option>
              </select>
            </div>
            <ingredient-card
              v-for="ingredientes in ingredientes"
              :key="ingredientes"
              :info="ingredientes"
            />
            <div class="form-group">
              <label for="preparation">Preparation</label>
              <textarea
                v-model="preparation"
                name="textarea"
                cols="40"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary">
              Add
            </button>
          </form>
        </div>

        <div class="col-sm">
          <form @submit.prevent="numIngredientesMinus">
            <div class="form-group">
              <label for="ing">Remove ingredient</label>
              <input
                type="hidden"
                class="form-control"
                id="numIngredients"
                placeholder="-"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              -
            </button>
          </form>
          <form @submit.prevent="numIngredientesPlus">
            <div class="form-group">
              <label for="ing">Add ingredient</label>
              <input
                type="hidden"
                class="form-control"
                id="numIngredients"
                placeholder="+"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              +
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "@/firebase";
import store from "@/store";
import ingredientCard from "@/components/ingredientCard.vue";
let brojac = 0;
export default {
  name: "Recipe",
  data() {
    return {
      user: store.currentUser,
      ingredientes: [],
      name: "",
      category: "",
      ingredient: "",
      quantity: "",
      measUnit: "",
      preparation: "",
    };
  },
  methods: {
    numIngredientesMinus() {
      brojac = brojac - 1;
      ingridients = [];
      let i = 0;
      for (i; i < brojac; i++) {
        this.ingredientes.pull({
          br: i,
        });
      }
    },
    numIngredientesPlus() {
      brojac++;

      this.ingredientes.push({
        br: brojac,
      });
    },
    addRecipe() {
      db.collection("recipe")
        .add({
          name: this.name,
          category: this.category,
          ingredient: this.ingredient,
          quantity: this.quantity,
          measUnit: this.measUnit,
          preparation: this.preparation,
          user: this.user,
          dodano_u: Date.now(),
        })
        .then(() => {
          console.log("Spremljeno");
          this.name = "";
          this.category = "";
          this.ingredient = "";
          this.quantity = "";
          this.measUnit = "";
          this.preparation = "";
        })
        .catch(function(e) {
          console.error(e);
        });
    },
  },

  components: {
    ingredientCard,
  },
};
</script>
