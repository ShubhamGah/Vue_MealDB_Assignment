import { shallowMount, createLocalVue } from "@vue/test-utils";
import Header from "../../../src/components/Header";
import BootstrapVue from "bootstrap-vue";
import VueRouter from "vue-router";
import { routes } from "../../../src/router/index";

describe("In Header Component", () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);

    const router = new VueRouter({ routes });

    wrapper = shallowMount(Header, {
      localVue,
      router,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("is a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it("should render the correct markup", () => {
    expect(wrapper.html()).toContain('<div class="header">');
  });
});
