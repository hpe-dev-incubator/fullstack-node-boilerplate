import React, { Component } from 'react';
import { Grommet, Box, Text } from 'grommet';
import ReactGA from 'react-ga';
import Logo from '../Logo';
import theme from '../../theme';
import { Config } from '../../config';

export default class Layout extends Component {
  componentDidMount() {
    if (Config.gaId) {
      ReactGA.initialize(Config.gaId);
      ReactGA.pageview(document.location.pathname);
    }
  }

  render() {
    const { children, style, ...rest } = this.props;
    return (
      <Grommet
        theme={theme}
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <Box
          background="light-2"
          align="center"
          gap="small"
          pad={{ vertical: 'small', left: 'medium' }}
        >
          <Logo />
          <Text size="medium" weight="bold">
            HPE DEV Fullstack Boilerplate
          </Text>
        </Box>
        <Box
          flex
          pad={{ vertical: 'medium', horizontal: 'large' }}
          style={{ ...style }}
          {...rest}
        >
          {children}
        </Box>
      </Grommet>
    );
  }
}
