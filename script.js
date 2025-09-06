//Change background color randomly
const changeColorBtn = document.getElementById('changeColorBtn');

changeColorBtn.addEventListener('click', () => {
  // Generate a random hex color
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

// Interactive Feature 2: Toggle visibility of text
const toggleBtn = document.getElementById('toggleBtn');
const toggleText = document.getElementById('toggleText');

toggleBtn.addEventListener('click', () => {
  if (toggleText.style.display === 'none') {
    toggleText.style.display = 'block';
  } else {
    toggleText.style.display = 'none';
  }
});

// Custom Form Validation
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Reset error messages
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  formSuccess.textContent = '';

  let valid = true;

  // Name validation: not empty, at least 2 characters
  if (nameInput.value.trim().length < 2) {
    nameError.textContent = 'Name must be at least 2 characters.';
    valid = false;
  }

  // Email validation: basic regex check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email.';
    valid = false;
  }

  // Message validation: not empty, at least 10 characters
  if (messageInput.value.trim().length < 10) {
    messageError.textContent = 'Message must be at least 5 characters.';
    valid = false;
  }

  if (valid) {
    formSuccess.textContent = 'Thank you for your message!';
    form.reset();
  }
});
