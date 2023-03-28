
const form = document.querySelector('form');
form.addEventListener('submit', (event) => { 
  const usernameInput = document.querySelector('#username');
  const passwordInput = document.querySelector('#password');
  if (usernameInput.value === '' || passwordInput.value === '') {
    event.preventDefault();
    alert('Please fill in both the username and password fields.');
  }
});