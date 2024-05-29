const modals = () => {
    const triggers = (triggerSelector, modalSelector, closeSelector) => {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);

        trigger.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

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
        }

        close.addEventListener('click', () => {
            closeModal();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
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

    triggers('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    triggers('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup', 3000);
};

export default modals;