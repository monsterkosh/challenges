import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LocationOn from '@material-ui/icons/LocationOn';
import UserHeader from 'components/Headers/UserHeader.js';
import componentStyles from 'assets/theme/views/admin/profile.js';
import boxShadows from 'assets/theme/box-shadow.js';

const useStyles = makeStyles(componentStyles);

function Profile() {
  const classes = useStyles();

  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container
        maxWidth={false}
        component={Box}
        marginTop='-6rem'
        classes={{ root: classes.containerRoot }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            xl={4}
            component={Box}
            marginBottom='3rem'
            classes={{ root: classes.gridItemRoot + ' ' + classes.order2 }}
          ></Grid>
          <Grid
            item
            xs={12}
            xl={4}
            component={Box}
            marginBottom='3rem!important'
            classes={{ root: classes.order1 + ' ' + classes.marginBottomXl0 }}
          >
            <Card classes={{ root: classes.cardRoot }}>
              <Box component={Grid} container justifyContent='center'>
                <Grid item xs={12} lg={3}>
                  <Box position='relative'>
                    <Box
                      component='img'
                      src={require('assets/img/theme/74005182.png').default}
                      alt='...'
                      maxWidth='180px'
                      borderRadius='50%'
                      position='absolute'
                      left='50%'
                      boxShadow={boxShadows.boxShadow + '!important'}
                      className={classes.profileImage}
                    />
                  </Box>
                </Grid>
              </Box>
              <Box
                component={CardHeader}
                border='0!important'
                textAlign='center'
                paddingBottom='0!important'
                paddingTop='8rem!important'
                classes={{ root: classes.cardHeaderRootProfile }}
                subheader={
                  <Box display='flex' justifyContent='space-between'>
                    <Button
                      target='_blank'
                      href='https://www.linkedin.com/in/emiliano-kosh-b5917b203/'
                      variant='contained'
                      size='small'
                      classes={{ root: classes.buttonRootInfo }}
                    >
                      Connect
                    </Button>
                  </Box>
                }
              ></Box>
              <Box
                component={CardContent}
                classes={{ root: classes.ptMd4 }}
                paddingTop='0!important'
              >
                <Grid container>
                  <Grid item xs={12}>
                    <Box
                      padding='1rem 0'
                      justifyContent='center'
                      display='flex'
                      className={classes.mtMd5}
                    >
                      <Box textAlign='center' padding='.875rem'></Box>
                    </Box>
                  </Grid>
                </Grid>
                <Box textAlign='center'>
                  <Typography variant='h3'>
                    Emiliano Kosh
                    <Box component='span' fontWeight='300'>
                      , 32
                    </Box>
                  </Typography>
                  <Box
                    component={Typography}
                    variant='h5'
                    fontWeight='300!important'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                  >
                    <Box
                      component={LocationOn}
                      width='1.25rem!important'
                      height='1.25rem!important'
                    ></Box>
                    Entre Rios, Argentina
                  </Box>
                  <Box
                    component={Typography}
                    variant='h5'
                    marginTop='3rem!important'
                  >
                    Front-end Web Developer
                  </Box>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Profile;
