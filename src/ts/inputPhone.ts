const inputs = [...document.querySelectorAll<HTMLInputElement>('[data-phone]')]

inputs.forEach((input) => {
	if (input) {
		input.value = '+7'
	}
	input?.addEventListener('keydown', (e: KeyboardEvent) => {
		const target = e.target as HTMLInputElement

		const isControlKey =
			e.ctrlKey ||
			e.metaKey ||
			['Backspace', 'Delete', 'Tab', 'Enter', 'Escape', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)

		// 2. Проверяем, является ли нажатая клавиша цифрой
		const isNumber = /^[0-9]$/.test(e.key)

		if (!isControlKey && !isNumber) {
			e.preventDefault()
			return
		}
		if (e.key === 'Backspace' && target.value.replace(/\D/g, '').length <= 2) {
			target.value = '+7'
			e.preventDefault()
		}
	})

	input?.addEventListener('input', (e: Event) => {
		const target = e.target as HTMLInputElement
		if (!target?.value) return

		let val = target.value.replace(/\D/g, '')

		if (val.startsWith('7')) val = val.substring(1)
		if (val.length > 10) val = val.substring(0, 10)

		const m = val.match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
		if (!m) return

		target.value = !m[1]
			? ''
			: `+7 (${m[1]}` + (m[2] ? `) ${m[2]}` : '') + (m[3] ? `-${m[3]}` : '') + (m[4] ? `-${m[4]}` : '')
	})
})

export {}
