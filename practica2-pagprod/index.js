const inputQuantity = document.querySelector('.input-quantity')
const btnIncrement = document.querySelector('#increment')
const btnDecrement = document.querySelector('#decrement')

let valueByDefault = parseInt(inputQuantity.value)


//Funciones Click

//Función para que incremente 1 cada vez que se hace Click en el Botón de Flecha hacia arriba.
btnIncrement.addEventListener('click', () => {
    valueByDefault += 1
    inputQuantity.value = valueByDefault
})

//Función para que Decremente 1 cada vez que se hace Click en el Botón de Flecha hacia arriba.
btnDecrement.addEventListener('click', () => {
    if(valueByDefault===1){
        return
    }
    valueByDefault -= 1
    inputQuantity.value = valueByDefault
})

//Toggle
//Constantes Toggle Titles
const toggleDescription = document.querySelector('.title-description')
const toggleAdditionalInformation = document.querySelector('.title-additional-information')
const toggleReviews = document.querySelector('.title-reviews')


//Constantes Toggle Contenido
const contentDescription = document.querySelector('.text-description')
const contentAdditionalInformation = document.querySelector('.text-additional-information')
const contentReviews = document.querySelector('.text-reviews')


// Funciones Toogle
toggleDescription.addEventListener('click', () => {
    contentDescription.classList.toggle('hidden');
})

toggleAdditionalInformation.addEventListener('click', () => {
    contentAdditionalInformation.classList.toggle('hidden');
})

toggleReviews.addEventListener('click', () => {
    contentReviews.classList.toggle('hidden');
})