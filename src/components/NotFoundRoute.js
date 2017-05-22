import React from 'react';
import Helmet from 'react-helmet';

const NotFoundRoute = () => {
  return (
    <div className='sm-flex flex-wrap'>
      <div className='sm-col-12 p2 center'>
        <Helmet title={'Latest videos | Staytube'}
          meta={[
            { name: 'description', content: 'It could be you, or it could be us, but theres no video here.' },
            { property: 'og:title', content: 'Oh! 404 error' },
            { property: 'og:description', content: 'It could be you, or it could be us, but theres no video here.' },
            { property: 'og:image', content: 'https://res.cloudinary.com/urre/image/upload/v1495467361/epvi1qppu4y7llo0hmmw.png' }
          ]}
          />
        <p>
          Hi friend. This link does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFoundRoute;
