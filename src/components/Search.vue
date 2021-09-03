<template>
  <div class="search-container">
    <h3>Search Your Meal</h3>

    <b-container>
      <b-form-input
        class="search-meal"
        @keyup.enter="getSearchResults"
        v-model="searchInput"
        placeholder="Search"
        autocomplete="off"
      >
      </b-form-input>
      <b-button
        variant="outline-success"
        id="searchbtn"
        class="my-2 my-sm-3"
        type="submit"
        @click="getSearchResults"
        >Search</b-button
      >
    </b-container>

    <div class="search-items col-12" v-if="searchItem">
      <div
        id="my-col"
        class="search-item-list"
        v-for="meal in searchItem"
        :key="meal.idMeal"
      >
        <b-card
          :title="meal.strMeal"
          :img-src="meal.strMealThumb"
          img-alt="Meal_Image"
          img-top
          tag="article"
        >
          <b-button
            variant="primary"
            id="getMealDetailsBtn"
            @click="getMealDetails(meal.idMeal)"
            >Get Meal Details</b-button
          >
        </b-card>
      </div>
    </div>
    <div v-else style="margin-top: 5px">
      <sub>Not available at the moment</sub>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Search",
  data() {
    return {
      searchInput: null,
      isLoading: false,
      error: null,
      meals: [],
    };
  },
  computed: {
    ...mapState(["searchItem"]),
  },
  methods: {
    getMealDetails(id) {
      this.$router.push({ name: "MealDetails", params: { id } });
    },
    async getSearchResults() {
      if (this.searchInput.trim() !== "") {
        this.isLoading = true;
        try {
          await this.$store.dispatch("getSearchResults", this.searchInput);
        } catch (error) {
          this.error = error.message;
        }
        this.isLoading = false;
        this.searchInput = "";
      }
    },
  },
};
</script>
<style>
.search-item-list {
  max-width: 15rem;
  float: left;
  margin: 2rem;
}
</style>
