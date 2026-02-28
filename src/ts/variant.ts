const buttons = [...document.querySelectorAll('.main-variants .btn')]
const images = [...document.querySelectorAll('.main-variants .main-variants-img')]

buttons.forEach((button, idx) => {
	button.addEventListener('click', (e) => {
		e.preventDefault()
		if (idx) {
			buttons[1].classList.add('active')
			buttons[0].classList.remove('active')
			images[1].classList.add('active')
			images[0].classList.remove('active')
			return
		}

		images[1].classList.remove('active')
		images[0].classList.add('active')
		buttons[1].classList.remove('active')
		buttons[0].classList.add('active')
	})
})
