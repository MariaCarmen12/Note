import { createStyles, rem } from '@mantine/core';
export const useStyles = createStyles((theme) => ({
  noteContainer: {
    flex: 2,
    position: 'relative',
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'

  },
  container: {
    alignSelf: 'center',
    boxSizing: 'border-box',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '2%',
    width: '100%',
    height: 'auto',
    background: '#F9FAFB',
    border: '1px solid #E5E7EB',
    boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
    borderRadius: '8px',
    marginTop: '10%'
  },
  input: {
    flex: 2
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    flex:2
    
  },

  itemDragging: {
    boxShadow: theme.shadows.sm,
  },

  symbol: {
    fontSize: rem(30),
    fontWeight: 700,
    width: rem(60),
  },

  dragHandle: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },
  button: {
    marginTop: '10%',
    width: '80%',
    height: '42px',
    background: '#FFFFFF',
    border: '1px solid #D1D5DB',
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
    borderRadius: '6px',
    textAlign: 'center',
    color: '#374151',
    flexDirection: 'row',
    alignItems: 'center'
  },
  radiusContainer: {
    marginTop: '3%',
    flex: 2

  }
}));