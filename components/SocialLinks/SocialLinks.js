import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import templateHelper from '../../utils/templateHelper/templateHelper';
import noop from '../../utils/noop';
import Icon from '../Icon/Icon';
import ScreenReadable from '../ScreenReadable/ScreenReadable';
import css from './SocialLinks.css';

const emptyArr = [];

export const defaultPlatforms = [{
  name: 'facebook',
  shareUrl: templateHelper`https://www.facebook.com/sharer/sharer.php?u=${'uri'}`,
}, {
  name: 'twitter',
  shareUrl: templateHelper`https://twitter.com/intent/tweet?text=${'twitterTweet'}&url=${'uri'}&via=${'twitterVia'}`,
}, {
  name: 'pintrest',
  shareUrl: templateHelper`https://www.pinterest.com/pin/create/button/?url=${'uri'}`,
}];

const SocialLinks = (props) => {
  const {
    uri,
    twitterTweet,
    twitterVia,
    accessibilityLabel,
    platforms,
    className,
    variant,
    linkClassName,
    onClick,
  } = props;

  const encodedUri = encodeURI(uri);
  const encodedTwitterTweet = encodeURI(twitterTweet).replace('#', '%23');
  const encodedVia = encodeURI(twitterVia);

  return (
    <div className={cx(css.root, css[variant], className)}>
      { platforms
          .map(platform => (
            <div
              className={css.linkItem}
              key={`${platform.name}-${encodedUri}`}
            >
              <a
                className={cx(css.link, linkClassName)}
                href={platform.shareUrl({
                  uri: encodedUri,
                  twitterTweet: encodedTwitterTweet,
                  twitterVia: encodedVia,
                })}
                onClick={(e) => { onClick(e, { platform, encodedUri }); }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name={platform.name} />
                <ScreenReadable>{ accessibilityLabel } { platform.name }</ScreenReadable>
              </a>
            </div>
          ))
      }
    </div>
  );
};

SocialLinks.propTypes = {
  uri: PropTypes.string.isRequired,
  twitterTweet: PropTypes.string,
  twitterVia: PropTypes.string,
  accessibilityLabel: PropTypes.string,
  platforms: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    shareUrl: PropTypes.func,
  })),
  className: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'dark']),
  linkClassName: PropTypes.string,
  onClick: PropTypes.func,
};

SocialLinks.defaultProps = {
  excludes: emptyArr,
  accessibilityLabel: 'Share on',
  platforms: defaultPlatforms,
  variant: 'light',
  onClick: noop,
  twitterTweet: '',
  twitterVia: '',
};

export default SocialLinks;
