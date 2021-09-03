import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import app from "../../src/App";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

describe("in App Component", () => {
  let wrapper;
  const router = new VueRouter({ path: "/", name: "Home" });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);

    wrapper = shallowMount(app, {
      localVue,
      router,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it(" is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it(" should render correct markup", () => {
    expect(wrapper.html()).toContain('<div id="app">');
  });

  describe("it should load Header Component", () => {
    it("should load header component", () => {
      expect(Header).toBeTruthy();
    });
  });
  describe("it should load Footer Component", () => {
    it("should load footer component", () => {
      expect(Footer).toBeTruthy();
    });
  });
});
