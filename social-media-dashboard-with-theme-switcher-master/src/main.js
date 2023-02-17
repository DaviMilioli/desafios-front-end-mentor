const darkmode = document.querySelector('.darkmode-container');
const btn_dark = document.querySelector('.btn-darkmode span')
const body = document.body;
darkmode.addEventListener('click', () => {
    btn_dark.classList.toggle('active');
    body.classList.toggle('active')

})

