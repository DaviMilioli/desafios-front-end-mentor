
function personalInfo(){
    const name = document.querySelector('#name')
    const email = document.querySelector('#email')
    const phone = document.querySelector('#phone')
    const required = document.querySelector('.span-required')
    const form = document.querySelector('.form');
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        if(name.value == '' && email.value == '' && phone.value == ''){
            required.innerText = 'Preencha os dados'
        }
    })

}
personalInfo()
