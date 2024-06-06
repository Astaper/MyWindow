const modals = () => {
    const triggers = ({triggerSelector, modalSelector, closeSelector, closeClickOverlay = true}) => {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll('[data-modal]');

        trigger.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(window => {
                    window.style.display = 'none';
                });

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        const closeModal = () => {
            modal.style.display = "none";
            document.body.style.overflow = "";

            windows.forEach(window => {
                window.style.display = 'none';
            });
        }

        close.addEventListener('click', () => {
            closeModal();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                closeModal();
            }
        });
    }

    const showModalByTime = (selector, time) => {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);
    }

    triggers({
        triggerSelector: '.popup_engineer_btn',
        modalSelector: '.popup_engineer',
        closeSelector:'.popup_engineer .popup_close'
    });
    triggers({
        triggerSelector: '.phone_link',
        modalSelector: '.popup',
        closeSelector:'.popup .popup_close'
    });
    triggers({
        triggerSelector: '.popup_calc_btn',
        modalSelector: '.popup_calc',
        closeSelector: '.popup_calc_close'
    });
    triggers({
        triggerSelector: '.popup_calc_button',
        modalSelector: '.popup_calc_profile',
        closeSelector: '.popup_calc_profile_close',
        closeClickOverlay: false
    });
    triggers({
        triggerSelector: '.popup_calc_profile_button',
        modalSelector: '.popup_calc_end',
        closeSelector: '.popup_calc_end_close',
        closeClickOverlay: false
    });
};

export default modals;
