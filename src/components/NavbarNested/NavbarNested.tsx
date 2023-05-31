import { Navbar, Group, ScrollArea, createStyles, rem, UnstyledButton, } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { LinksGroup } from '../NavbarLinksGroup/NavbarLinksGroup';
import { mockdata } from './data';
import { useStyles } from './NavbarNestedStyles';


export function NavbarNested() {
 
  const { classes } = useStyles();
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (

      <Navbar height={800} width={{ sm: 300 }} p="md" className={classes.navbar}>
        <Navbar.Section className={classes.header}>
          <UnstyledButton onClick={() =>  console.log('hola2')}>
          <Group position="apart">
            <IconArrowLeft />
          </Group>
          </UnstyledButton>
        </Navbar.Section>
        <Navbar.Section grow className={classes.links} component={ScrollArea}>
          <div className={classes.linksInner}>{links}</div>
        </Navbar.Section>
      </Navbar>

  );
}