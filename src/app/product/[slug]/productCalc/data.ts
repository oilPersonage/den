import products from "src/data/products";
import { heights, Heights, Widths, widths } from "src/ts/calculator/data";

export const hOptions: { value: Heights; label: string }[] = [];
export const wOptions: { value: Widths; label: string }[] = [];

for (const key of heights.keys()) {
  hOptions.push({ value: key, label: key + "м" });
}

for (const key of widths.keys()) {
  wOptions.push({ value: key, label: key + "м" });
}

export const baseMaterials = [
  { value: "1", label: "ОСП" },
  { value: "2", label: "ЛДСП" },
  { value: "3", label: "АКВА" }
];

export const bases = [
  { value: "1", label: "Профлист" },
  { value: "2", label: "Сендвич панели" },
  { value: "3", label: "Вагонка" },
  { value: "4", label: "Брус" }
];

export const variants = products
  .filter((el) => el.tag === "Блок-контейнер")
  .map((el) => ({
    value: el.slug,
    data: { src: el.pictures[0]?.smallSrc, name: el.name }
  }));
variants.unshift({ value: "base", data: { name: "Пустой блок" } });

export const charactersMap = {
  "Размер наружный": "[w] х [h] х [h2] м",
  Площадь: "[summ] м²",
  "Высота потолков": "[h2] м",
  Кровля: "Плоская / Односкатная / Двухскатная",
  "Внутренняя отделка": "[material], линолеум, плинтуса, пароизоляция",
  "Наружная отделка": "[base], гидроизоляция",
  Полы: "ОСП / ЦСП",
  Электропроводка: "Светодиодные светильники, розетки, щит, кабель-каналы",
  Масса: "2 т"
};
