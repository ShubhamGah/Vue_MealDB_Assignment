import actions from "../../../src/store/actions";
import {
  getRandomMealService,
  getMealDetailsByIdService,
  getSearchResultsService,
} from "../../../src/service/service";

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

jest.mock("../../../src/service/service", () => ({
  getRandomMealService: jest.fn(),
  getMealDetailsByIdService: jest.fn(),
  getSearchResultsService: jest.fn(),
}));

describe("Store Actions", () => {
  describe("getRandomMealService", () => {
    it("resolved response", async () => {
      const context = {
        commit: jest.fn(),
      };
      getRandomMealService.mockImplementation(() => Promise.resolve(response));
      await actions.getRandomMeal(context);
      expect(context.commit).toHaveBeenCalledWith(
        "setRandomMeal",
        response.data.meals[0]
      );
    });

    it("rejected response", async () => {
      const context = {
        commit: jest.fn(),
      };
      getRandomMealService.mockImplementation(() =>
        Promise.reject(new Error("Some Error Occured!!"))
      );
      await expect(actions.getRandomMeal(context)).rejects.toThrow(
        "Some Error Occured!!"
      );
    });
  });

  describe("getMealDetailsByIdService", () => {
    it("resolved response", async () => {
      const context = {
        commit: jest.fn(),
      };
      getMealDetailsByIdService.mockImplementation(() =>
        Promise.resolve(response)
      );
      await actions.getMealDetailsById(context, "52856");
      expect(context.commit).toHaveBeenCalledWith(
        "setMealDetails",
        response.data.meals[0]
      );
    });

    it("rejected response", async () => {
      const context = {
        commit: jest.fn(),
      };
      getMealDetailsByIdService.mockImplementation(() =>
        Promise.reject(new Error("Some Error Occured!!"))
      );
      await expect(
        actions.getMealDetailsById(context, "52856")
      ).rejects.toThrow("Some Error Occured!!");
    });
  });

  describe("getSearchResultsService", () => {
    it("resolved response", async () => {
      const context = {
        commit: jest.fn(),
      };
      getSearchResultsService.mockImplementation(() =>
        Promise.resolve(response)
      );
      await actions.getSearchResults(context, "Choc Chip Pecan Pie");
      expect(context.commit).toHaveBeenCalledWith(
        "setSearchResults",
        response.data.meals
      );
    });
    it("rejected response", async () => {
      const context = {
        commit: jest.fn(),
      };
      getSearchResultsService.mockImplementation(() =>
        Promise.reject(new Error("Some Error Occured!!"))
      );
      await expect(
        actions.getSearchResults(context, "Choc Chip Pecan Pie")
      ).rejects.toThrow("Some Error Occured!!");
    });
  });
});
