import type { Locale } from "../i18n/dictionaries";

export const declarationUrl = "/documents/eaeu-declaration-honey.pdf";

export const quality: Record<Locale, {
  title: string;
  document: string;
  scope: string;
  facts: { label: string; value: string }[];
  openPdf: string;
  footerLink: string;
  productLink: string;
}> = {
  ru: {
    title: "Качество и документы",
    document: "Декларация о соответствии ЕАЭС",
    scope: "Декларация относится к натуральному мёду перечисленных видов.",
    facts: [
      { label: "Регистрационный номер", value: "ЕАЭС N RU Д-RU.РА08.В.18625/24" },
      { label: "Дата регистрации", value: "10.09.2024" },
      { label: "Действительна по", value: "09.09.2029 включительно" },
      { label: "Соответствует", value: "ТР ТС 021/2011 «О безопасности пищевой продукции» и ТР ТС 022/2011 «Пищевая продукция в части её маркировки»" },
      { label: "Продукция", value: "Мёд натуральный. Виды: цветочный, гречишный, липовый, каштановый, акациевый, донниковый, чайного дерева (манука), горный, молочай, золотарник, разнотравие, сотовый." },
    ],
    openPdf: "Открыть декларацию (PDF)",
    footerLink: "Декларация соответствия",
    productLink: "Декларация соответствия ЕАЭС",
  },
  en: {
    title: "Quality and documents",
    document: "EAEU Declaration of Conformity",
    scope: "The declaration applies to natural honey of the listed varieties.",
    facts: [
      { label: "Registration number", value: "ЕАЭС N RU Д-RU.РА08.В.18625/24" },
      { label: "Registration date", value: "10.09.2024" },
      { label: "Valid through", value: "09.09.2029 inclusive" },
      { label: "Conforms to", value: "TR CU 021/2011 “On Food Safety” and TR CU 022/2011 “Food Products in Terms of Their Labelling”" },
      { label: "Product", value: "Natural honey. Varieties: floral, buckwheat, linden, chestnut, acacia, sweet clover, tea tree (manuka), mountain, spurge, goldenrod, wildflower, comb honey." },
    ],
    openPdf: "Open declaration (PDF)",
    footerLink: "Declaration of conformity",
    productLink: "EAEU Declaration of Conformity",
  },
};
