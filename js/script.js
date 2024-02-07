document.addEventListener('DOMContentLoaded', () => {
	const form = document.forms.signUpForm,
		elements = {
			firstName: form.firstName,
			lastName: form.lastName,
			email: form.email,
			password: form.password,
			terms: form.agreeTerms,
			signUpButton: form.signUpButton,
		};

	const togglePassword = document.querySelector('.toggle-password');
	const togglePasswordIcon = togglePassword.querySelector('i');

	const successModal = document.querySelector('#successModal');
	const exploreButton = document.querySelector('#exploreButton');

	const {
		firstName, lastName, email, password, terms, signUpButton
	} = elements;

	const validations = [
		{
			input: firstName,
			regex: /^[a-zA-Z]{1,20}$/,
			error: document.querySelector('#firstName')
		},
		{
			input: lastName,
			regex: /^[a-zA-Z]{1,20}$/,
			error: document.querySelector('#lastName')
		},
		{
			input: email,
			regex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
			error: document.querySelector('#password')
		},
		{
			input: password,
			regex: /^[a-zA-Z0-9]{8,15}$/,
			error: document.querySelector('#agreeTerms')
		}
	];

	form.addEventListener('input', validateFormInput);
	terms.addEventListener('change', handleToggleSignUpButton);
	signUpButton.addEventListener('click', handleFormSubmit);
	exploreButton.addEventListener('click', handleExploreButtonClick);
	togglePassword.addEventListener('click', handleTogglePasswordClick);

	function validateInput(input, regex, error) {
		const trimmedValue = input.value.trim();
		const isValid = regex.test(trimmedValue) && /[a-zA-Z0-9]/.test(trimmedValue);
		if (isValid) {
			error.classList.remove('active');
		} else {
			error.classList.add('active');
		}
		return isValid;
	}

	function validateFormInput() {
		const isValid = validations.every(validation =>
			validateInput(validation.input, validation.regex, validation.error)
		);
		signUpButton.disabled = !isValid || !terms.checked;
	}

	function toggleButtonState() {
		if (signUpButton.readOnly) {
			signUpButton.readOnly = false;
		} else {
			signUpButton.readOnly = true;
		}
	}

	function handleToggleSignUpButton() {
		toggleButtonState();
		validateFormInput();
	}

	function showModal() {
		successModal.classList.add('active');
	}

	function hideModal() {
		successModal.classList.remove('active');
	}

	function handleFormSubmit(event) {
		event.preventDefault();
		showModal();
	}

	function handleExploreButtonClick() {
		hideModal();
		form.reset();
	}
	function handleTogglePasswordClick() {
		password.getAttribute("type") === 'password' ? showPassword() : hidePassword();
	}

	function showPassword() {
		password.setAttribute('type', 'text');
		togglePasswordIcon.className = 'fa-solid fa-eye';
	}

	function hidePassword() {
		password.setAttribute('type', 'password');
		togglePasswordIcon.className = 'fa-solid fa-eye-slash';
	}
});
