export default function ProductInfo({
  charact
}: {
  charact: { title: string; value: string }[];
}) {
  return (
    <div className={`product-calc-info`}>
      <ul className="product-characters">
        {charact.map(({ title, value }) => (
          <li className="flex gap-md" key={title}>
            <p className="min-w-40">{title}</p>
            <p>{value}</p>
          </li>
        ))}
        <p className="font-bold text-lg mt-sm">
          Все данные могут отличаться в зависимости от Ваших потребностей
        </p>
      </ul>
    </div>
  );
}
