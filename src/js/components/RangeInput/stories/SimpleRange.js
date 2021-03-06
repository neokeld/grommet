import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Grommet, RangeInput } from 'grommet';
import { grommet } from 'grommet/themes';

const SimpleRangeInput = () => {
  const [value, setValue] = React.useState(5);

  const onChange = event => setValue(event.target.value);

  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        <RangeInput value={value} onChange={onChange} />
      </Box>
    </Grommet>
  );
};

storiesOf('RangeInput', module).add('Simple', () => <SimpleRangeInput />);
