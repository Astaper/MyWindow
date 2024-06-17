import modals from "./modules/modals";
import forms from "./modules/forms";
import tabs from "./modules/tabs";
import timer from "./modules/timer";
import changeModalState from "./modules/changeModalState";

window.addEventListener('DOMContentLoaded', () => {

    const deadline = '2024-08-10';

    const modalState = {};

    changeModalState(modalState);
    modals();
    forms(modalState);
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
    tabs({
        headerSelector: ".balcon_icons",
        tabSelector: ".balcon_icons_img",
        contentSelector: ".big_img > img",
        activeClass: "do_image_more",
        display: "inline-block"
    });
});
