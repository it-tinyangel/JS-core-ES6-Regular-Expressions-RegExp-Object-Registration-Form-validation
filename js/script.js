const form = document.querySelector('#signUpForm');
const firstNameInput = document.querySelector('#firstName');
const emailInput = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const iconTogglePassword = document.querySelector('.password-toggle-icon');
const agreeCheckbox = document.querySelector('#agreeCheckbox');
const signupButton = document.querySelector('#signUpButton');

const successModal = document.querySelector('#successModal');
const exploreButton = document.querySelector('#startButton');

iconTogglePassword.addEventListener('click', togglePassword);

function showPassword() {
	inputPassword.setAttribute('type', 'text');
	iconTogglePassword.innerHTML = `
	<i class="fa-solid fa-eye" id="eye"></i>
	`;
}

function hidePassword() {
	inputPassword.setAttribute('type', 'password');
	iconTogglePassword.innerHTML = `
	<i class="fa-solid fa-eye-slash"></i>
	`;
}

function togglePassword() {
	inputPassword.getAttribute("type") === 'password' ? showPassword() : hidePassword();
}
