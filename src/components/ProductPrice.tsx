"use client";

import { useMemo, useState } from "react";
import { priceFormatter } from "src/utils/priceFormater";
import Request from "./request";

export default function ProductPrice({
  price,
  name
}: {
  price: number;
  name: string;
}) {
  const [count, setCount] = useState(1);
  const [delivery, setDelivery] = useState("Самовывоз");
  // const [paymentMethod, setPaymentMethod] = useState('Наличка')

  const totalPrice = useMemo(() => price * count, [price, count]);

  function onChangeCount(e) {
    if (/^\d+$/.test(e.target.value)) setCount(e.target.value);
  }

  const isSelfDeliver = delivery === "Самовывоз";

  return (
    <div className="flex flex-col gap-md mb-lg max-md:order-4 max-md:mt-lg">
      <div className="flex gap-md relative z-1 max-md:mb-sm">
        <div className="flex flex-col gap-sm" data-ai="4">
          <p>Кол-во товара</p>
          <div className="product-count">
            <button
              className="btn link px-3.5 h-10 py-2 bg-btn-hover"
              onClick={() => setCount((v) => (v === 1 ? 1 : v - 1))}
            >
              <svg
                className="w-3"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 10.5V13.5L0 13.5L2.62268e-07 10.5L24 10.5Z"
                  fill="black"
                />
              </svg>

              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <label className="input-wrapper" htmlFor="count">
              <input
                id="count"
                type="text"
                value={count}
                onChange={onChangeCount}
                className="text-center min-w-18 max-h-10 min-h-10 bg-btn-hover"
                min="1"
              />
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </label>
            <button
              onClick={() => setCount((v) => (v < 1000 ? v + 1 : 1000))}
              className="btn link px-3.5 h-10 py-2 bg-btn-hover"
            >
              <svg
                className="w-3"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_358_45)">
                  <path
                    d="M24 10.259V13.259L0 13.259L2.62268e-07 10.259L24 10.259Z"
                    fill="black"
                  />
                  <path
                    d="M10.5 1.31134e-07L13.5 0L13.5 24H10.5L10.5 1.31134e-07Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_358_45">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        {/*<div className='flex flex-col gap-sm' data-ai='4'>
					<p>Способ доставки:</p>
					<Select
						className='min-w-50'
						options={['Самовывоз', 'За счет компании']}
						onSelectAction={(v) => setDelivery(v)}
						value={delivery}
					/>
				</div>*/}
        {/*<div className='flex flex-col gap-sm' data-ai='4'>
					<p>Способы оплаты:</p>
					<Select
						className='w-60'
						options={['Наличка', 'Картой при получении']}
						onSelectAction={(v) => setPaymentMethod(v)}
						value={paymentMethod}
					/>
				</div>*/}
      </div>
      <div className="product-price-summ">
        <a
          href="#"
          className="btn black max-md:order-2 max-md:py-4 max-md:text-lg max-md:w-full max-md:justify-center"
          data-modal="request"
          data-ai="4"
        >
          Оставить заявку
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </a>
        <div className="flex flex-col" data-ai="4">
          <div className="flex flex-wrap gap-x-sm text-xl max-md:*:text-2xl">
            <p>от {priceFormatter(price)} ₽</p>
            <p>x {priceFormatter(count)}</p>
            <p>=</p>
            <p>от {priceFormatter(price * count)} ₽</p>
          </div>
          <p className="text-black/40">
            Стоимость доставки:{" "}
            {isSelfDeliver ? "Бесплатно" : "Зависит от региона"}
          </p>
        </div>
      </div>

      <Request
        count={count}
        name={name}
        delivery={delivery}
        // paymentMethod={paymentMethod}
        price={totalPrice}
      />
    </div>
  );
}
