<template>
  <div class="MealDetails-container">
    <div class="mt-4">
      <h3>{{ mealDetails.strMeal }}</h3>
      <b-container fluid class="p-4 bg-light">
        <b-row>
          <b-col>
            <b-img
              thumbnail
              fluid
              :src="mealDetails.strMealThumb"
              class="meal-image"
              alt="Image 1"
            ></b-img>
          </b-col>
          <b-col>
            <table style="width: 90%" border="2px">
              <tr>
                <th>Ingredients</th>
                <th>Measures</th>
              </tr>
              <tr v-for="ingredient in getIngredients" :key="ingredient.id">
                <td>{{ ingredient.ingredient }}</td>
                <td>{{ ingredient.measure }}</td>
              </tr>
            </table>
          </b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col>
            <b-text class="meal-instruction"
              ><span><h3>Instructions</h3></span><br />{{
                mealDetails.strInstructions
              }}</b-text
            >
          </b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col>
            <div class="meal-instruction-video">
              <h3>Youtube Video<br /></h3>
              <b-embed
                type="iframe"
                aspect="16by9"
                fluid
                :src="getYoutubeUrl"
                allowfullscreen
              ></b-embed>
              <br />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "MealDetails",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  computed: {
    ...mapState(["mealDetails"]),
    ...mapGetters(["getIngredients", "getYoutubeUrl"]),
  },
  created() {
    this.getMealDetailsById(this.id);
  },
  methods: {
    async getMealDetailsById(id) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("getMealDetailsById", id);
      } catch (error) {
        this.error = error.message;
      }
      this.isLoading = false;
    },
  },
};
</script>
<style>
img.meal-image {
  max-width: auto;
  display: flex;
}
iframe.embed-responsive-item {
  width: auto;
  display: inline;
}
</style>
