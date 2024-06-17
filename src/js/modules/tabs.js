const tabs = ({ headerSelector, tabSelector, contentSelector, activeClass, display = 'block' }) => {
    const header = document.querySelector(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const contents = document.querySelectorAll(contentSelector);

    const hideTabContent = () => {
        contents.forEach(content => {
            content.style.display = 'none';
        });

        tab.forEach(tab => {
            tab.classList.remove(activeClass);
        });
    }

    const showTabContent = (i = 0) => {
        contents[i].style.display = display;
        tab[i].classList.add(activeClass);
    }

    const switchTab = () => {
        document.addEventListener('keydown', (e) => {
            const target = e.target;
            if (e.key === 'Enter') {
                tab.forEach((tab, i) => {
                    if (target == tab || target.parentNode == tab) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, "")) ||
                target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tab.forEach((tab, i) => {
                if (target == tab || target.parentNode == tab) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    header.addEventListener('keydown', (e) => {
        switchTab();
    });
};

export default tabs;
