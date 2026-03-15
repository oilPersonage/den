import { nanoid } from "nanoid";
import { useMemo, useState } from "react";
import CrossSvg from "src/components/crossSvg";
import { Select } from "src/components/select";
import { Product } from "src/libs/products";

const newProduct = {
  name: "Новый товар",
  h1: "text",
  description: "text",
  slug: "slug",
  price: "number",
  headingDescription: "text",
  keywords: "",
  tag: "",
  characters: []
};

const tags = [
  "Блок-контейнер",
  "Павильоны",
  "Модульные здания",
  "Посты охраны и проходные блок пост",
  "Модульный дом",
  "Административно-бытовые комплексы, общежития, столовые",
  "Производство, изготовление металлоконструкций каркасы разного типа",
  "Блоки КНС и контейнеры для мобильных генераторных станций",
  "Вагон-дом на шасси",
  "Сантехнические блоки",
  "Баня"
];

export default function ProductLeft({
  products,
  current,
  setCurrent,
  setProducts
}) {
  const [file, setFile] = useState<File | null>(null);
  const grouped = useMemo(() => {
    const data: Record<string, Product[]> = {};
    products.forEach((element) => {
      const target = data[element.tag];
      if (target && target.length) {
        target.push(element);
        return;
      }
      data[element.tag] = [element];
    });
    return data;
  }, [products]);

  function onChangeFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setFile(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const jsonData = JSON.parse(e.target?.result as string);
        setProducts(jsonData);
      } catch {
        alert("Некорректный JSON");
      }
    };
    reader.readAsText(file);
  }

  function onSave() {
    const jsonContent = JSON.stringify(products, null, 2);
    const blob = new Blob([jsonContent], { type: "application/json" });

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `products-${new Date().toISOString().slice(0, 10)}.json`; // Имя файла с датой
    a.click();

    URL.revokeObjectURL(a.href);
  }

  function onAddNew(tag: string) {
    const p = { ...newProduct, id: nanoid() };
    p.tag = tag;
    setProducts([...products, p]);
  }

  return (
    <ul className="sticky top-0 w-120 bg-bg2 px-md pt-sm min-h-screen max-h-screen flex flex-col">
      <div className="flex flex-col gap-sm mb-md">
        <p>Загрузить файл .json</p>
        <div className="flex gap-sm">
          <input
            className="bg-btn-hover cursor-pointer"
            accept=".json,application/json"
            type="file"
            id="json-updoad"
            onChange={onChangeFile}
          />
          {file && (
            <p className="file-preview self-center mr-md font-bold">
              {file.name}
            </p>
          )}
          <button className="btn link black" onClick={onSave}>
            Скачать
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <h4 className="mb-sm flex items-center justify-between">
        <p className="w-full">Список товаров</p>
        <Select
          className={"h-fit text-sm"}
          options={tags}
          value="+ Добавить"
          onSelectAction={onAddNew}
        />
      </h4>
      <div data-lenis-prevent className="flex flex-col flex-1 overflow-y-auto">
        {Object.keys(grouped).map((key, idx) => (
          <div key={key}>
            <p className="mb-sm text-black/50 uppercase">{key}</p>
            <div className="pb-md flex flex-col gap-1">
              {grouped[key]?.map((el) => (
                <div className="flex gap-xs pr-xs" key={el.id}>
                  <button
                    onClick={() => setCurrent(el.id)}
                    className={`btn link flex-1 text-left ${current === el.id ? "black" : ""}`}
                  >
                    {el.name}
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                  <CrossSvg
                    onClick={() =>
                      setProducts(products.filter((p) => p.id !== el.id))
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ul>
  );
}
