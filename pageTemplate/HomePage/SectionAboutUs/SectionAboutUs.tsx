import * as React from 'react';
import Text from '../../../components/Text/Text';
import Container from '../../../components/Container/Container';
import Col from '../../../components/Col/Col';
import Row from '../../../components/Row/Row';
import Button from "../../../components/Button/Button";
import {ButtonElementEnum} from "../../../types/types";
import ExternalLink from '../../../components/Icons/ExternalLink';

interface ISectionAboutUsProps {
  [prop: string]: any
}

const SectionAboutUs: React.FC<ISectionAboutUsProps> = () => {
  return (
    <div className={'section-about-us'}>

      <div className="section-about-us_video-wrapper">
        <div className="section-about-us_video-preview">
          <img
            src={'../../../static/images/showrealpreview.jpg'}
            alt=""
            className="section-about-us_video-preview-image"
          />
        </div>
        <div className="section-about-us_video">

        </div>
      </div>

      <Text className="section-about-us_title" size={'l'}>
        star media
      </Text>

      <div>

      </div>
      <Container className="section-about-us_bottom">
        <Row>
          <Col xs={12} sm={'auto'} mb={16} mr={30}>
            <Button
              className={'text_align-left'}
              mods={['light', 'm']}
              element={ButtonElementEnum.link}
              href={'item.href'}
              as={'a'}
            >
              наша история
            </Button>
          </Col>
          <Col  xs={12} sm={'auto'} mb={16} mr={30}>
            <Button
              className={'text_align-left'}
              mods={['light', 'm']}
              element={ButtonElementEnum.link}
              href={'item.href'}
              as={'a'}
            >
              награды
            </Button>
          </Col>
          <Col>
            <Button
              className={'text_align-left'}
              mods={['light', 'm']}
              element={ButtonElementEnum.link}
              href={'item.href'}
              as={'a'}
            >
              star media school
              <ExternalLink className={'ml-6'}/>
            </Button>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default SectionAboutUs;
