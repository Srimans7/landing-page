document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = event.target.email.value;
  const message = event.target.message.value;

  if (email && message) {
    alert('Feedback submitted successfully!');
    event.target.reset();
  } else {
    alert('Please fill in all fields.');
  }
});
