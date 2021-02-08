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
              v-for="(ingridient, i) in ingredientes"
              :key="ingredient + i"
              :info="ingredient"
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
    numIngredientesMinus: function(ingridientes) {
      this.ingredientes.splice(ingridientes, 1);
    },
    numIngredientesPlus: function(ingridientes) {
      this.ingredientes.push({
        ingredient: this.ingridient,
        quantity: this.quantity,
        measUnit: this.measUnit,
      });
    },
    addRecipe() {
      for (i in this.ingridientes) {
        this.ingridientes[i].push(
          this.ingridient,
          this.quantity,
          this.measUnit
        );
      }

      const ingred = ingredientes.map((obj) => {
        return Object.assign({}, obj);
      });

      db.collection("recipe")
        .add({
          name: this.name,
          category: this.category,
          ingredientes: this.ingred,
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
