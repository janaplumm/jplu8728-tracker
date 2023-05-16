function buttonClick() {
  // Add your button click functionality here
  alert("Button clicked!");
}

// Star rating functionality
const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
      star.addEventListener('click', () => {
        const rating = star.getAttribute('data-rating');
        document.querySelector('[name="rating"]').value = rating;
        stars.forEach(s => {
          if (s.getAttribute('data-rating') <= rating) {
            s.innerHTML = '&#11088;';
          } else {
            s.innerHTML = '&#9734;';
          }
        });
      });
    });