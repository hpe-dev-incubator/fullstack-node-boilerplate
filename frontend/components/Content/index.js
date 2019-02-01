import React from 'react';
import PropTypes from 'prop-types';
import { ContentLayout } from './styles';

export const Content = ({ children, ...rest }) =>
  <ContentLayout direction="row-responsive" {...rest}>
    {children}
  </ContentLayout>;

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
