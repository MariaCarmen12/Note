import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';

import { NavbarNested } from './NavbarNested';
import { StoryWrapper } from '../StoryWrapper/StoryWrapper';

storiesOf('NavbarNested', module).add('NavbarNested', () => (
  <StoryWrapper attributes={attributes} component={NavbarNested} />
));
