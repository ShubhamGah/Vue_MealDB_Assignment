import {
  getRandomMealService,
  getMealDetailsByIdService,
  getSearchResultsService,
} from "@/service/service.js";

export default {
  async getRandomMeal(context) {
    try {
      const response = await getRandomMealService();
      context.commit("setRandomMeal", response.data.meals[0]);
      // console.log(response.data.meals)
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  },

  async getMealDetailsById(context, id) {
    try {
      const response = await getMealDetailsByIdService(id);
      context.commit("setMealDetails", response.data.meals[0]);
      console.log(response);
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  },
  async getSearchResults(context, searchInput) {
    try {
      const response = await getSearchResultsService(searchInput);
      context.commit("setSearchResults", response.data.meals);
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  },
};
