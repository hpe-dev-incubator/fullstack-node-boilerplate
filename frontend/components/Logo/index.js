import React from 'react';
import PropTypes from 'prop-types';

export const Logo = ({ height, width }) =>
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 150 166">
    <g fill="none" fillRule="evenodd" transform="translate(8 8)">
      <path stroke="#566F82" strokeWidth="8" d="M76.5999985,-0.43578642 L127.199997,28.7781363 C133.388018,32.3507922 137.199997,38.9533326 137.199997,46.0986444 L137.199997,104.52649 C137.199997,111.671802 133.388018,118.274342 127.199997,121.846998 L76.5999985,151.060921 C70.4119769,154.633577 62.78802,154.633577 56.5999985,151.060921 L6,121.846998 C-0.188021535,118.274342 -4,111.671802 -4,104.52649 L-4,46.0986444 C-4,38.9533326 -0.188021535,32.3507922 6,28.7781363 L56.5999985,-0.43578642 C62.78802,-4.00844232 70.4119769,-4.00844232 76.5999985,-0.43578642 Z" />
      <path data-order="4" stroke="#9060EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7" d="M47.4575811,30 L74,30" />
      <path data-order="3" stroke="#566F82" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7" d="M44,45 L107.517714,45" />
      <path data-order="2" stroke="#FD9A69" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7" d="M58,60 L101.502873,60" />
      <path data-order="2" stroke="#84B1D3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7" d="M29.4913819,60 L44,60" />
      <polyline data-order="1" stroke="#2AD2C9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7" points="20 75 66 75 112 75" />
      <path data-order="2" stroke="#FD9A69" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7" d="M20,90 L42.2306361,90" />
      <path data-order="2" stroke="#2AD2C9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7" d="M56.4783711,90 L108.503012,90" />
      <path data-order="3" stroke="#84B1D3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7" d="M25.4965018,103 L61.2306361,103" />
      <path data-order="3" stroke="#9060EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7" d="M76,103 L100.505102,103" />
      <path data-order="4" stroke="#566F82" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7" d="M60.3517437,118 L81.504237,118" />
    </g>
  </svg>;

Logo.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

Logo.defaultProps = {
  height: '75',
  width: '83',
};

export default Logo;
