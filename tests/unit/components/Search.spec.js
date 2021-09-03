import { shallowMount, createLocalVue } from "@vue/test-utils";
import Search from "../../../src/components/Search";
import BootstrapVue from "bootstrap-vue";
import Vuex from "vuex";

describe("in Search", () => {
  let wrapper;

  const state = {
    searchResults: [
      {
        strMeal: "Choc Chip Pecan Pie",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/rqvwxt1511384809.jpg",
        strCategory: "Dessert",
        strArea: "American",
        idMeal: "52856",
      },
    ],
  };

  const actions = {
    getSearchResults: jest.fn(),
  };

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    localVue.use(Vuex);

    const store = new Vuex.Store({
      state,
      actions,
    });

    wrapper = shallowMount(Search, {
      localVue,
      store,
      data() {
        return {
          isLoading: false,
          searchInput: "Choc Chip Pecan Pie",
        };
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("is a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it("should render the correct markup", () => {
    expect(wrapper.html()).toContain('<div class="search-container">');
  });
  it("getSearchResults action should be called search button clicked", () => {
    wrapper.find("#searchbtn").trigger("click");
    expect(actions.getSearchResults).toHaveBeenCalled();
  });
});
