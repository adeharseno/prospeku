import React from 'react';
import { Helmet } from 'react-helmet';


function MetaInfo({ metaInfo }){
  const { title, description } = metaInfo;

  return(
    <Helmet>
      <title>{title}</title>
      <meta name='og:title' content={title} />
      <meta name='description' content={description} />
      <meta name='og:description' content={description} />
    </Helmet>
  );
};

export default MetaInfo;