const componentStyles = (theme) => ({
  wrapperBox: {
    [theme.breakpoints.up('md')]: {
      paddingTop: '8rem',
    },
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    backgroundImage:
      'url(https://res.cloudinary.com/practicaldev/image/fetch/s--M-Aom4Fc--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/18p0dcluv02riownx3a6.jpg)',
  },
  overlayBox: {
    transition: 'all .15s ease',
    opacity: '.8',
    background:
      'linear-gradient(87deg,' +
      theme.palette.info.main +
      ',#1a174d)!important',
  },
  containerRoot: {
    zIndex: 1,
    [theme.breakpoints.up('md')]: {
      paddingLeft: '39px',
      paddingRight: '39px',
    },
  },
  typographyRootH1: {
    color: theme.palette.white.main,
    fontSize: '2.75rem',
    fontWeight: 600,
    lineHeight: 1.5,
  },
  buttonRoot: {
    color: theme.palette.white.main,
    backgroundColor: theme.palette.info.main,
    '&:hover': {
      backgroundColor: theme.palette.info.dark,
    },
  },
});

export default componentStyles;
