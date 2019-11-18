export default theme => ({
  root: {
    ...theme.flexColumnCenter,
    paddingTop: theme.spacing(4),
    flexGrow: '2',
    boxSizing: 'border-box',
    overflowY: 'scroll',
  },
  container: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
