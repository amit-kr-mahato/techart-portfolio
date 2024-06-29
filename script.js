// Get the form element
const form = document.querySelector('.contact');

// Add an event listener to the form's submit event
form.addEventListener('submit', (e) => {
  // Prevent the form from submitting
  e.preventDefault();

  // Get the input fields
  const nameInput = document.getElementById('Name');
  const emailInput = document.getElementById('Email');
  const subjectInput = document.getElementById('Subject');
  const messageInput = document.getElementById('comment');

  // Validate the input fields
  let isValid = true;

  // Validate name
  if (nameInput.value.trim() === '') {
    alert('Please enter your name');
    isValid = false;
  }

  // Validate email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailInput.value)) {
    alert('Please enter a valid email address');
    isValid = false;
  }

  // Validate subject
  if (subjectInput.value.trim() === '') {
    alert('Please enter a subject');
    isValid = false;
  }

  // Validate message
  if (messageInput.value.trim() === '') {
    alert('Please enter a message');
    isValid = false;
  }

  // If the form is valid, submit it
  if (isValid) {
    form.submit();
  }
});