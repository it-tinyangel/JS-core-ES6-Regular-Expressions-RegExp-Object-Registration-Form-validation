const passwordField = document.getElementById('password');
const togglePassword = document.querySelector('.password-toggle-icon');

togglePassword.addEventListener('click', toggle);

function showPssword() {
	passwordField.setAttribute('type', 'text');
	togglePassword.classList.remove('password-toggle-icon-hide');
	togglePassword.classList.add('password-toggle-icon-show');
}

function hidePssword() {
	passwordField.setAttribute('type', 'password');
	togglePassword.classList.remove('password-toggle-icon-show');
	togglePassword.classList.add('password-toggle-icon-hide');
}

function toggle() {
	passwordField.type === 'password' ? showPssword() : hidePssword()
}