export default {
  getIngredients(state) {
    const ingredientList = [];
    const measureList = [];
    const ingredientWithMeasures = [];

    const samplemealDetail = Object.entries(state.mealDetails);
    samplemealDetail.forEach((detail) => {
      const [key, value] = detail;
      if (
        key.includes("strIngredient") &&
        value !== null &&
        value.trim() !== ""
      ) {
        ingredientList.push(value);
      } else if (
        key.includes("strMeasure") &&
        value !== null &&
        value.trim() !== ""
      ) {
        measureList.push(value);
      }
    });
    ingredientList.forEach((value, index) => {
      ingredientWithMeasures.push({
        id: index + 1,
        ingredient: value,
        measure: measureList[index],
      });
    });

    return ingredientWithMeasures;
  },
  getYoutubeUrl(state) {
    return state.mealDetails.strYoutube.replace("watch?v=", "embed/");
  },
};
