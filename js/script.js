document.addEventListener('DOMContentLoaded', () => {
	const form = document.forms.signUpForm,
		elements = {
			firstName: form.firstName,
			lastName: form.lastName,
			email: form.email,
			password: form.password,
		};
	const alertInputMessage = document.querySelector('.validate-field__alert');

	const togglePassword = document.querySelector('.toggle-password');
	const togglePasswordIcon = document.querySelector('.toggle-password').querySelector('i');
	const termsCheckbox = document.querySelector('#terms');
	const signUpButton = document.querySelector('#signUpButton');

	const successModal = document.querySelector('#successModal');
	const exploreButton = document.querySelector('#exploreButton');

	const { firstName, lastName, email, password } = elements;

	form.addEventListener('submit', showSuccessModal);
	signUpButton.addEventListener('click', showSuccessModal);
	exploreButton.addEventListener('click', closeSuccessModal);
	togglePassword.addEventListener('click', togglePasswordVisibility);
	termsCheckbox.addEventListener('change', handleCheckboxChange);

	function validateForm() {
		return validateFirstName() && validateLastName() && validateEmail() && validatePassword();
	}

	function showSuccessModal(event) {
		event.preventDefault();
		if (validateForm()) {
			successModal.style.display = 'block';
		}
	};

	function closeSuccessModal() {
		successModal.style.display = 'none';
		form.reset();
	};

	function handleCheckboxChange() {
		signUpButton.disabled = !validateForm() || !termsCheckbox.checked;
	}

	function validateFirstName() {
		const nameReg = /^[a-zA-Z]{1,20}$/;
		return nameReg.test(firstName.value);
	}

	function validateLastName() {
		const nameReg = /^[a-zA-Z]{1,20}$/;
		return nameReg.test(lastName.value);
	}

	function validateEmail() {
		const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailReg.test(email.value);
	}

	function validatePassword() {
		const passwordReg = /^[a-zA-Z0-9]{8,15}$/;
		return passwordReg.test(password.value);
	}

	function showPassword() {
		password.setAttribute('type', 'text');
		togglePasswordIcon.className = 'fa-solid fa-eye';
	}

	function hidePassword() {
		password.setAttribute('type', 'password');
		togglePasswordIcon.className = 'fa-solid fa-eye-slash';
	}

	function togglePasswordVisibility() {
		password.getAttribute("type") === 'password' ? showPassword() : hidePassword();
	}
});
