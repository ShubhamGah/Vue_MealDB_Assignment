import { shallowMount, createLocalVue } from "@vue/test-utils";
import PageNotFound from "../../../src/components/PageNotFound";

describe("In PageNotFound Component", () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    wrapper = shallowMount(PageNotFound, {
      localVue,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("is a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it("should render the correct markup", () => {
    expect(wrapper.html()).toContain('<div class="pageNotFound">');
  });
});
