const getById = (id) => document.getElementById(id);
const getByClass = (arg) => document.getElementsByClassName(arg);
const addClass = (elm, cls) => elm.classList.add(cls);
const removeClass = (elm, cls) => elm.classList.remove(cls);
const toggleClass = (elm, cls) => elm.classList.toggle(cls);
const textContent = (elm, txt) => (elm.textContent = txt);

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

console.log(register.header);

const click = 'click';

const coverButton = getById('form-cover-button');
const formCover = getById('form-cover');
const coverHeader = getById('form-cover-header');
const formQuestion = getById('form-cover-question');

const logInActive = 'login-active';
const registerActive = 'register-active';

const toggleCoverForm = (toggler, obj, obj2) => {
	toggler.addEventListener(click, function () {
		if (!formCover.classList.contains(registerActive)) {
			toggleClass(formCover, logInActive);
			toggleClass(formCover, registerActive);
			textContent(coverHeader, obj.header);
			textContent(formQuestion, obj.question);
			textContent(coverButton, obj.buttonText);
		} else {
			toggleClass(formCover, logInActive);
			toggleClass(formCover, registerActive);
			textContent(coverHeader, obj2.header);
			textContent(formQuestion, obj2.question);
			textContent(coverButton, obj2.buttonText);
		}
	});
};

toggleCoverForm(coverButton, login, register);
toggleClass(coverButton, register, login);
