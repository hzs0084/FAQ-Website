const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const questionButton = item.querySelector('.faq-question');
    const answerContent = item.querySelector('.faq-answer');

    questionButton.addEventListener('click', () => {
        answerContent.classList.toggle('open'); /* Toggle the "open" class to show/hide the answer */
    });
});

// Add the following code to the existing JavaScript code
// Select the copy icon inside the copy button
const copyIcon = document.querySelector('.copy-button i');

// Add a click event listener to the copy icon
copyIcon.addEventListener('click', copyCode);