import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const MetaAttributes = props => {
  let location = useLocation().pathname;
  return (
    <>
      <Helmet>
        <title>{`${props.title || 'data kosong'} | Prospeku`}</title>
        <meta name="description" content={props.description || 'data kosong'} />
        <meta name="twitter:title" content={props.twittertitle || 'data kosong'} />
        <meta name="twitter:description" content={props.twitterdescription || 'data kosong'} />
        <meta name="twitter:image" content={props.twitterimage || 'data kosong'} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={props.ogtitle || 'data kosong'} />
        <meta property="og:description" content={props.ogdescription || 'data kosong'} />
        <meta property="og:url" content={[window.location.origin, location].join('')} />
        <meta property="og:image" content={props.ogimage || 'data kosong'} />
        <meta property="og:image:url" content={props.ogimageurl || 'data kosong'} />
        <meta property="og:image:alt" content={props.ogimagealt || 'data kosong'} />
        <link rel="canonical" href={[window.location.origin, location].join('')} />
      </Helmet>
    </>
  );
};

export default MetaAttributes;