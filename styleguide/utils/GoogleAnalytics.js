import GA from 'react-ga';

export default (props) => {
  GA.set({ page: props.location.pathname + props.location.search });
  GA.pageview(props.location.pathname + props.location.search);
  return null;
};
