import { shallowMount, createLocalVue } from "@vue/test-utils";
import ErrorPage from "../../../src/components/ErrorPage";

describe("In ErrorPage Component", () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    wrapper = shallowMount(ErrorPage, {
      propsData: {
        error: "Error",
      },
      localVue,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("is a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it("should render the correct html", () => {
    expect(wrapper.html()).toContain('<div class="error-page">');
  });

  it("error rendered properly through prop data", () => {
    expect(wrapper.props().error).toContain("Error");
    expect(wrapper.find("h4").text()).toContain("Error");
  });

  it("should call reload on reload button click", () => {
    const { location } = window;
    delete window.location;
    window.location = { reload: jest.fn() };
    wrapper.find("#reloadBtn").trigger("click");
    expect(window.location.reload).toHaveBeenCalled();
    window.location = location;
  });
});
