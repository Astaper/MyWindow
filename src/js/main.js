import modals from "./modules/modals";
import forms from "./modules/forms";

import tabs from "./modules/tabs";

window.addEventListener('DOMContentLoaded', () => {
    modals();
    forms();
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
});
