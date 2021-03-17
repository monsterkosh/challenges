const componentStyles = (theme) => ({
  appBarRoot: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  brandTitle: {
    textTransform: 'uppercase',
    margin: '0',
    color: theme.palette.white.main,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  containerRoot: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: '39px',
      paddingRight: '39px',
    },
  },
});

export default componentStyles;
