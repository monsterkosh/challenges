import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import componentStyles from 'assets/theme/components/user-header.js';

const useStyles = makeStyles(componentStyles);

const UserHeader = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Box
        paddingTop='3rem'
        paddingBottom='8rem'
        alignItems='center'
        display='flex'
        className={classes.wrapperBox}
        minHeight='600px'
        position='relative'
      >
        <Box
          position='absolute'
          top='0'
          left='0'
          width='100%'
          height='100%'
          className={classes.overlayBox}
        />
        <Container
          display='flex'
          alignItems='center'
          maxWidth={false}
          component={Box}
          classes={{ root: classes.containerRoot }}
        >
          <Grid container>
            <Grid item xs={12} md={10} lg={7}>
              <Typography
                variant='h1'
                classes={{ root: classes.typographyRootH1 }}
              >
                Hi,I'm Kosh
              </Typography>
              <Box
                component='p'
                marginBottom='3rem'
                color={theme.palette.white.main}
                lineHeight='1.7'
                fontSize='1rem'
              >
                This is a simple page where i store different challenges from
                sites like freecodecamp.org and random tutorials I found on the
                web
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default UserHeader;
