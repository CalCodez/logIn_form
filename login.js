const getById = (id) => document.getElementById(id);
const getByClass = (arg) => document.getElementsByClassName(arg);
const createElement = (elm) => document.createElement('elm');
const addClass = (elm, cls) => elm.classList.add(cls);
const removeClass = (elm, cls) => elm.classList.remove(cls);
const toggleClass = (elm, cls) => elm.classList.toggle(cls);
const textContent = (elm, txt) => (elm.textContent = txt);
const appendChild = (parent, child) => parent.appendChild(child);
const removeChild = (parent, child) => parent.removeChild(child);

const coverObj = {
	register: {
		header: `Hello, Welcome!`,
		question: `Don't Have An Account?`,
		buttonText: `Register`,
	},

	login: {
		header: `Welcome Back!`,
		question: `Already Have An Account?`,
		buttonText: `Login `,
	},
};

const { register, login } = coverObj;

const click = 'click';

const coverButton = getById('form-cover-button');
const formCover = getById('form-cover');
const coverHeader = getById('form-cover-header');
const formQuestion = getById('form-cover-question');
const registrationWrapper = getById('registration-wrapper');
const logInWrapper = getById('login-wrapper');

const logInActive = 'login-active';
const registerActive = 'register-active';
const flexActive = 'flex-active';
const flexInactive = 'flex-inactive';

const registerContainer = getById('registration-container');
const logInContainer = getById('login-container');

const mobileForty = 'mobile-forty';
const mobileSixty = 'mobile-sixty';

const toggleCoverForm = (toggler, obj, obj2) => {
	toggler.addEventListener(click, function () {
		if (!formCover.classList.contains(registerActive)) {
			toggleClass(formCover, logInActive);
			toggleClass(formCover, registerActive);
			textContent(coverHeader, obj.header);
			textContent(formQuestion, obj.question);
			textContent(coverButton, obj.buttonText);
			toggleClass(registrationWrapper, flexActive);
			toggleClass(logInWrapper, flexInactive);
		} else {
			toggleClass(formCover, logInActive);
			toggleClass(formCover, registerActive);
			textContent(coverHeader, obj2.header);
			textContent(formQuestion, obj2.question);
			textContent(coverButton, obj2.buttonText);
			toggleClass(registrationWrapper, flexActive);
			toggleClass(logInWrapper, flexInactive);
		}
	});
};
toggleCoverForm(coverButton, login, register);

if (window.innerWidth <= 500) {
	addClass(registerContainer, mobileForty);
	addClass(logInContainer, mobileSixty);
}

coverButton.addEventListener(click, function () {
	if (formCover.classList.contains(registerActive)) {
		toggleClass(registerContainer, mobileForty);
		toggleClass(registerContainer, mobileSixty);
		toggleClass(logInContainer, mobileSixty);
		toggleClass(logInContainer, mobileForty);
	} else {
		toggleClass(registerContainer, mobileForty);
		toggleClass(registerContainer, mobileSixty);
		toggleClass(logInContainer, mobileSixty);
		toggleClass(logInContainer, mobileForty);
	}
});

const actionContainer = getById('action-container');

const actionObj = {
	newUser: {
		button: getById('register-btn'),
		text: `You have Created An Account!`,
		inputs: {
			userName: getById('register-user'),
			email: getById('register-email'),
			password: getById('register-password'),
		},
	},

	user: {
		button: getById('login-btn'),
		text: `You have logged In!`,
		inputs: { userName: getById('login-user'), password: getById('login-password') },
	},
};

const { newUser, user } = actionObj;

const alertContainer = getById('alert-container');
const actionTextContainer = getById('action-text-container');
const actionText = createElement('p');

newUser.button.addEventListener(click, function () {
	if (
		newUser.inputs.userName.value == '' &&
		newUser.inputs.email.value == '' &&
		newUser.inputs.password.value == ''
	) {
		toggleClass(alertContainer, flexInactive);
	} else if (
		newUser.inputs.userName.value == '' &&
		!newUser.inputs.email.value == '' &&
		!newUser.inputs.password.value == ''
	) {
		toggleClass(alertContainer, flexInactive);
		textContent(alertContainer, 'Username Required!');
	} else if (
		!newUser.inputs.userName.value == '' &&
		newUser.inputs.email.value == '' &&
		newUser.inputs.password.value == ''
	) {
		toggleClass(alertContainer, flexInactive);
		textContent(alertContainer, 'Email And Password Required!');
	} else if (
		!newUser.inputs.userName.value == '' &&
		!newUser.inputs.email.value == '' &&
		newUser.inputs.password.value == ''
	) {
		toggleClass(alertContainer, flexInactive);
		textContent(alertContainer, 'PLEASE CREATE A PASSWORD!');
	} else if (
		!newUser.inputs.userName.value == '' &&
		newUser.inputs.email.value == '' &&
		!newUser.inputs.password == ''
	) {
		toggleClass(alertContainer, flexInactive);
		textContent(alertContainer, 'Please Enter A Valid Email');
	} else if (
		newUser.inputs.userName.value == '' &&
		!newUser.inputs.email.value == '' &&
		newUser.inputs.password.value == ''
	) {
		toggleClass(alertContainer, flexInactive);
		textContent(alertContainer, 'Username and Password Required!');
	} else {
		toggleClass(actionContainer, flexInactive);
		textContent(actionText, newUser.text);
		appendChild(actionTextContainer, actionText);
	}
});

user.button.addEventListener(click, function () {
	if (user.inputs.userName.value == '' && user.inputs.password.value == '') {
		toggleClass(alertContainer, flexInactive);
	} else if (user.inputs.userName.value == '' && !user.inputs.password.value == '') {
		toggleClass(alertContainer, flexInactive);
		textContent(alertContainer, 'Username Required!');
	} else if (!user.inputs.userName.value == '' && user.inputs.password.value == '') {
		toggleClass(alertContainer, flexInactive);
		textContent(alertContainer, 'Please Enter Password!');
	} else {
		toggleClass(actionContainer, flexInactive);
		textContent(actionText, user.text);
		appendChild(actionTextContainer, actionText);
	}
});

actionContainer.addEventListener(click, function () {
	toggleClass(actionContainer, flexInactive);
	removeChild(actionTextContainer, actionText);
});

alertContainer.addEventListener(click, function () {
	toggleClass(alertContainer, flexInactive);
});
