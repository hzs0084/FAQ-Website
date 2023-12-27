const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const questionButton = item.querySelector('.faq-question');
    const answerContent = item.querySelector('.faq-answer');

    questionButton.addEventListener('click', () => {
        answerContent.classList.toggle('open'); /* Toggle the "open" class to show/hide the answer */
    });
});


const copyButton = document.querySelector('#copy-button');
const codeSnippet = document.querySelector('#code-snippet');

copyButton.addEventListener('click', () => {
  navigator.clipboard.writeText(codeSnippet.textContent)
    .then(() => {
      alert('Code copied to clipboard!'); // Optional success message
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
    });
});
