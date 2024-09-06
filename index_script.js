const boxes = document.querySelectorAll('.box'); // Select all boxes

boxes.forEach(box => {
  box.addEventListener('click', () => {
    box.classList.add('clicked'); // Add the 'clicked' class

    // Optional: Remove the class after a short delay (e.g., for a visual effect)
    setTimeout(() => {
      box.classList.remove('clicked');
    }, 300); // 300 milliseconds
  });
});
