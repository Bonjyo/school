import LoadingSpinner from 'components/LoadingSpinner';
import Loadable from 'react-loadable';

export default {
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'NotFound' */ './components/NotFoundPage'),
    loading: LoadingSpinner,
  }),
};
