import { ReactElement } from 'react'
import { priceFormatter } from '../utils/priceFormater'
type TProps = {
	price?: number
	count?: number
	name?: string
	modalDataName?: string
	delivery?: string
	paymentMethod?: string
	renderedExtraInfo?: ReactElement
}

export default function Request(props: TProps) {
	const mapSelected: Record<keyof TProps, string> = {
		name: 'Наименование',
		count: 'Кол-во',
		delivery: 'Способ доставки',
		// paymentMethod: 'Способ оплаты',
		price: 'Стоимость',
	}
	const renderSelect: {
		title: (typeof mapSelected)[keyof typeof mapSelected]
		text: string | number
	}[] = []

	Object.keys(mapSelected).forEach((key) => {
		const k = key as keyof TProps
		if (!props?.[k]) return
		renderSelect.push({
			title: mapSelected[key as keyof TProps],
			text: key === 'price' ? priceFormatter(props[k]) + ' ₽' : props[k],
		})
	})
	console.log({ props })

	return (
		<div className='modal' data-modal-name={props.modalDataName ?? 'request'}>
			<div className='modal-wrapper'>
				<div className='modal-inner'>
					<h4 data-modal-title className='mb-md'>
						Оставить заявку
					</h4>
					<div className='flex max-md:flex-col gap-md mb-md'>
						<label htmlFor='name'>
							<p data-modal-anim='1'>Ваше имя</p>
							<div className='input-wrapper'>
								<input data-modal-anim='2' className='input-base' type='text' name='name' id='name' placeholder='Имя' />
								<span className='btn-tl'></span>
								<span className='btn-bl'></span>
								<span className='btn-tr'></span>
								<span className='btn-br'></span>
							</div>
						</label>
						<label htmlFor='phone'>
							<p data-modal-anim='1'>Ваш телефон</p>
							<div className='input-wrapper'>
								<input
									className='input-base'
									data-modal-anim='2'
									type='text'
									data-phone
									placeholder='Телефон'
									name='phone'
									id='phone'
								/>

								<span className='btn-tl'></span>
								<span className='btn-bl'></span>
								<span className='btn-tr'></span>
								<span className='btn-br'></span>
							</div>
						</label>
					</div>
					<label htmlFor='description' className='mb-md'>
						<p data-modal-anim='1'>Описание</p>
						<div className='input-wrapper'>
							<textarea
								className='input-base'
								placeholder='Напишите ваш вопрос'
								data-modal-anim='2'
								id='description'
								name='description'
							></textarea>

							<span className='btn-tl'></span>
							<span className='btn-bl'></span>
							<span className='btn-tr'></span>
							<span className='btn-br'></span>
						</div>
					</label>

					{props.renderedExtraInfo}
					{Object.keys(props).length > 0 && (
						<div className='max-md:flex max-md:flex-wrap gap-sm my-md -mt-1' data-modal-anim='1'>
							{renderSelect.map(({ title, text }) => (
								<div key={title} className='flex gap-sm max-md:flex-col max-md:gap-1'>
									<p className='min-w-40'>{title}</p>
									<p className='text-left'>{text}</p>
								</div>
							))}
						</div>
					)}

					<div className='flex flex-col gap-sm'>
						<a data-modal-anim='1' href='#' className='btn black'>
							Отправить
							<span className='btn-tl'></span>
							<span className='btn-tr'></span>
							<span className='btn-bl'></span>
							<span className='btn-br'></span>
						</a>

						<span data-modal-anim='2' className='flex flex-col leading-[1.1]'>
							Нажимая кнопку, вы даете согласие на обработку персональных данных в соответствии с
							<a href='#' className='link-short inline' data-modal='polities'>
								Политикой конфиденциальности
							</a>
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
