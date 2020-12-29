const toggleBtn = document.querySelector('section.info .title-menu button.toggle');
const title = document.querySelector('section.info .title-menu .title');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
})





