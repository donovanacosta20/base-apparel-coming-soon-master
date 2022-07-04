const email = document.getElementById('email')
const submit = document.getElementById('submit')
const error = document.querySelectorAll('.error__visible')


submit.addEventListener('click', event => {

    const regex = /[a-z0-9!#$%&' * +/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

    const isValid = email.value.match(regex)


    if (!isValid) {
        event.preventDefault()

        error[0].classList.remove('error__visible')
        error[1].classList.remove('error__visible')
    } else {
        email.value = ""
        error[0].classList.add('error__visible')
        error[1].classList.add('error__visible')
    }

})