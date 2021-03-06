import * as React from 'react';
// @ts-ignore
// @ts-ignore
import {
  FacebookShareButton,
  TwitterShareButton,
  VKShareButton,
  OKShareButton,
} from 'react-share';
// @ts-ignore
import FacebookIcon from '../../static/images/color_Facebook.svg';
// @ts-ignore
import TwitterIcon from '../../static/images/color_Twitter.svg';
// @ts-ignore
import OKIcon from '../../static/images/color_Ok.svg';
// @ts-ignore
import VKIcon from '../../static/images/color_Vkontakte.svg';
import classNames from 'classnames';
import ShowComponentInLocales from "../ShowComponentInLocales/ShowComponentInLocales";


interface IShareButtonProps {
  horizontal?: boolean;

  [prop: string]: any
}


const GetSharedUrl = () => {
  if (typeof window !== undefined) {
    return window.location.href;
  }
  return '';
};

const ShareButton: React.FC<IShareButtonProps> = ({horizontal}) => {

  const sharedURL: string = GetSharedUrl();
// ExcludeSocialLinkByLocale
  return (
    <ul className={classNames('share-button_list', {
      'share-button_list--horizontal': horizontal,
    })}>
      <li className={'share-button_item'}>
        <FacebookShareButton
          url={sharedURL}
        >
          <img
            className={'share-button_icon'}
            src={FacebookIcon}
            alt=""
          />
        </FacebookShareButton>
      </li>
      <li className={'share-button_item'}>
        <TwitterShareButton
          url={sharedURL}
        >
          <img
            className={'share-button_icon'}
            src={TwitterIcon}
            alt=""
          />
        </TwitterShareButton>
      </li>
      <li className={'share-button_item'}>
        <ShowComponentInLocales locales={['ru', 'en']}>

          <VKShareButton
            url={sharedURL}
          >
            <img
              className={'share-button_icon'}
              src={VKIcon}
              alt=""
            />
          </VKShareButton>
        </ShowComponentInLocales>
      </li>
      <li className={'share-button_item'}>
        <ShowComponentInLocales locales={['ru', 'en']}>
          <OKShareButton
            url={sharedURL}
          >
            <img
              className={'share-button_icon'}
              src={OKIcon}
              alt=""
            />
          </OKShareButton>
        </ShowComponentInLocales>
      </li>
    </ul>
  );
};

export default ShareButton;
