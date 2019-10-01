import * as React from 'react';
import LayoutTitleDateContent from '../../components/Layout/LayoutTitleDateContent';
import {useTranslation} from "../../libs/i18n";

interface ISlugProps {
  [prop: string]: any
}


const AwardDetail: React.FC<ISlugProps> = () => {
  const {t} = useTranslation('common');

  return (
    <LayoutTitleDateContent
      title={'ПОбеда на Международном фестивале WorldFest Houston Film Festival 2019'}
      date={'28.08.2019'}
      goBackLabel={t('awards_go-back')}
      goBackLink={'/about-us'}
    >
      Кинокомпания Star Media получила 3 главных приза на самом старейшем Международном фестивале независимого кино
      WorldFest Houston Film Festival, который входит в тройку самых престижных в Америке!

      Международный фестиваль независимого кино WorldFest Houston Film Festival проходил с 20 по 29 апреля 2018 года в
      Хьюстоне (США). Компания Star Media вошла в число победителей – докудрама «Польский след» получила одну из высших
      наград фестиваля GOLD REMI в номинации «Documentary», детектив «Штрафник» получил приз – SPECIAL JURY AWARD в
      номинации «TV Mini-Series». А 20-ти серийный детектив «Спецы» получил приз – GOLD REMI в номинации «TV
      Series-Dramatic».

      Фестиваль был основан в августе месяце 1961 года. Несмотря на такой солидный для фестиваля возраст, его принципы
      остаются неизменными. WorldFest по-прежнему делает упор на независимое кино, предлагая режиссерам и продюсерам
      незаангажированный форум. Целью и главной концепцией фестиваля является открытие и признание выдающихся работ и
      имен в кино- и видеопроизводстве, развитие кинопроизводства

      Фестиваль WorldFest — один из трех самых престижный фестивалей кино в Америке.

      Отцом-основателем фестиваля считают продюсера и режиссера Хантера Тодда (Hunter Todd), обладателя более 115
      творческих наград, создателя 300 фильмов.

      По своей идее WorldFest задумывался как фестиваль, на котором независимые кинопроизводители могли бы представлять
      свои картины.

      В отличие от фестивалей в Каннах, Санденсе и Торонто, Houston поражает своей масштабностью. В программу входит 12
      крупных конкурсов в более чем 200 подкатегориях для производителей кино- и видеофильмов. Но, несмотря на такое
      большое количество заявок, ни одна работа не получает награду не набрав достаточно высоких оценок жюри. Таким
      образом, награждаются только пятая часть заявленных работ. В настоящее время WorldFest — старейший в мире
      фестиваль независимого кино, третий по престижности в Северной Америке после фестивалей в Сан-Франциско и
      Нью-Йорке.

      Среди открытий фестиваля, получивших мировую известность, можно назвать такие имена как братья Коэн, Джорж Лукас,
      Дэвид Линч, Пол Мазурски, Роберт Родригес, Ридли Скотт, Стивен Спилберг, Оливер Стоун и многие другие.
    </LayoutTitleDateContent>
  );
};

export default AwardDetail;
