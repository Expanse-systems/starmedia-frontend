import * as React from 'react';
import dynamic from 'next/dynamic'
import Text from '../../components/Text/Text';
import Col from '../../components/Col/Col';
import {ButtonElementEnum, FormEnum, Forms, Maybe, Person} from "../../types/types";
import {GetLocalizationString} from "../../libs/GetLocalizationString";
import Button from '../../components/Button/Button';
import MailSmallIcon from "../Icons/MailSmallIcon";
import DownloadSmallIcon from "../Icons/DownloadSmallIcon";

interface IServiceItemContentProps {
  [prop: string]: any
}

const ServicesFormPopup = dynamic(
  () => import("../ServicesFormPopup/ServicesFormPopup"),
  { ssr: false }
);

const FormIconMap: any = {
  [FormEnum.FREE_TESTING]: <MailSmallIcon/>,
  [FormEnum.GET_PRESENTATION]: <DownloadSmallIcon/>,
};

const ServiceItemContent: React.FC<IServiceItemContentProps> = (
  {
    content,
    contacts,
    forms
  }
) => {
  const [currentOpenForm, openForm] = React.useState<Maybe<Forms>>(null);

  return (
    <div className="service_item-content">

      {
        content
      }

      {
        contacts &&
				<div className="service_item-content-row">
					<div className="service_item-content-label">
						Связаться с нами
					</div>
					<div className="service_item-content-value">

						<div className="service_item-contacts_wrapper">

              {
                contacts
                && contacts.map((item: Person, index: number) => (<Col
                  mb={40}
                  className="service_item-contacts_item"
                  key={index}
                >
                  <Text mb={16} font={'object'} size={'s'}>
                    {
                      GetLocalizationString(item.name)
                    }
                  </Text>
                  <Text mb={16} font={'root'} size={'m'}>
                    {
                      item
                      && item.phones
                      && item.phones.map((phone: string, index) => {

                        return (<span key={index}>
                            {
                              phone
                            }
                          <br/>
                          </span>)
                      })
                    }
                  </Text>
                  <Text font={'root'} size={'m'}>
                    {
                      item
                      && item.emails
                      && item.emails.map((email: string, index) => {

                        return (<span key={index}>
                            {
                              email
                            }
                          <br/>
                          </span>)
                      })
                    }
                  </Text>
                </Col>))
              }
						</div>
					</div>
				</div>
      }

      {
        forms
        && Array.isArray(forms) &&
				<div className="service_item-content-form_list">
          {
            forms.map((form: Forms, index: number) => (<div
              key={index}
              className="service_item-content-form_item"
              onClick={() => {
                openForm(form);
              }}
            >
              <div
                className={'text_uppercase service_item-content-form_item-label'}
              >
                {
                  GetLocalizationString(form.name)
                }
              </div>
              <Button
                element={ButtonElementEnum.circle}

              >
                {
                  // @ts-ignore
                  form && FormIconMap[form.type]
                }
              </Button>
            </div>))
          }
				</div>
      }

      {
        forms && <ServicesFormPopup
					onClose={() => {
            openForm(null);
          }}
					isVisible={currentOpenForm}
				/>
      }
    </div>
  );
};

export default ServiceItemContent;