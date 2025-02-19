const btnCart = document.querySelector('.container-icono')
const hiddencart = document.querySelector('.hidden-cart')

btnCart.addEventListener('click', () => {
    hiddencart.classList.toggle('hidden-cart')
})

/*.............................................. */
const cartInfo = document.querySelector('cart-product')
