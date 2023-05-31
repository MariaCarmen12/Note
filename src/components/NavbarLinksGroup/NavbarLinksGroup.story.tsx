import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { NavbarLinksGroup } from './NavbarLinksGroup';
import { StoryWrapper } from '../StoryWrapper/StoryWrapper';

storiesOf('NavbarLinksGroup', module).add('NavbarLinksGroup', () => (
  <StoryWrapper attributes={attributes} component={NavbarLinksGroup} />
));
