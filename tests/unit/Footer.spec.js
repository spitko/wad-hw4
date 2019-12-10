import Footer from "../../src/components/Footer";
import {mount} from "@vue/test-utils";
import Vue from "vue";

describe('Footer component', () => {
    const wrapper = mount(Footer);

    it('Clicking add button sets "open" property in component', async () => {
        expect(wrapper.find('div > div > input').exists()).toBe(false);
        expect(wrapper.find('div > div > span').isVisible()).toBe(true);
        wrapper.find('span').trigger('click');
        await Vue.nextTick();
        expect(wrapper.find('div > div > input').isVisible()).toBe(true);
        expect(wrapper.find('div > div > span').exists()).toBe(false);
    });
});