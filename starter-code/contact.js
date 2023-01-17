// contact form validation
const submitBtn = document.querySelector('#submit-button');
const emailField = document.querySelector('#email');
const companyField = document.querySelector('#company');
const titleField = document.querySelector('#title');
const messageField = document.querySelector('#message');

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    validateInputs();
});

const validateInputs = () => {
    const nameValue = document.querySelector('#name');
    const emailValue = document.querySelector('#email');
    const companyValue = document.querySelector('#company');
    const titleValue = document.querySelector('#title');
    const messageValue = document.querySelector('#message');
    const regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
// user name check
    if (nameValue.value.trim() === '') {
        let parent = nameValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'visible';
    } else {
        let parent = nameValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'hidden';
    }

// email valid check
    if (emailValue.value.trim() === '') {
        let parent = emailValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'visible';
    } else if (!regex.test(emailValue.value)) {
        let parent = emailValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'visible';
    } else {
        let parent = emailValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'hidden';
    }

// company name check
    if (companyValue.value.trim() === '') {
        let parent = companyValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'visible';
    } else {
        let parent = companyValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'hidden';
    }
// title check
    if (titleValue.value.trim() === '') {
        let parent = titleValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'visible';
    } else {
        let parent = titleValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'hidden';
    }
// message check
    if (messageValue.value.trim() === '') {
        let parent = messageValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'visible';
    } else {
        let parent = messageValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'hidden';
    }
}
