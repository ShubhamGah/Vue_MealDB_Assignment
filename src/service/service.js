import axiosObj from "@/service/axiosConfiguration";

function getRandomMealService() {
  return axiosObj.get("/random.php");
}
function getMealDetailsByIdService(id) {
  return axiosObj.get(`/lookup.php?i=${id}`);
}
function getSearchResultsService(searchInput) {
  return axiosObj.get(`/search.php?s=${searchInput}`);
}

export {
  getRandomMealService,
  getMealDetailsByIdService,
  getSearchResultsService,
};
