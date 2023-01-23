import {
    ValidateContent,
    SuspendNavButtons
} from './util.js';

const containerEl = document.getElementById('container');
const navEls = document.querySelectorAll('.navigation-section nav ul li button');

let currentButtonIndex;
let previousButtonIndex;

export function ButtonFunctionality() {
    for (const button of navEls) {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            if (previousButtonIndex == undefined) {
                previousButtonIndex = 0;
            } else {
                previousButtonIndex = currentButtonIndex;
            }
            currentButtonIndex = Array.from(navEls).indexOf(button);

            if (currentButtonIndex > previousButtonIndex) {
                SuspendNavButtons();

                containerEl.classList.toggle('fadeUp');
                containerEl.addEventListener('animationend', () => {
                    containerEl.classList.remove("fadeUp");

                    ValidateContent(button);

                    containerEl.classList.toggle('fadeFromDown');
                    containerEl.addEventListener('animationend', () => {
                        containerEl.classList.remove('fadeFromDown');
                    });
                });
            } else if (currentButtonIndex < previousButtonIndex) {
                SuspendNavButtons();

                containerEl.classList.toggle('fadeDown');
                containerEl.addEventListener('animationend', () => {
                    containerEl.classList.remove('fadeDown');

                    ValidateContent(button);

                    containerEl.classList.toggle('fadeFromUp');
                    containerEl.addEventListener('animationend', () => {
                        containerEl.classList.remove('fadeFromUp');
                    });
                });
            }
        });
    }
}