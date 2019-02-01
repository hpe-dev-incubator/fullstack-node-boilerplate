import { grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';

const theme = deepMerge(grommet, {
  paragraph: {
    small: { maxWidth: '100%' },
    medium: { maxWidth: '100%' },
    large: { maxWidth: '100%' },
    xlarge: { maxWidth: '100%' },
    xxlarge: { maxWidth: '100%' },
  },
});

export default theme;
