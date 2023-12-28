const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const questionButton = item.querySelector('.faq-question');
    const answerContent = item.querySelector('.faq-answer');

    questionButton.addEventListener('click', () => {
        answerContent.classList.toggle('open'); /* Toggle the "open" class to show/hide the answer */
    });
});


  