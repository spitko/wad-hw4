import Footer from "../../src/components/Footer";
import {mount} from "@vue/test-utils";
import Vue from "vue";

describe('Footer component', () => {
    const wrapper = mount(Footer);

    it('Clicking add button sets "open" property in component', () => {
        wrapper.find('span').trigger('click');
        expect(wrapper.vm.$data.open);
    });
});