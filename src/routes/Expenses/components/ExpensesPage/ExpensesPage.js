import { Container, CssBaseline, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import SpeedDial from 'components/SpeedDial';
import React, { Fragment } from 'react';

import ExpenseList from '../ExpenseList';
import NewExpenseForm from '../NewExpenseForm';
import styles from './ExpensesPage.styles';

const useStyles = makeStyles(styles);

const sample = [
  [
    '1/23/2019',
    '1/23/2019',
    60.0,
    ['Chess'],
    'Costco grocery',
    ['grocery', 'household'],
  ],
  [
    '1/24/2019',
    '1/24/2019',
    16.0,
    ['Amex'],
    'Breakfast at Denise',
    ['eating out'],
  ],
  ['1/25/2019', '1/25/2019', 50.0, ['BofA'], 'Cloths in Gap', ['clothing']],
];

function createData(
  id,
  transactionDate,
  postingDate,
  amount,
  cardUsed,
  description,
  category
) {
  return {
    id,
    transactionDate,
    postingDate,
    amount,
    cardUsed,
    description,
    category,
  };
}

const ExpensePage = () => {
  const classes = useStyles();
  const rows = [];

  for (let i = 0; i < 200; i += 1) {
    const randomSelection = sample[Math.floor(Math.random() * sample.length)];
    rows.push(createData(i, ...randomSelection));
  }

  // Show spinner while projects are loading
  //   if (!isLoaded(projects)) {
  //     return <LoadingSpinner />;
  //   }

  return (
    <Fragment>
      <CssBaseline />
      <Grid className={classes.root}>
        <Container className={classes.container}>
          <NewExpenseForm />
        </Container>
        <Container style={{ height: 550, width: '100%' }}>
          <ExpenseList rows={rows} />
          {/* <SpeedDial direction="left" /> */}
        </Container>
      </Grid>
    </Fragment>
  );
};

export default ExpensePage;
