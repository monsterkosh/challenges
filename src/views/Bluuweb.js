import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Header from 'components/Headers/Header.js';
import componentStyles from 'assets/theme/views/admin/tables.js';

const useStyles = makeStyles(componentStyles);

const Bluuweb = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      {/* Page content */}
      <Container
        maxWidth={false}
        component={Box}
        marginTop='-6rem'
        classes={{ root: classes.containerRoot }}
      ></Container>
    </>
  );
};

export default Bluuweb;
