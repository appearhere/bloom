import GA from 'react-ga';

export default function (props) {
  GA.set({ page: props.location.pathname + props.location.search });
  GA.pageview(props.location.pathname + props.location.search);
  return null;
}
