import Head from 'next/head';
import PropTypes from 'prop-types';

export const Meta = ({
  title, desc, url, img,
}) =>
  <Head>
    <title>{title}</title>
    <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
    <meta charSet="UTF-8" />
    <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1"
    />
    <link rel="icon" type="image/x-icon" href="/static/images/favicon/favicon.ico" />
    <meta httpEquiv="Content-Language" content="en" />
    <meta property="og:site_name" content="hpe design" />
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta property="og:description" content={desc} />
    <meta name="twitter:description" content={desc} />
    <meta name="description" content={desc} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={img} />
    <meta name="twitter:image" content={img} />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="canonical" href={url} />
    <meta name="robots" content="index, follow" />
    <link rel="apple-touch-icon" sizes="180x180" href="images/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon/favicon-16x16.png" />
    <link rel="manifest" href="site.webmanifest" />
    <link rel="mask-icon" href="images/safari-pinned-tab.svg" color="#425563" />
    <meta name="msapplication-TileColor" content="#425563" />
    <meta name="theme-color" content="#425563" />
  </Head>;

Meta.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  url: PropTypes.string,
  img: PropTypes.string,
};

Meta.defaultProps = {
  title: 'hpe design',
  desc: 'We’re in the business of building ideas, culture, and tools for the next generation of hpe customers and partners.',
  url: 'https://hpe.design',
  img: '/static/images/social-image.jpg',
};

export default Meta;
