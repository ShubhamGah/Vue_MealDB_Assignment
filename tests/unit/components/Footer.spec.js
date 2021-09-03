import { shallowMount, createLocalVue } from "@vue/test-utils";
import Footer from "../../../src/components/Footer";

describe("In Footer Component", () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();

    wrapper = shallowMount(Footer, {
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
    expect(wrapper.html()).toContain('<div class="app-footer">');
  });
});
