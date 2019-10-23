import React, {Fragment} from 'react'

import SectionNews from '../pageTemplate/HomePage/SectionNews/SectionNews';
import SectionAboutUs from "../pageTemplate/HomePage/SectionAboutUs/SectionAboutUs";
import SectionProjects from '../pageTemplate/HomePage/SectionProjects/SectionProjects';
import SectionGetCatalog from '../pageTemplate/HomePage/SectionGetCatalog/SectionGetCatalog';
import SectionMain from '../pageTemplate/HomePage/SectionMain/SectionMain';
import Head from "../components/Head/Head";
import {
  useLocalizationQuery,
} from "../libs/useLocalizationQuery";
import {
  GetHomePageUKQuery,
  GetHomePageENQuery,
  GetHomePageRUQuery,
} from "../apollo/query/GetHomePageQuery";
import Preloader from "../components/Preloader/Preloader";
import {GetHomePage} from "../types/types";
import {useTranslation} from "react-i18next";

// @ts-ignore
const projectList: any = [
  {
    "slug": "zabitievoghdi",
    "preview": {
      "url": "https://starmedia.expanse.systems/uploads/kra_na_rad_zabuti_kermanichi.jpeg"
    },
    "title": {
      "ru": "Страна советов. Забытые вожди"
    }
  },
  {
    "slug": "revolyuciya",
    "preview": {
      "url": "https://starmedia.expanse.systems/uploads/posterrevolyuciya.png"
    },
    "title": {
      "ru": "Подлинная история Русской революции"
    }
  },
  {
    "slug": "ryurikovichi",
    "preview": {
      "url": "https://starmedia.expanse.systems/uploads/poster.png"
    },
    "title": {
      "ru": "Рюриковичи"
    }
  },
  {
    "slug": "polskij_slid",
    "preview": {
      "url": "https://starmedia.expanse.systems/uploads/posterpolskiisled.jpeg"
    },
    "title": {
      "ru": "Польский след"
    }
  },
  {
    "slug": "a_zori_tut_tihi",
    "preview": {
      "url": "https://starmedia.expanse.systems/uploads/a_zori_tut_tihi.jpg"
    },
    "title": {
      "ru": "А зори здесь тихие..."
    }
  }
]

const Homepage = () => {

  const {i18n} = useTranslation();
  const {data, loading} = useLocalizationQuery<GetHomePage>({
    ru: GetHomePageRUQuery,
    en: GetHomePageENQuery,
    uk: GetHomePageUKQuery,
  }, {
    variables:{
      locale: i18n.language,
    }
  });

  if (loading) {
    return (<Preloader/>)
  }
  return (
      <Fragment>
        <Head
          title={'Star Media'}
          seoTags={data && data.getHomePage && data.getHomePage.seoTags}
        />
        <SectionMain
          projectList={data && data.projectPaginationOnMain && data.projectPaginationOnMain.items}
          watchOnline={data && data.getHomePage && data.getHomePage.watchOnline}
          {...(data && data.getHomePage && data.getHomePage.mainSection)}
        />
        <SectionNews
          news={data && data.newsPagination && data.newsPagination.items}
        />
        <SectionAboutUs
          {...(data && data.getHomePage && data.getHomePage.aboutUsSection)}
        />
        <SectionProjects
          projectList={data && data.projectPagination && data.projectPagination.items}
        />
        <SectionGetCatalog
          {...(data && data.getHomePage && data.getHomePage.orderCatalog)}
        />
      </Fragment>
  );
};

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['nav', 'home', 'footer', 'common']
});

export default Homepage;
