import { Navbar, ScrollArea, Grid, Collapse } from '@mantine/core';
import { mockdata } from './data';
import { useStyles } from './NavbarTypesStyles';
import { IconLayoutSidebarLeftCollapse, IconLayoutSidebarRightCollapse } from '@tabler/icons-react';
import { Selectors } from '../Selectors/Selectors';
import { useState } from 'react';



export function NavbarTypes() {


  const { classes, theme } = useStyles();
  const links = mockdata.map((item) => <Selectors {...item} key={item.label} />);
  const [opened, setOpened] = useState(true);
  const ChevronIcon = theme.dir === 'ltr' ? IconLayoutSidebarRightCollapse : IconLayoutSidebarLeftCollapse;
  const hasLinks = Array.isArray(links);

  const items = (hasLinks ? links : []).filter(() => (
    <div className={classes.linksInner}>{links}</div>
  ));

  return (

    <Navbar height={800}
      width={opened ? { sm: 300 } : { sm: 35 }}
      p="md"
      className={classes.navbar}
     >
      <Navbar.Section className={opened ? classes.header : classes.headerClose}>
        <Grid className={classes.grid} sx={opened ? {} : { height: '55px'}}>
          <Grid.Col span={3} className={classes.title} sx={opened ? {} : { display: 'none' }}>Fields</Grid.Col>
          {hasLinks && (
            <ChevronIcon
            onClick={() => setOpened((prevOpened) => !prevOpened)}
              className={classes.icon}
              stroke={1.5}
              style={{
                transform: opened ? `rotate(${theme.dir === 'rtl' ? -180 : 180}deg)` : 'none',
                marginLeft: opened ? 0 : 10,
                marginTop:  opened ? 0 : -15,
              }}
            />
          )}
        </Grid>
      </Navbar.Section>
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
      </Navbar.Section>

    </Navbar>

  );
}