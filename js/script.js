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
			regex: /^(?!\s+$)[a-zA-Z]+$/,
			error: document.querySelector('#errorFirstName'),
		},
		{
			input: document.getElementById('lastName'),
			regex: /^(?!\s+$)[a-zA-Z]+$/,
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

	const validateFieldAndShowError = (input, regex, error) => {
		const trimmedValue = input.value.trim();
		const isValid = regex.test(trimmedValue);

		input.parentElement.classList.toggle('is-invalid', !isValid);
		input.parentElement.classList.toggle('is-valid', isValid);
		input.classList.toggle('has-only-whitespace', !isValid);

		error.innerHTML = isValid ? '' : `<p>Please, provide a valid ${input.name}.</p>`;
		error.classList.toggle('active', !isValid || !input.checkValidity());

		return isValid;
	};

	const validateFormFields = () => {
		const isValid = validations.every(validation =>
			validateFieldAndShowError(validation.input, validation.regex, validation.error)
		);
		signUpButton.disabled = !isValid || !terms.checked;
	};

	const showModal = () => {
		successModal.classList.add('active');
	};

	const hideModal = () => {
		successModal.classList.remove('active');
	};

	const handleFormSubmit = event => {
		event.preventDefault();
		showModal();
	};

	const handleExploreButtonClick = () => {
		hideModal();
		form.reset();
	};

	const toggleButtonState = () => {
		if (signUpButton.readOnly) {
			signUpButton.readOnly = false;
		} else {
			signUpButton.readOnly = true;
		}
	};

	const handleTermsCheckbox = () => {
		toggleButtonState();
		validateFormFields();
	};

	const handleTogglePasswordClick = () => {
		password.getAttribute("type") === 'password' ? showPassword() : hidePassword();
	};

	const showPassword = () => {
		password.setAttribute('type', 'text');
		togglePasswordIcon.className = 'fa-solid fa-eye';
	};

	const hidePassword = () => {
		password.setAttribute('type', 'password');
		togglePasswordIcon.className = 'fa-solid fa-eye-slash';
	};

	form.addEventListener('input', validateFormFields);
	terms.addEventListener('change', handleTermsCheckbox);
	signUpButton.addEventListener('click', handleFormSubmit);
	exploreButton.addEventListener('click', handleExploreButtonClick);
	togglePassword.addEventListener('click', handleTogglePasswordClick);

	validations.forEach(validation => {
		const { input, regex, error } = validation;

		input.addEventListener('input', () => {
			validateFieldAndShowError(input, regex, error);
		});
	});
});
