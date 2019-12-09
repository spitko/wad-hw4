import List from "../../src/components/List";
import {mount} from "@vue/test-utils";

describe('List component', () => {
    const testData = [];

    const wrapper = mount(List, {
        propsData: {
            list: testData
        }
    })

    it('check if "Add your first Todo task" is displayed if List is empty', () => {
        expect(wrapper.find('h3').text()).toEqual('Add your first Todo task')
    })
});


