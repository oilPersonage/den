import { animate, stagger, svg } from 'animejs'

animate(svg.createDrawable('.anime2'), {
	draw: ['0 0', '0 1', '0 1', '1 1'],
	ease: 'easeInOutQuad',
	duration: 4000,
	loop: true,
})

animate('.loading-shadow', {
	opacity: [0, 0.1, 0],
	scale: [
		{ from: 1, to: 0.7, duration: 750 },
		{ from: 0.7, to: 1, duration: 750 },
	],
	loop: true,
	duration: 1500,
	delay: 1500,
	loopDelay: 2500,
})
animate('.loading-inner', {
	scaleY: [
		{ from: 1, to: 0.9, duration: 100, ease: 'outCirc' },
		{ from: 0.9, to: 1, duration: 100, ease: 'inCirc' },
		{ from: 1, to: 0.9, duration: 100, ease: 'outCirc', delay: 1500 },
		{ from: 0.9, to: 1, duration: 100, ease: 'inCirc' },
	],
	loop: true,
	delay: 1300,
	loopDelay: 2100,
})
animate('.loading-wrapper', {
	y: [
		{ from: 0, ease: 'outSine', to: -40, delay: 1500 },
		{ from: -40, ease: 'inSine', to: 0 },
	],
	rotate: [{ from: 0, to: -360, delay: 1500, easy: 'inOutSine', duration: 1500 }],
	easing: 'inOutExpo',
	duration: 1500,
	delay: 1500,
	loop: true,
	loopDelay: 2500,
})

animate('.anime22 path', {
	opacity: [0, 1, { to: 0, delay: 1500 }],
	delay: stagger(100, { start: 500 }), // 800 + 500 = 1300 + 1500 = 2800
	duration: 1000,
	loopDelay: 800,
	loop: true,
	onComplete() {},
})
