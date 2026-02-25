async function bootstrap() {
	// 1. Сначала загружаем критические модули (логотип и интро)
	// Мы используем динамический импорт, чтобы контролировать порядок
	const [logotype, intro] = await Promise.all([import('./ts/logotype'), import('./ts/intro')])

	// 2. В фоновом режиме подгружаем всё остальное (инфраструктуру)
	// Это не блокирует запуск анимации интро
	const heavyModules = [
		import('./ts/mobileMenu'),
		import('./ts/scrollAnimation'),
		import('./ts/model'),
		import('./ts/modal'),
		import('./ts/slider'),
		import('./ts/adv'),
	]

	// 3. Когда всё (включая DOM и скрипты) готово — запускаем Intro
	// Внутри intro.ts должна быть функция, например export const startIntro = ...
	setTimeout(intro.startIntro, 1000)

	// Ждем остальные модули (просто чтобы убедиться, что всё ок)
	await Promise.all(heavyModules)
}

bootstrap()
