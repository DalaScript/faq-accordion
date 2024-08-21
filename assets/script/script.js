const buttons = document.querySelectorAll('.faq-card__btn');

buttons.forEach((button) => {
    button.addEventListener('click', function () {
        const faqGroup = this.parentElement;
        const faqAnswer = faqGroup.querySelector('.faq-card__answer');
        const faqAnswers = document.querySelectorAll('.faq-card__answer');
        const btnIcon = this.querySelector('.faq-card__icon');
        const btnIcons = document.querySelectorAll('.faq-card__icon');

        // Close all accordion items
        faqAnswers.forEach((content) => {
            if (content !== faqAnswer) {
                content.classList.remove('faq-card__answer--active');
            }
        });

        btnIcons.forEach((icon) => {
            icon.src = './assets/images/icon-plus.svg';
        });

        // Toggle the clicked accordion item
        faqAnswer.classList.toggle('faq-card__answer--active');

        if (faqAnswer.classList.contains('faq-card__answer--active')) {
            btnIcon.src = './assets/images/icon-minus.svg';

        } else {
            btnIcon.src = './assets/images/icon-plus.svg';
        }
    })
})