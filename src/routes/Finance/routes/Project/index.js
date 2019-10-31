import { Loadable } from 'utils/components';

export default {
  path: ':expenseId',
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Expense' */ './components/ExpensePage'),
  }),
};
