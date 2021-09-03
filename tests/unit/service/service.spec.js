import {
  getRandomMealService,
  getMealDetailsByIdService,
  getSearchResultsService,
} from "../../../src/service/service";
import axiosObj from "../../../src/service/axiosConfiguration";

jest.mock("../../../src/service/axiosConfiguration", () => ({
  baseURL: "https://www.themealdb.com/api/json/v1/1",
  get: jest.fn(),
}));

const response = {
  data: {
    meals: [
      {
        strMeal: "Choc Chip Pecan Pie",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/rqvwxt1511384809.jpg",
        strCategory: "Dessert",
        strArea: "American",
        idMeal: "52856",
      },
    ],
  },
};

describe("service", () => {
  it("getRandomMealService", async () => {
    axiosObj.get.mockImplementation(() => Promise.resolve(response));
    const meal = await getRandomMealService();
    expect(axiosObj.get).toHaveBeenCalledWith("/random.php");
    expect(meal).toEqual(response);
  });

  it("getMealDetailsByIdService", async () => {
    axiosObj.get.mockImplementation(() => Promise.resolve(response));
    const meal = await getMealDetailsByIdService("52856");
    expect(axiosObj.get).toHaveBeenCalledWith("/lookup.php?i=52856");
    expect(meal).toEqual(response);
  });

  it("getSearchResultsService", async () => {
    axiosObj.get.mockImplementation(() => Promise.resolve(response));
    const meal = await getSearchResultsService("Choc Chip Pecan Pie");
    expect(axiosObj.get).toHaveBeenCalledWith(
      "/search.php?s=Choc Chip Pecan Pie"
    );
    expect(meal).toEqual(response);
  });
});
