import * as React from 'react';
import Button from '../Button/Button';
import {SocialLinkVariantEnum} from "./SocialLinkList";
import {SocialLink} from "../../types/socialLink";

interface ISocialLinkItemProps extends SocialLink {
  variant?: SocialLinkVariantEnum;

  [prop: string]: any
}

const SocialLinkItem: React.FC<ISocialLinkItemProps> = ({url, mods, shortName, variant}) => {
  return (
    <Button
      aria-label={'social network link'}
      as={'a'}
      className={'social-links_link'}
      mods={mods}
      href={url || '/404'}
      target={'_blank'}
    >
      {
        variant === SocialLinkVariantEnum.icon &&
				<svg
          width="24px"
          height="24px"
          className="social-links_icon"
        >
					<use xlinkHref={`#${shortName}`}/>
				</svg>
      }
      {
        variant === SocialLinkVariantEnum.shortName &&
				<React.Fragment>
          {shortName}
				</React.Fragment>
      }

    </Button>
  );
};
SocialLinkItem.defaultProps = {
  mods: ['light']
};
export default SocialLinkItem;
