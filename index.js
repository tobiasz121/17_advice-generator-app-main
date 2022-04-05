// import snackbar from "snackbar"
const pic = document.querySelector('button')
const adviceNr = document.querySelector('h1')
const adviceText = document.querySelector('blockquote')

pic.addEventListener('click', event => {    
    const response = fetch('https://api.adviceslip.com/advice').then(response => {
        // snackbar.show('Received data successfully')
        // snackbar.duration(2000)
        return response.json()
    })
    .then(data => {
        console.log(data.slip.id)
        const advice_nr = data.slip.id
        const advice_text = data.slip.advice
        adviceNr.textContent = `ADVICE #${advice_nr}`
        adviceText.textContent = `${advice_text}`
    })   
})