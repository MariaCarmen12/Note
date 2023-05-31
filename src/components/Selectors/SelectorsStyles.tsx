import { createStyles, rem } from '@mantine/core';
export const useStyles = createStyles((theme) => ({
    control: {
        width: '267px',
        height: '60px',
        background: '#FFFFFF',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.05), 0px 1px 2px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        marginBottom: '5%',
        paddingLeft: '3%',
  
      '&:hover': {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },
  
  
    select: {
      fontWeight: 500,
      display: 'block',
      textDecoration: 'none',
      padding: `${theme.spacing.xs} ${theme.spacing.md}`,
      paddingLeft: rem(31),
      marginLeft: rem(30),
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black[7],
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.blue[0],
      borderLeft: `${rem(2)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.blue[3]
        }`,
  
    },
  
    chevron: {
      transition: 'transform 200ms ease',
    },
  }));

