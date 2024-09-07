document.addEventListener('DOMContentLoaded', function() {
    // Initialize Clipboard.js
    new ClipboardJS('.copy-button');

    // Add event listener for successful copy
    document.querySelectorAll('.copy-button').forEach(button => {
        button.addEventListener('click', function(event) {
            // You can add visual feedback here, like changing the button text
            event.target.textContent = 'Copied!';
            setTimeout(function() {
                event.target.textContent = 'Copy';
            }, 1500); // Reset button text after 1.5 seconds
        });
    });
});
