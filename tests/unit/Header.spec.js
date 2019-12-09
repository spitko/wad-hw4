import Header from "../../src/components/Header";
import {mount} from "@vue/test-utils";

describe('Header is rendered correctly', () => {
    const wrapper = mount(Header)

    it('Renders the correct date', () => {
        let today = new Date().getDate();
        let date = today < 10 ? `0${today}` : today;
        expect(wrapper.html()).toContain(date)
    });

    it('Renders the correct year', () => {
        let today = new Date().getFullYear();
        let year = today < 10 ? `0${today}` : today;
        expect(wrapper.html()).toContain(year)
    });

    it('Renders the correct month', () => {
        let today = new Date().getMonth();
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];
        let month = months[today] < 10 ? `0${months[today]}` : months[today];
        expect(wrapper.html()).toContain(month.toUpperCase().slice(0,3))
    });

    it('Renders the correct weekdays', () => {
        let today = new Date().getDay();
        let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let weekday = weekdays[today] < 10 ? `0${weekdays[today]}` : weekdays[today];
        expect(wrapper.html()).toContain(weekday.toUpperCase())
    });
});