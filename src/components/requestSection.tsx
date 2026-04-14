import RequestForm from './requestForm'

export default function RequestSection() {
	return (
		<section className='wrapper py-xl*:flex-1 min-h-screen flex items-center' data-animate-container>
			<div className='flex max-md:flex-col gap-md md:gap-xl '>
				<RequestForm />
				<div className='flex flex-col gap-xs md:gap-sm'>
					<h2 className='font-bold font-display' data-from-bottom>
						Остались вопросы?
					</h2>
					<p data-from-bottom>Оставьте заявку, и мы обязательно вам перезвоним!</p>
				</div>
			</div>
		</section>
	)
}
