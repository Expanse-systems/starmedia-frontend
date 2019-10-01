import * as React from 'react';
import LayoutTitleWithContent from "../components/Layout/LayoutTitleWithContent";
import ProjectList from '../pageTemplate/Projects/ProjectList';
import { ProjectsMock } from '../mock';
import Pagination from "../components/Pagination/Pagination";
import ProjectFilter from '../pageTemplate/Projects/ProjectFilter';
import {withTranslation} from "../libs/i18n";



interface IProjectsProps {
  [prop: string]: any
}

const Projects: React.FC<IProjectsProps> = ({t}) => {
  return (
    <LayoutTitleWithContent
      title={t('nav-project-list')}
    >

      <ProjectFilter/>

      <ProjectList
        projects={ProjectsMock}
      />
      <Pagination/>

    </LayoutTitleWithContent>
  );
};

export default withTranslation(['nav','home','footer'])(Projects);
