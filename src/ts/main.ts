import { isIndex, isQuestions } from 'ts/config'

const [logotype, intro, canvas] = await Promise.all([
	import('ts/logotype'),
	import('ts/intro'),
	// import("ts/dotsCanvas"),
])

const navs = [...document.querySelectorAll('navs a')] as HTMLLinkElement[]

navs.forEach((n) =>
	n.addEventListener('click', (e) => {
		if (n.href !== window.location.href) return
		e.preventDefault()
	}),
)

if (isIndex) {
	await Promise.all([import('ts/model'), import('ts/adv')])
}
if (isIndex) {
	setTimeout(() => intro.startIntro(isIndex), 1000)
} else {
	intro.startIntro(isIndex)
}

const heavyModules = [
	import('ts/mobileMenu'),
	import('ts/catalog'),
	import('ts/scrollAnimation'),
	import('ts/modal'),
	import('ts/slider'),
	import('ts/variant'),
	import('ts/inputPhone'),
]
if (isQuestions) {
	heavyModules.push(import('ts/accordion'))
}
await Promise.all(heavyModules)

export {}
