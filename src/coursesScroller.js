export function CoursesScroller() {
    const coursesPrevBtnEl = document.querySelector('.course-controls button:nth-child(1)');
    const coursesNextBtnEl = document.querySelector('.course-controls button:nth-child(2)');
    const coursesEl = document.getElementById('courses');
    const coursesEls = document.querySelectorAll('.course-item');

    let currentPosition = 1;

    CoursesBtnCheck()
    coursesPrevBtnEl.addEventListener('click', () => {
        if (currentPosition > 1 && currentPosition <= coursesEls.length) {
            let scrollDistance = coursesEls[currentPosition - 1].offsetWidth;
            coursesEl.scrollLeft -= scrollDistance;
            currentPosition--;
            CoursesBtnCheck();
        }
    });

    coursesNextBtnEl.addEventListener('click', () => {
        if (currentPosition >= 1 && currentPosition < coursesEls.length) {
            let scrollDistance = coursesEls[currentPosition].offsetWidth;
            coursesEl.scrollLeft += scrollDistance;
            currentPosition++;
            CoursesBtnCheck();
        }
    });

    function CoursesBtnCheck() {
        if (currentPosition == 1) {
            coursesPrevBtnEl.disabled = true;
        } else {
            coursesPrevBtnEl.disabled = false;
        }

        if (currentPosition < coursesEls.length) {
            coursesNextBtnEl.disabled = false;
        } else {
            coursesNextBtnEl.disabled = true;
        }
    };
}