const weatherForm = document.querySelector('form')
const weatherText = document.querySelector('input')

const locationText = document.querySelector('#location')
const forecastText = document.querySelector('#forecast')

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    forecastText.textContent=''

    fetch('/weather?address=' + weatherText.value).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            locationText.textContent = data.error
        } else {
            locationText.textContent = data.location
            forecastText.textContent = data.forecast
        }
    })
})

})