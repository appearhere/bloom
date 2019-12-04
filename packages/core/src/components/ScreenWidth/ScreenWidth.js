import { useWindowDimensions } from '../WindowDimensionsProvider/WindowDimensionsProvider';

const ScreenWidth = ({ render }) => {
  const { width } = useWindowDimensions();
  return render({ width });
};

export default ScreenWidth;
