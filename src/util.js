import {
    homeTemplate,
    aboutTemplate,
    skillsTemplate,
    coursesTemplate,
    contactTemplate
} from './templates.js';
import { CoursesScroller } from './coursesScroller.js';

const containerEl = document.getElementById('container');
const navEls = document.querySelectorAll('.navigation-section nav ul li button');

export function ValidateContent(button) {
    if (button.textContent == 'Home') {
        containerEl.innerHTML = homeTemplate;
    } else if (button.textContent == 'About Me') {
        containerEl.innerHTML = aboutTemplate;
    } else if (button.textContent == 'Skills') {
        containerEl.innerHTML = skillsTemplate;
    } else if (button.textContent == 'Courses') {
        containerEl.innerHTML = coursesTemplate;
        CoursesScroller();
    } else if (button.textContent == 'Contacts') {
        containerEl.innerHTML = contactTemplate;
    }
    ActiveNavCheck();
};

export function ActiveNavCheck() {
    const containerChildEl = document.querySelector('#container > div');
    RemoveActiveNav();

    if (containerChildEl.id == 'home') {
        navEls[0].classList.add('active');
    } else if (containerChildEl.id == 'about') {
        navEls[1].classList.add('active');
    } else if (containerChildEl.id == 'skills') {
        navEls[2].classList.add('active');
    } else if (containerChildEl.id == 'courses') {
        navEls[3].classList.add('active');
    } else if (containerChildEl.id == 'contacts') {
        navEls[4].classList.add('active');
    }
};

function RemoveActiveNav() {
    for (const button of navEls) {
        button.classList.remove('active');
    }
};

function DisableAllButtons() {
    for (const button of navEls) {
        button.disabled = true;
    }
};

function EnableAllButtons() {
    for (const button of navEls) {
        button.disabled = false;
    }
};

export function SuspendNavButtons() {
    DisableAllButtons();
    setTimeout(() => {
        EnableAllButtons();
    }, 1200);
};