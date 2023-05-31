import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { UserButton } from './UserButton';
import { StoryWrapper } from '../StoryWrapper/StoryWrapper';

storiesOf('UserButton', module).add('UserButton', () => (
  <StoryWrapper attributes={attributes} component={UserButton} />
));
