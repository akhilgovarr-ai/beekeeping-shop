import type { Locale } from "../i18n/dictionaries";

export type HistoryBlockData = {
  id: string;
  title: string;
  text: string;
  image?: { src: string; alt: string };
};

type HistoryContent = {
  title: string;
  subtitle: string;
  catalogueCta: string;
  blocks: HistoryBlockData[];
};

export const history: Record<Locale, HistoryContent> = {
  ru: {
    title: "О нас",
    subtitle: "Путь, который начался в Грозном и продолжается вслед за цветением трав",
    catalogueCta: "Перейти в каталог",
    blocks: [
      {
        id: "beginning",
        title: "Начало",
        text: "Всё началось в 1980-х в Грозном. В шестнадцать лет наш основатель встретил наставника, пчеловода Юрия Михайловича Васильева. Он передал ему не только основы ремесла, но и уважение к пчеле: научил делать рамки и ульи своими руками. Мы благодарны ему за терпение и знания, которые легли в основу нашей пасеки.",
      },
      {
        id: "first-hive",
        title: "Первый улей",
        text: "Первый улей был собран вручную. Пасека стояла под навесом в Грозном, затем были Бамут, горные Мужичи и Алкун. С каждым годом росли опыт, понимание природы и убеждение, что настоящий мёд рождается там, где пчёлам не мешают.",
      },
      {
        id: "today",
        title: "Сегодня",
        text: "Мы остаёмся верны традиции кочевого пчеловодства. Пчелосемьи выезжают туда, где цветёт лучший медонос: на гречишные поля в Орле, на золотарник в Туле. Благодаря этому каждый сорт мёда получает свой неповторимый вкус и аромат.",
      },
      {
        id: "principle",
        title: "Наш принцип",
        text: "Мы не используем химию и антибиотики. Наши пчёлы живут по законам природы, а мы лишь помогаем им в этом.",
      },
    ],
  },
  en: {
    title: "About us",
    subtitle: "A journey that began in Grozny and continues wherever the herbs bloom",
    catalogueCta: "Go to catalog",
    blocks: [
      {
        id: "beginning",
        title: "Beginning",
        text: "It all began in the 1980s in Grozny. At sixteen, our founder met his mentor, beekeeper Yuri Mikhailovich Vasiliev. He taught him not only the basics of the craft, but also respect for bees: he taught him to make frames and hives with his own hands. We are grateful to him for the patience and knowledge that became the foundation of our apiary.",
      },
      {
        id: "first-hive",
        title: "The First Hive",
        text: "The first hive was built by hand. The apiary stood under a canopy in Grozny, followed by Bamut, Muzhichi in the mountains, and Alkun. With each year came greater experience, an understanding of nature, and the conviction that true honey is born where bees are left undisturbed.",
      },
      {
        id: "today",
        title: "Today",
        text: "We remain true to the tradition of migratory beekeeping. Our bee colonies travel to where the best nectar plants are in bloom: to the buckwheat fields in Orel, to the goldenrod in Tula. This gives each variety of honey its distinctive taste and aroma.",
      },
      {
        id: "principle",
        title: "Our Principle",
        text: "We do not use chemicals or antibiotics. Our bees live by the laws of nature, and we simply help them do so.",
      },
    ],
  },
};
