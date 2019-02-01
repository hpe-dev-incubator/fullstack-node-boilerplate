import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Text } from 'grommet';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Content from '../components/Content';
import Meta from '../components/Meta';
import { Config } from '../config';

export default class Home extends Component {
  static async getInitialProps() {
    const bootstrapRes = await fetch(
      `${Config.apiUrl}/bootstrap`,
    );
    const bootstrap = await bootstrapRes.json();
    return {
      ...bootstrap,
    };
  }

  render() {
    const { gremlins } = this.props;
    return (
      <Layout style={{ overflow: 'hidden' }} flex pad="none">
        <Meta
          title="Fullstack Node Boilerplate"
          desc=""
          url=""
        />
        <Content flex pad="medium" alignSelf="center" direction="column">
          <Box align="center" gap="small">
            <Box direction="row" gap="small" align="center">
              <Heading size="large">
                Gremlins
              </Heading>
            </Box>
            <Box wrap direction="row" gap="small">
              {gremlins.map((gremlin, index) => (
                <Box
                  key={`gremlin-${index}`}
                  background={['neutral-1', 'neutral-2', 'neutral-3', 'neutral-4'][Math.floor(Math.random() * 4)]}
                  pad="medium"
                  round="xsmall"
                  margin={{ top: 'small' }}
                >
                  <Heading key={`gremlin-${index}`} size="small">
                    {gremlin}
                  </Heading>
                </Box>
              ))}
            </Box>
          </Box>
        </Content>
        <Box
          pad={{ vertical: 'small', left: 'medium' }}
          background="light-2"
        >
          <Text textAlign="center" size="small">
            Brought to you by the letter DEV.
          </Text>
        </Box>
      </Layout>
    );
  }
}

Home.propTypes = {
  gremlins: PropTypes.arrayOf(PropTypes.string),
};
