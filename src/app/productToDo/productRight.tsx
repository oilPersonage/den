import { nanoid } from "nanoid";
import CrossSvg from "src/components/crossSvg";
import { Select } from "src/components/select";
import { Product, TCharacter } from "src/libs/products";
import { ProductInput } from "./input";

type TChangeInput = (props: {
  value: string;
  name: "title" | "text";
  idx: string | number;
  isChildrenObjects?: boolean;
}) => void;

const mapFieldName = {
  name: "Название в меню",
  description: "Описание товара",
  slug: "Адрес страницы - всегда уникальный",
  h1: "Название товара",
  price: "Цена за единицу",
  headingDescription: "Описание под названием товара",
  keywords: "Слова через запятиую, для поисковика Яндекс",
  tag: "Группа к которой относится товар",
  characters: "Список характеристик"
};
const fieldWithLongText = ["description", "headingDescription", "keywords"];

function SelectCharacter({ onSelect, className }) {
  return (
    <Select
      className={className + " w-40 ml-auto mr-13"}
      options={["Описание", "Характеристика"]}
      value="+ Добавить"
      isSupport={true}
      onSelectAction={onSelect}
    />
  );
}

function stringCharacters(
  value: string,
  globalIdx: string,
  onChangeIdx: (fromIdx: string, toIdx: string) => "fail" | undefined,
  onRemove: (idx: string) => void,
  onChangeInput: TChangeInput
) {
  const idx = Number(globalIdx.split(".")[1]) + 1;
  function onBlur(e) {
    const newIdx = parseInt(e.target.value) - 1;

    if (!isNaN(newIdx)) {
      const isFail = onChangeIdx(globalIdx, newIdx);
      if (isFail === "fail")
        if (typeof globalIdx === "number") {
          e.target.value = globalIdx + 1;
          return;
        }
      e.target.value = Number(globalIdx.split(".")[1]) + 1;
    }
  }
  return (
    <div key={nanoid()} className="flex gap-1">
      <div className="input-wrapper h-fit max-w-12 h-min">
        <input
          className="text-center"
          type="text"
          defaultValue={idx}
          onBlur={onBlur}
        />
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="input-wrapper flex-1">
        <textarea
          className="min-w-52"
          defaultValue={value}
          onBlur={(e) =>
            onChangeInput({
              value: e.target.value,
              name: "text",
              idx: globalIdx
            })
          }
        />
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <CrossSvg onClick={() => onRemove(globalIdx)} />
    </div>
  );
}

function renderCharacters(
  item: TCharacter,
  globalIdx: number,
  onChangeIdx: (path: string, newIdx: number) => void,
  onRemove: (path: string) => void,
  addCharacter: (v: "Описание" | "Характеристика") => void,
  onChangeInput: TChangeInput
) {
  function onBlur(e) {
    const newIdx = parseInt(e.target.value) - 1;
    if (!isNaN(newIdx)) {
      const isFail = onChangeIdx(globalIdx, newIdx);
      if (isFail === "fail")
        if (typeof globalIdx === "number") {
          e.target.value = globalIdx + 1;
          return;
        }
      e.target.value = Number(globalIdx.split(".")[1]) + 1;
    }
  }
  return (
    <li className="flex gap-1 relative" key={nanoid()}>
      <div className="input-wrapper h-fit max-w-12">
        <input
          className="text-center"
          type="text"
          defaultValue={
            typeof globalIdx === "number"
              ? globalIdx + 1
              : Number(globalIdx.split(".")[1]) + 1
          }
          onBlur={onBlur}
        />
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="input-wrapper h-fit">
        <input
          className="min-w-52"
          defaultValue={item.title}
          onBlur={(e) =>
            onChangeInput({
              value: e.target.value,
              name: "title",
              idx: globalIdx
            })
          }
        />
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {item.children ? (
        <div className="w-full flex flex-col gap-1">
          <ul className="flex flex-col gap-1 w-full">
            {item.children?.map((item, localIdx) =>
              typeof item === "string"
                ? stringCharacters(
                    item,
                    `${globalIdx}.${localIdx}`,
                    onChangeIdx,
                    onRemove,
                    onChangeInput
                  )
                : renderCharacters(
                    item,
                    `${globalIdx}.${localIdx}`,
                    onChangeIdx,
                    onRemove,
                    addCharacter,
                    onChangeInput
                  )
            )}
            <SelectCharacter onSelect={(v) => addCharacter(v, globalIdx)} />
          </ul>
        </div>
      ) : (
        <div className="flex w-full flex-col gap-1">
          <div className="input-wrapper flex-1">
            <textarea
              defaultValue={item.text}
              onBlur={(e) =>
                onChangeInput({
                  value: e.target.value,
                  name: "text",
                  idx: globalIdx,
                  isChildrenObjects:
                    typeof globalIdx === "string" && !!item.text
                })
              }
              data-lenis-prevent
            ></textarea>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {typeof globalIdx === "number" ? (
            <SelectCharacter onSelect={(v) => addCharacter(v, globalIdx)} />
          ) : null}
        </div>
      )}
      <CrossSvg onClick={() => onRemove(globalIdx)} />
    </li>
  );
}

