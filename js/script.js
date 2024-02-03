const inputPassword = document.getElementById('password');
const iconTogglePassword = document.querySelector('.password-toggle-icon');

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
