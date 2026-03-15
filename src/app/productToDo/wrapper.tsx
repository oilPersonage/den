"use client";

import { useEffect, useMemo, useState } from "react";
import { Product } from "src/libs/products";
import Preview from "./preview";
import ProductLeft from "./productLeft";
import ProductRight from "./productRight";

export default function Wrapper() {
  const [products, setProducts] = useState<Product[]>([]);
  const [current, setCurrent] = useState("");
  const [isOpenedPreview, setIsOpenedPreview] = useState(false);

  useEffect(() => {
    const p = localStorage.getItem("products");
    const cP = localStorage.getItem("currentProduct");
    const pp = JSON.parse(p);
    if (p) {
      setProducts(pp);
    }
    if (cP) setCurrent(JSON.parse(cP));
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("currentProduct", JSON.stringify(current));
  }, [current]);

  function onSetProducts(v: Product[]) {
    setProducts(v);
    setCurrent(v[0]?.id);
  }

  const tags = useMemo(() => {
    const tagsMap = new Set();
    products.forEach((el) => tagsMap.add(el.tag));
    return tagsMap;
  }, [products]);

  // console.log(
  //   products.map((el) => ({
  //     ...el,
  //     characters: [
  //       {
  //         title: "text",
  //         children: [
  //           "text123",
  //           {
  //             title: "text1",
  //             text: "text1123"
  //           }
  //         ]
  //       },
  //       {
  //         title: "Размеры",
  //         children: ["Д х Ш х В: 6.0 х 2.4 х 2.5 м"]
  //       },
  //       {
  //         title: "Масса",
  //         children: ["Не более 2000 кг"]
  //       },
  //       {
  //         title: "Каркас, несущий",
  //         children: ["Металлический, сварной, усиленный"]
  //       },
  //       {
  //         title: "Отделка",
  //         children: [
  //           {
  //             title: "Наружная",
  //             text: "Оцинкованный профилированный лист С-8"
  //           },
  //           {
  //             title: "Внутренняя",
  //             text: "Стены / Потолок – OSB 9 мм"
  //           }
  //         ]
  //       },
  //       {
  //         title: "Утепление",
  //         children: [
  //           {
  //             title: "Стены",
  //             text: "Минеральная плита. Толщина – 100 мм. Паро-гидроизоляционная пленка «Изоспан» или аналог"
  //           },
  //           {
  //             title: "Потолок",
  //             text: "Минеральная плита. Толщина – 100 мм. Паро-гидроизоляционная пленка «Изоспан» или аналог"
  //           }
  //         ]
  //       },
  //       {
  //         title: "Пол",
  //         children: [
  //           "Оцинкованный лист. Утепление 100 мм (Минеральная вата). Пароизоляция тип «В». Доска 40х100 мм. ОСБ 12 мм. Линолеум / Плинтус ПВХ"
  //         ]
  //       },
  //       {
  //         title: "Входная группа",
  //         children: [
  //           "Металлическая дверь 900х2000 мм, заводского изготовления (Россия), с врезным замком, ручкой прижимом"
  //         ]
  //       },
  //       {
  //         title: "Окраска",
  //         children: ["Каркас: грунт-эмаль по металлу"]
  //       },
  //       {
  //         title: "Окна",
  //         children: [
  //           "ПВХ, 900 х 900 мм, однокамерный стеклопакет, поворотно-откидное – 1 шт"
  //         ]
  //       },
  //       {
  //         title: "Электропроводка",
  //         children: [
  //           "Кабель медный ВВГнг 3 х 2.5 мм (розетки)",
  //           "Кабель медный ВВГнг 3 х 1.5 мм (освещение)",
  //           "Уложен в ПВХ кабель-канал (наружным способом)",
  //           "Выключатель одноклавишный – 1 шт",
  //           "Розетка двухместная – 1 шт",
  //           "Светильник светодиодный – 2 шт",
  //           "Автоматический выключатель 25А – розетки",
  //           "Автоматический выключатель 10А – светильники"
  //         ]
  //       },
  //       {
  //         title: "Срок доставки",
  //         children: ["от 3 дней"]
  //       }
  //     ]
  //   }))
  // );

  return (
    <div className="bg-bg flex gap-xl flex-1">
      <ProductLeft
        current={current}
        setProducts={onSetProducts}
        setCurrent={setCurrent}
        products={products}
      />
      <ProductRight
        setIsOpenedPreview={setIsOpenedPreview}
        key={current}
        tags={tags}
        slugs={products.map((el) => el.slug)}
        onUpdateProduct={(product) =>
          setProducts(
            products.map((el) => (el.id === product.id ? product : el))
          )
        }
        product={products.find((el) => el.id === current)}
      />
      {current && (
        <Preview
          isOpened={isOpenedPreview}
          setIsOpened={setIsOpenedPreview}
          product={products.find((el) => el.id === current)}
        />
      )}
    </div>
  );
}
