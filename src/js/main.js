import modals from "./modules/modals";
import tabs from "./modules/tabs";
import timer from "./modules/timer";

window.addEventListener('DOMContentLoaded', () => {

    const deadline = '2024-06-10';

    modals();
    tabs({
        headerSelector: ".glazing_slider",
        tabSelector: ".glazing_block",
        contentSelector: ".glazing_content",
        activeClass: "active"
    });
    tabs({
        headerSelector: ".decoration_slider",
        tabSelector: ".no_click",
        contentSelector: ".decoration_content > div > div",
        activeClass: "after_click"
    });
    timer('.container1', deadline);
});
