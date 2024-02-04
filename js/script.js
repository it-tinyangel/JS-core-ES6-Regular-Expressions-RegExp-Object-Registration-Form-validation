document.addEventListener('DOMContentLoaded', () => {
	const form = document.forms.signUpForm;

	const elements = {
		firstName: form.firstName,
		lastName: form.lastName,
		email: form.email,
		password: form.password,
	};
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
	termsCheckbox.addEventListener('change', handleCheckboxChange);
	togglePassword.addEventListener('click', togglePasswordVisibility);

	function validateForm() {
		return validateFirstName() && validateLastName() && validateEmail() && validatePassword() && termsCheckbox.checked;
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
		const nameRegex = /^[a-zA-Z]{1,20}$/;
		return nameRegex.test(firstName.value);
	}

	function validateLastName() {
		const nameRegex = /^[a-zA-Z]{1,20}$/;
		return nameRegex.test(lastName.value);
	}

	function validateEmail() {
		const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
		return emailRegex.test(email.value);
	}

	function validatePassword() {
		const passwordRegex = /^[a-zA-Z0-9]{8,15}$/;
		return passwordRegex.test(password.value);
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
