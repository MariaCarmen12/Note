import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : '#F8F9FA',
    
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    paddingLeft: '10%',
    alignItems: 'center'
  },

  headerClose: {
  
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    alignItems: 'center',
    
  },


  title: {
    fontWeight: 450,
    marginRight: '60%',
    textDecoration: 'none',
    fontSize: '15px',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.blue[7],
  },

  icon: {
    marginLeft: '5%',
    alignSelf: 'center',
    height: '28px'
  },
  grid: {
    width: '100%',
    alignSelf: 'center',
    marginTop: '0%',
    height: '39px',

  },
  links: {
    paddingTop: theme.spacing.xl,
    alignItems: 'center'
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  list: {
    width: '16.688 rem',
    height: '3.5 rem',
    background: '#FFFFFF',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.05), 0px 1px 2px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',

  },
}));