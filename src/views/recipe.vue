<template>
  <div class="recipe">
    <div class="container.fluid">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form class="login-form" @submit.prevent="addRecipe">
            <a @click="$router.go(-1)">
              <img
                src="https://img.icons8.com/android/20/000000/back.png"
                class="rounded float-left"
              />
            </a>

            <router-link to="/">
              <h1 style="font-size: 20px;">
                <span style="color: #000">F</span>
                <span style="color: #FF7043">oo</span>
                <span style="color: #000">dy</span>
              </h1>
            </router-link>

            <h2>Recipe</h2>
            <hr class="recipe" />
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
                <option>Dinner</option> </select
              ><br />
              <div class="form-group">
                <croppa
                  :width="150"
                  :height="150"
                  aria-placeholder="Add photo"
                  v-model="imageReference"
                ></croppa>
              </div>
            </div>
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
              <div class="col-4" style="margin-left: -30px;">
                <div class="form-group">
                  <label for="quantity">Quantity</label>
                  <input
                    type="number"
                    v-model="quantity"
                    class="form-control"
                    id="quantity"
                    placeholder="0"
                  />
                </div>
              </div>
              <div class="col-4" style="margin-left: -30px;">
                <div class="form-group">
                  <label for="measUnit">Measure</label>
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
              <div
                class="col-2"
                style="margin-top: 15px; 
              margin-left: -15px;"
              >
                <button
                  type="button"
                  @click.prevent="addIngredient"
                  class="btn btn-primary"
                  style="width:35px; height: 35px;"
                >
                  +
                </button>
              </div>
            </div>
            <div class="form-group">
              <table class="table">
                <tbody v-for="(ing, i) in ingredientes" :key="i">
                  <tr>
                    <th scope="row" style="font-weight: normal;">
                      {{ i + 1 }}
                    </th>
                    <td style="font-weigt: bold; ">
                      {{ ing.ingredient }}
                    </td>
                    <td>{{ ing.quantity }}</td>
                    <td>{{ ing.measUnit }}</td>
                    <td>
                      <button
                        type="button"
                        @click.prevent="deleteIngredient(i)"
                        class="btn btn-primary"
                        style="height:30px; width: 30px; margin-top: -5px; font-size: 10px;"
                      >
                        x
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
          <!--  <form @submit.prevent="numIngredientesMinus">
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
          </form>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { db, storage } from "@/firebase";
import store from "@/store";
//import ingredientCard from "@/components/ingredientCard.vue";

export default {
  name: "Recipe",
  data() {
    return {
      user: store.currentUser,
      name: "",
      category: "",
      ingredientes: [],
      ingredient: "",
      quantity: "",
      measUnit: "",
      preparation: "",
      imageReference: null,
    };
  },
  methods: {
    deleteIngredient(broj) {
      console.log(broj);
      this.ingredientes.splice(broj, 1);
    },
    addIngredient() {
      if (this.ingredient && this.quantity > 0 && this.measUnit) {
        this.ingredientes.push({
          ingredient: this.ingredient,
          quantity: this.quantity,
          measUnit: this.measUnit,
        });
        (this.ingredient = ""),
          (this.quantity = ""),
          (this.measUnit = ""),
          console.log(this.ingredientes);
      } else {
        alert("Some data was not entered or is corrupted!!");
      }
    },
    getImage() {
      //Promise based omotač oko callbacka
      return new Promise((resolveFn, errorFn) => {
        this.imageReference.generateBlob((data) => {
          resolveFn(data);
        });
      });
    },

    addRecipe() {
      this.getImage()
        .then((data) => {
          let imageName = store.currentUser + "/" + Date.now() + ".png";
          return storage.ref(imageName).put(data);
        })
        .then((result) => {
          //arrow funckija čuva this
          //uspješna linija
          return result.ref.getDownloadURL();
        })
        .then((imageReference) => {
          return db.collection("recipe").add({
            imageReference: imageReference,
            name: this.name,
            category: this.category,
            ingredientes: this.ingredientes,
            preparation: this.preparation,
            user: this.user,
            addedEt: Date.now(),
          });
        })
        .then((doc) => {
          alert("Data entered in base.");
          this.name = "";
          this.category = "";
          this.ingredient = "";
          this.quantity = "";
          this.measUnit = "";
          this.preparation = "";
          this.ingredientes = [];
        })
        .catch((e) => {
          alert("Error " + e);
        });
    },
  },

  /* components: {
    ingredientCard,
  },*/
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.hr.recipe {
  display: block;
  margin-top: 0px;
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 0;
  border-width: 7px;
  width: 100%;
  color: #9bcb3b !important;
}

select {
  margin: auto;
  width: 80% !important;
  height: 35px !important;
}

h2 {
  text-align: center;
}

button {
  border-radius: 5px;
  padding: 0.3em;
  font-size: 13px;
  cursor: pointer;
  transition: 0.5s;
}

th,
td {
  border-bottom: 0px solid #ddd !important;
  border-top: 0px;
  text-align: center;
}

label {
  font-size: 10px;
}

option {
  font-size: 12px;
}

table {
  font-size: 13px;
}
</style>
