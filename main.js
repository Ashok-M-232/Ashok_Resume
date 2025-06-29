// Scroll animation for skill cards
ScrollReveal().reveal('.skill-card', {
  delay: 200,
  duration: 1000,
  origin: 'bottom',
  distance: '40px',
  easing: 'ease-in-out',
  reset: false,
  interval: 200
});

// Animate project blocks one by one
ScrollReveal().reveal('.project-block', {
  delay: 200,
  duration: 1000,
  origin: 'bottom',
  distance: '50px',
  interval: 200,
  reset: false
});

ScrollReveal().reveal('.education-block', {
  delay: 300,
  duration: 1000,
  origin: 'bottom',
  distance: '40px',
  interval: 150,
  reset: false
});


function openPDFModal() {
  document.getElementById("pdfModal").style.display = "flex";
}
function closePDFModal() {
  document.getElementById("pdfModal").style.display = "none";
}
window.onclick = function(event) {
  const modal = document.getElementById("pdfModal");
  if (event.target === modal) {
    closePDFModal();
  }
}


