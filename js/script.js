document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('#signUpForm');
	const terms = document.querySelector('#agreeTerms');
	const signUpButton = document.querySelector('#signUpButton');
	const successModal = document.querySelector('#successModal');
	const exploreButton = document.querySelector('#exploreButton');
	const togglePassword = document.querySelector('.toggle-password');
	const togglePasswordIcon = togglePassword.querySelector('i');

	const validations = [
		{
			input: document.getElementById('firstName'),
			regex: /^[a-zA-Z]{1,20}$/,
			error: document.querySelector('#errorFirstName')
		},
		{
			input: document.getElementById('lastName'),
			regex: /^[a-zA-Z]{1,20}$/,
			error: document.querySelector('#errorLastName')
		},
		{
			input: document.getElementById('email'),
			regex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
			error: document.querySelector('#errorEmail')
		},
		{
			input: document.getElementById('password'),
			regex: /^[a-zA-Z0-9]{8,15}$/,
			error: document.querySelector('#errorPassword')
		}
	];

	form.addEventListener('input', validateFormInput);
	terms.addEventListener('change', handleTermsChange);
	signUpButton.addEventListener('click', handleFormSubmit);
	exploreButton.addEventListener('click', handleExploreButtonClick);
	togglePassword.addEventListener('click', handleTogglePasswordClick);

	function validateInput(input, regex, errorElement) {
		const trimmedValue = input.value.trim();
		const isValid = regex.test(trimmedValue) && /\S/.test(trimmedValue); 

		if (isValid) {
			input.parentElement.classList.remove('invalid');
			input.parentElement.classList.add('valid');
		} else {
			input.parentElement.classList.remove('valid');
			input.parentElement.classList.add('invalid');
		}

		if (!isValid || !input.checkValidity()) {
			errorElement.innerHTML = `<p>Please, provide a valid ${input.name}.</p>`;
			errorElement.classList.add('active');
		} else {
			errorElement.innerHTML = '';
			errorElement.classList.remove('active');
		}

		return isValid;
	}

	function validateFormInput() {
		const isValid = validations.every(validation =>
			validateInput(validation.input, validation.regex, validation.error)
		);
		signUpButton.disabled = !isValid || !terms.checked;
	}

	function showModal() {
		successModal.classList.add('active');
	}

	function hideModal() {
		successModal.classList.remove('active');
		form.reset();
	}

	function handleFormSubmit(event) {
		event.preventDefault();
		showModal();
	}

	function handleExploreButtonClick() {
		hideModal();
	}

	function toggleButtonState() {
		if (signUpButton.readOnly) {
			signUpButton.readOnly = false;
		} else {
			signUpButton.readOnly = true;
		}
	}

	function handleTermsChange() {
		toggleButtonState();
		validateFormInput();
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
