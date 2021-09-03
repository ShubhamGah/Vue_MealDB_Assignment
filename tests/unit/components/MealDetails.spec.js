import { shallowMount, createLocalVue } from "@vue/test-utils";
import MealDetails from "../../../src/components/MealDetails";
import BootstrapVue from "bootstrap-vue";
import Vuex from "vuex";

describe("in MealDetails Component", () => {
  let wrapper;
  const state = {
    mealDetails: {
      strMeal: "Choc Chip Pecan Pie",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/rqvwxt1511384809.jpg",
      strCategory: "Dessert",
      strArea: "American",
      idMeal: "52856",
    },
  };

  const getters = {
    getIngredients: () => [
      { id: 1, ingredient: "Plain Flour", measure: "300g" },
      { id: 2, ingredient: "Butter", measure: "75g" },
    ],
    getYoutubeUrl: () => ["https://youtu.be/SQGZqZYz7Ms"],
  };

  const actions = {
    getMealDetailsById: jest.fn(),
  };

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    localVue.use(Vuex);

    const store = new Vuex.Store({
      state,
      getters,
      actions,
    });

    wrapper = shallowMount(MealDetails, {
      localVue,
      store,

      mocks: {
        $route: {
          params: { id: "52856" },
        },
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("is a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it("should render the correct html", () => {
    expect(wrapper.html()).toContain('<div class="MealDetails-container">');
  });

  it("getMealDetailsById action should be called on calling getMealDetailsById method", () => {
    wrapper.vm.getMealDetailsById("52856");
    expect(actions.getMealDetailsById).toHaveBeenCalled();
  });
});
