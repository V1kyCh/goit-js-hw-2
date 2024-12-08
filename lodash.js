const inputEl = document.querySelector('.slider__input')
const imageEl = document.querySelector('.slider__image')
const boxEl = document.querySelector('#box')

inputEl.addEventListener('input', _.debounce((e) => {
    console.log(e.target.value)
    imageEl.style.width = e.target.value + 'px'
}, 300))

window.addEventListener('mousemove', _.debounce((e) => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    boxEl.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}, 100))