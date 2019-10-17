import * as React from 'react';
import Row from "../../components/Row/Row";
import {ViewportSizeEnum, MainContact, Address} from "../../types/types";
import Col from "../../components/Col/Col";
import Text from "../../components/Text/Text";
import classNames from 'classnames';
import {GetLocalizationString} from "../../libs/GetLocalizationString";
import {i18n} from "../../libs/i18n";

interface IContactMainItemProps extends MainContact {
  src?: string,

  [prop: string]: any
}

const ContactMainItem: React.FC<IContactMainItemProps> = (
  {
    src,
    name,
    phones,
    addresses,
    emails,
    isActive,
    cityToggle,
  }
) => {
  return (
    <li onClick={cityToggle} className={classNames("contact-main_item", {
      'contact-main_item--active': isActive,
    })}>
      <div className="contact-main_item-bg-wrap">
        <img
          className={'contact-main_item-bg-img'}
          src={src}
          alt=""
        />
      </div>
      <Row middle={ViewportSizeEnum.md}>
        <Col xs={12} md={4} mb={[12, '0']}>
          <Text type={'inherit'} className={'text_uppercase'} font={'object'} size={'xl'}>
            {name && GetLocalizationString(name,i18n)}
          </Text>
        </Col>
        <Col xs={12} md={3} mb={[10, '0']}>
          {
            addresses
            && addresses.map((item: Address, index: number) => (<Text
              key={index}
              type={'inherit'}
              font={'root'}
              size={'m'}
              mb={8}
            >
              {
                item
                && GetLocalizationString(item.addresses,i18n)
              }
            </Text>))
          }
        </Col>
        <Col xs={12} md={2} mb={[10, '0']}>
          {
            phones && phones.map((item: string, index) => (<Text
              key={index}
              type={'inherit'}
              font={'root'}
              size={'m'}
              mb={8}
              as={'a'}
              href={`tel:${item}`}
            >
              {item}
            </Text>))
          }
        </Col>
        <Col xs={12} md={3} mb={[10, '0']}>
          {
            emails && emails.map((item: string, index) => (<Text
              key={index}
              type={'inherit'}
              font={'root'}
              size={'m'}
              as={'a'}
              href={`mailto:${item}`}
            >
              {item}
            </Text>))
          }
        </Col>
      </Row>
    </li>
  );
};

export default ContactMainItem;
