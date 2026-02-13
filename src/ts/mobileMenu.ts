import { animate, createTimeline, splitText, stagger } from 'animejs'
const navsWrapper = document.querySelector('.navs-wrapper')
const links = [...document.querySelectorAll('navs [data-ai="1"]')]
const navs = document.querySelector('navs') || ''
const contacts = document.querySelector('.header-contacts') || ''
const hamb = document.querySelector('.hamb')
let isOpened = false
import { isMobile } from './intro'

if (isMobile) {
	const { chars: menuChars } = splitText('.hamb-open', { chars: true })
	const { chars: closeChars } = splitText('.hamb-close', { chars: true })

	const animateMenu = createTimeline({ autoplay: false, defaults: { duration: 300 } })
		.label('close', 0)
		.label('open', 100)
		.add(
			menuChars,
			{
				translateY: [0, -12],
				easing: 'inOutCirc',
				delay: stagger(60),
			},
			'open',
		)
		.add(
			closeChars,
			{
				translateY: [0, -12],
				easing: 'inOutCirc',
				delay: stagger(60),
			},
			'close',
		)

	const timelineNavs = createTimeline({ autoplay: false, defaults: { duration: 500 } })
		.add(navs, {
			translateX: [40, 0],
			opacity: [0, 1],
			easing: 'easeOutQuad',
		})
		.add(
			links,
			{
				translateY: [stagger('-10', { from: 'first' }), 0],
				opacity: [0, 1],
				scale: [0.8, 1],
				easing: 'easeOutQuad',
				duration: 300,
				delay: stagger([0, 150], { from: 'first', ease: 'inInOut(3)' }),
			},
			'-=200',
		)

	const timelineContacts = createTimeline({ autoplay: false, defaults: { duration: 500 } })
		.add(contacts, {
			translateX: [-40, 0],
			opacity: [0, 1],
			easing: 'easeOutQuad',
		})
		.add('header [data-ai="1.1"]', {
			translateY: [stagger('-10'), 0],
			opacity: [0, 1],
			scale: [0.8, 1],
			duration: 300,
			easing: 'easeOutQuad',
			delay: stagger(40),
		})

	function toggleMenu(event: Event) {
		navsWrapper?.classList.toggle('opened')
		document.body.classList.toggle('menu-opened')

		if (isOpened) {
			animateMenu.reverse()
			timelineNavs.reverse()
			timelineContacts.reverse()
		} else {
			animateMenu.play()
			timelineNavs.play()
			timelineContacts.play()
		}

		isOpened = !isOpened
	}

	links.forEach((el: Element) => el.addEventListener('click', toggleMenu))
	if (hamb) {
		hamb.addEventListener('click', toggleMenu)
	}
}
