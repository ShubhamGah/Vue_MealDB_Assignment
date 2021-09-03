import { shallowMount, createLocalVue } from "@vue/test-utils";
import Home from "../../../src/views/Home";
import BootstrapVue from "bootstrap-vue";
import Vuex from "vuex";

describe("in Home view", () => {
  let wrapper;

  const state = {
    randomMeal: {
      strMeal: "Choc Chip Pecan Pie",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/rqvwxt1511384809.jpg",
      strCategory: "Dessert",
      strArea: "American",
      idMeal: "52856",
    },
  };

  const actions = {
    getRandomMeal: jest.fn(),
  };

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    localVue.use(Vuex);

    const store = new Vuex.Store({
      state,
      actions,
    });
    wrapper = shallowMount(Home, {
      localVue,
      store,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("is a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it("should render the correct markup", () => {
    expect(wrapper.html()).toContain('<div class="home">');
  });

  it("getRandomMeal action should be called on calling getRandomMeal method", () => {
    wrapper.vm.getRandomMeal();
    expect(actions.getRandomMeal).toHaveBeenCalled();
  });
});
