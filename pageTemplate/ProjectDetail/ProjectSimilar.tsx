import * as React from 'react';
import Link from "next/link";
import Container from '../../components/Container/Container';
import Col from '../../components/Col/Col';
import Row from '../../components/Row/Row';
import Text from '../../components/Text/Text';
import {Project} from '../../types/projectTypes';
import ReactIdSwiper, {SwiperInstance} from "react-id-swiper";
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import {useTranslation} from "../../libs/i18n";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

interface IProjectSimilarProps {
  projects?: Project[];

  [prop: string]: any
}

const params = {
  slidesPerView: 'auto',
  centeredSlides: false,
  spaceBetween: 32,
  getSwiper: (swiper: SwiperInstance) => {
    swiper && swiper.on('touchMove', (event: any) => {
      // @ts-ignore
      window.customCursor.clientX = event.clientX;
      // @ts-ignore
      window.customCursor.clientY = event.clientY;
    })
  }
  // activeSlideKey: '2',
};

const ProjectSimilar: React.FC<IProjectSimilarProps> = ({projects}) => {
  const {t} = useTranslation('common');

  if (!projects || !projects.length) {
    return null;
  }
  return (
    <Col mb={[60, 100]}>
      <Container as={'section'} id={'similar'}>
        <Row mb={[34, 40]}>
          <Col xs={12}>
            <Text as={'h2'} font={'object'} size={'m'} className={'text_uppercase'}>
              {
                t('project_similar')
              }
            </Text>
          </Col>
        </Row>
      </Container>

      <CustomCursor>
        <ReactIdSwiper {...params}>
          {
            // @ts-ignore
            projects
            && projects.map((item: any, index) => {
              if (index === 0) {
                return (<Col key={index} className={'project-detail-similar_first-item'}>

                </Col>)
              }
              return (<Col
                key={index}
                style={{
                  width: '279px'
                }}
              >
                <Link href={`/project/${item.slug}`}>
                  <ProjectCard
                    href={`/project/${item.slug}`}
                    withInfo={true}
                    {...item}
                  />
                </Link>
              </Col>)
            })
          }
        </ReactIdSwiper>
      </CustomCursor>

    </Col>
  );
};

export default ProjectSimilar;
