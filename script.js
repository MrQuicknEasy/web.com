// Form Submission Handling
document.getElementById('quoteForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your inquiry! We will get back to you shortly.');
  document.getElementById('quoteForm').reset();
});
