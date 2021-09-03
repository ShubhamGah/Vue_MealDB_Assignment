<template>
  <div class="home">
    <h3>Random Meal</h3>
    <div class="home-content" v-if="!isLoading && !error">
      <b-card
        :title="randomMeal.strMeal"
        :img-src="randomMeal.strMealThumb"
        img-alt="Meal_Image"
        img-top
        tag="article"
      >
        <b-button
          variant="primary"
          id="getMealDetailsBtn"
          @click="getMealDetails(randomMeal.idMeal)"
          >Get Meal Details</b-button
        >
      </b-card>
    </div>

    <div class="home-content" v-else-if="!isLoading && error">
      <ErrorPage :error="error" />
    </div>

    <div class="home-content" v-else>
      <div class="spinner">
        <b-spinner variant="primary"></b-spinner><br />
        <b>Please Wait</b>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ErrorPage from "../components/ErrorPage.vue";

export default {
  name: "Home",
  components: {
    ErrorPage,
  },
  data() {
    return {
      error: null,
      isLoading: false,
    };
  },
  computed: {
    ...mapState(["randomMeal"]),
  },
  created() {
    this.getRandomMeal();
  },
  methods: {
    async getRandomMeal() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("getRandomMeal");
        console.log(this.getRandomMeal);
      } catch (error) {
        this.error = error.message;
      }
      this.isLoading = false;
    },
    getMealDetails(id) {
      this.$router.push({ name: "MealDetails", params: { id } });
    },
  },
};
</script>
<style>
.home-content {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 12rem;
  margin-top: 1rem;
}
.spinner {
  margin-top: 11rem;
}
</style>
