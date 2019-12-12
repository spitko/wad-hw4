import List from "../../src/components/List";
import {mount} from "@vue/test-utils";
import Item from "../../src/models/Item";

describe('List component', () => {

    const wrapper = mount(List);

    it('check if "Add your first Todo task" is displayed if List is empty', () => {
        expect(wrapper.html()).toContain('Add your first Todo task')
    });

    it('Check if item is updated correctly when the item in the list is marked as done', async() => {
        wrapper.props().list.push(new Item("New item"));
        await wrapper.vm.$nextTick();

        expect(wrapper.props().list[0].done).toBe(false);

        wrapper.find('.list-item > div > span').trigger('click');
        await wrapper.vm.$nextTick();

        expect(wrapper.props().list[0].done).toBe(true);
    })

});


