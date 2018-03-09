export default (props) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', process.env.GA_TRACKING_ID, {
      page_path: props.location.pathname + props.location.search,
    });
  }
  return null;
};