export default function ProductRight({
  product,
  tags,
  slugs,
  onUpdateProduct,
  setIsOpenedPreview
}: {
  product: Product;
  tags: Set<string>;
  slugs: string[];
  onUpdateProduct: (product: Product) => void;
  setIsOpenedPreview: (v: boolean) => void;
}) {
  function onChangeIndex(fromIdx: number | string, toIdx: number) {
    const newChar = [...product.characters];
    if (typeof fromIdx === "number") {
      const [moved] = newChar.splice(fromIdx, 1);
      if (toIdx < 0 || toIdx > newChar.length - 1) return "fail";
      newChar.splice(toIdx, 0, moved);
    } else {
      const [f, s] = fromIdx.split(".");
      const nextIdx = Number(s);
      const newC = [...newChar[Number(f)].children];
      const [moved] = newC.splice(Number(nextIdx), 1);
      newC.splice(toIdx, 0, moved);
      if (nextIdx < 0 || nextIdx > newChar.length - 1) return "fail";
      newChar[Number(f)] = { ...newChar[Number(f)], children: newC };
    }
    onUpdateProduct({ ...product, characters: newChar });
  }

  function addCharacter(v, idx) {
    switch (v) {
      case "Описание":
        if (idx === undefined) {
          onUpdateProduct({
            ...product,
            characters: [
              ...product.characters,
              { title: "text", children: ["text"] }
            ]
          });
        } else {
          onUpdateProduct({
            ...product,
            characters: product.characters.map((el, localIdx) =>
              localIdx === idx
                ? { ...el, children: [...el.children, "text"] }
                : el
            )
          });
        }
        break;
      case "Характеристика":
        if (idx === undefined) {
          onUpdateProduct({
            ...product,
            characters: [
              ...product.characters,
              { title: "text", children: [{ title: "text", text: "text" }] }
            ]
          });
        } else {
          onUpdateProduct({
            ...product,
            characters: product.characters.map((el, localIdx) =>
              localIdx === idx
                ? {
                    ...el,
                    children: [...el.children, { title: "text", text: "text" }]
                  }
                : el
            )
          });
        }
        break;
      default:
        break;
    }
  }

  function onRemove(idx: string | number) {
    if (typeof idx === "number") {
      onUpdateProduct({
        ...product,
        characters: product.characters.filter((_, localIdx) => localIdx !== idx)
      });
    } else {
      const [f, s] = idx.split(".");
      onUpdateProduct({
        ...product,
        characters: product.characters.map((el, localIdx) =>
          String(localIdx) === f
            ? {
                ...el,
                children: el.children.filter((e, idx2) => String(idx2) !== s)
              }
            : el
        )
      });
    }
  }

  const onChangeInput: TChangeInput = ({
    value,
    name,
    idx,
    isChildrenObjects
  }) => {
    if (typeof idx === "number") {
      onUpdateProduct({
        ...product,
        characters: product.characters.map((el, i) => {
          if (i === idx) {
            if (name === "title") {
              return { ...el, title: value };
            }
          }
          return el;
        })
      });
    } else {
      const [f, s] = idx.split(".");
      onUpdateProduct({
        ...product,
        characters: product.characters.map((el, i) => {
          if (i === Number(f)) {
            if (name === "title") {
              const newCh = [...el.children];
              newCh[Number(s)] = { ...newCh[Number(s)], title: value };
              return {
                ...el,
                children: newCh
              };
            } else {
              const newCh = [...el.children];
              if (isChildrenObjects) {
                newCh[Number(s)] = { ...newCh[Number(s)], text: value };
              } else {
                newCh[Number(s)] = value;
              }
              return {
                ...el,
                children: newCh
              };
            }
          }
          return el;
        })
      });
    }
  };

  const onChangeBase = (key, v: string) => {
    if (key === "slug") {
      if (slugs.includes(v)) return false;
      onUpdateProduct({
        ...product,
        [key]: v
      });
      return;
    }
    onUpdateProduct({
      ...product,
      [key]: key === "price" ? Number(v) : v
    });

    return true;
  };

  function renderProduct(el: Product) {
    return Object.keys(el).map((key) => {
      if (key === "id") return;
      if (key === "characters") {
        return (
          <div key={key}>
            <p className="mb-xs text-black/50">{mapFieldName[key]}</p>
            <ul className="flex flex-col gap-md">
              {el.characters?.map((item, idx) =>
                renderCharacters(
                  item,
                  idx,
                  onChangeIndex,
                  onRemove,
                  addCharacter,
                  onChangeInput
                )
              )}
            </ul>
          </div>
        );
      }
      if (key === "tag") {
        return (
          <div key={key}>
            <p className="mb-xs text-black/50">{mapFieldName[key]}</p>
            <Select
              onSelectAction={(v) => onUpdateProduct({ ...product, tag: v })}
              options={[...tags].map((el) => el)}
              value={product.tag}
            />
          </div>
        );
      }
      if (fieldWithLongText.includes(key)) {
        return (
          <div key={key}>
            <p className="mb-xs text-black/50">{mapFieldName[key]}</p>
            <textarea
              onBlur={(e) =>
                onUpdateProduct({ ...product, [key]: e.target.value })
              }
              defaultValue={product[key]}
            />
          </div>
        );
      }
      if (
        (typeof el[key] === "string" || typeof el[key] === "number") &&
        key !== "key" &&
        !fieldWithLongText.includes(key)
      ) {
        return (
          <ProductInput
            key={key}
            title={mapFieldName[key]}
            type={key === "price" ? "number" : "text"}
            value={el[key]}
            onBlur={(v) => onChangeBase(key, v)}
            {...el}
          />
        );
      }
    });
  }

  if (!product)
    return (
      <p className="py-lg">
        Загрузите файл product.json и Выберите продукт из списка слева
      </p>
    );
  return (
    <ul className="flex-1 flex flex-col gap-md pt-lg pr-xl pb-2xl">
      <h2 className="flex justify-between">
        {product?.h1}
        <button
          onClick={() => setIsOpenedPreview(true)}
          className="btn link black"
        >
          Посмотреть
        </button>
      </h2>
      {renderProduct(product)}
      <SelectCharacter className="!ml-0" onSelect={addCharacter} />
    </ul>
  );
}
