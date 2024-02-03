const passwordField = document.getElementById('password');
const iconTogglePassword = document.querySelector('.password-toggle-icon');

iconTogglePassword.addEventListener('click', togglePassword);

function showPssword() {
	passwordField.setAttribute('type', 'text');
	iconTogglePassword.classList.remove('password-toggle-icon-hide');
	iconTogglePassword.classList.add('password-toggle-icon-show');
}

function hidePssword() {
	passwordField.setAttribute('type', 'password');
	iconTogglePassword.classList.remove('password-toggle-icon-show');
	iconTogglePassword.classList.add('password-toggle-icon-hide');
}

function togglePassword() {
	passwordField.type === 'password' ? showPssword() : hidePssword()
}
