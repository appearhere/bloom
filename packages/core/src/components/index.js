import Circle from './Animate/Circle';
import Counter from './Animate/Counter';
import EdgeFade from './Animate/EdgeFade';
import GraphOrnament from './Animate/GraphOrnament';
import Roll from './Animate/Roll';
import SplitWordEntrance from './Animate/SplitWordEntrance';
import Sunrise from './Animate/Sunrise';
import Swap from './Animate/Swap';
import Typewriter from './Animate/Typewriter';

export const Animate = {
  Circle,
  Counter,
  EdgeFade,
  GraphOrnament,
  Roll,
  SplitWordEntrance,
  Sunrise,
  Swap,
  Typewriter
};

export AreaUnits from './AreaUnits/AreaUnits';
export Badge from './Badge/Badge';
export Blokk from './Blokk/Blokk';
export BookingRequestPreview from './BookingRequestPreview/BookingRequestPreview';
export Btn from './Btn/Btn';
export BtnContainer from './BtnContainer/BtnContainer';
export BtnGroup from './BtnGroup/BtnGroup';

export CalendarItem from './Calendar/CalendarItem/CalendarItem';
export CalendarMonth from './Calendar/CalendarMonth/CalendarMonth';
export DayPicker from './Calendar/DayPicker/DayPicker';
export DayRange from './Calendar/DayRange/DayRange';
export DayRangePicker from './Calendar/DayRangePicker/DayRangePicker';
export getCalendarMonth from './Calendar/getCalendarMonth/getCalendarMonth';
export { SELECT_DATE } from './Calendar/DayRangePicker/DayRangePicker';

export Card from './Cards/Card/Card';
export CondensedSpaceCard from './Cards/CondensedSpaceCard/CondensedSpaceCard';
export DestinationListingCard from './Cards/DestinationListingCard/DestinationListingCard';
export EditorialCard from './Cards/EditorialCard/EditorialCard';
export EventCard from './Cards/EditorialCard/EventCard';
export GuideCard from './Cards/EditorialCard/GuideCard';
export EmptyListingCard from './Cards/EmptyListingCard/EmptyListingCard';
export PictureCard from './Cards/PictureCard/PictureCard';
export PlaceListingCard from './Cards/PlaceListingCard/PlaceListingCard';
export SpaceFeatureCard from './Cards/SpaceFeatureCard/SpaceFeatureCard';
export SpaceListingCard from './Cards/SpaceListingCard/SpaceListingCard';

export Carousel from './Carousel/Carousel';
export ControlledCarousel from './Carousel/ControlledCarousel';
export DismissablePanel from './DismissablePanel/DismissablePanel';
export Dropdown from './Dropdown/Dropdown';
export Figure from './Figure/Figure';
export FittedImage from './FittedImage/FittedImage';
export FloatingActionBtn from './FloatingActionBtn/FloatingActionBtn';

export Checkbox from './Form/Checkbox/Checkbox';
export CheckboxGroup from './Form/CheckboxGroup/CheckboxGroup';
export IconInput from './Form/IconInput/IconInput';
export Input from './Form/Input/Input';
export InputField from './Form/InputField/InputField';
export InputRange from './Form/InputRange/InputRange';
export InputRangeWithHistogram from './Form/InputRange/InputRangeWithHistogram';
export Radio from './Form/Radio/Radio';
export RadioGroup from './Form/RadioGroup/RadioGroup';
export Select from './Form/Select/Select';
export Option from './Form/Select/Option';
export Star from './Form/Star/Star';
export StarRating from './Form/StarRating/StarRating';
export AutoComplete from './Form/AutoComplete/AutoComplete';

export AutoCompleteHeading from './Form/AutoComplete/Heading';
export AutoCompleteSuggestion from './Form/AutoComplete/Suggestion';
export AutoCompleteInput from './Form/AutoComplete/Input';
export autoCompleteTheme from './Form/AutoComplete/AutoComplete.css';

import {
  Field,
  Meta,
  Description,
  Label,
  Value,
  Placeholder,
  InputWrapper,
} from './Form/FormComponents';

export const Form = {
  Field,
  Meta,
  Description,
  Label,
  Value,
  Placeholder,
  InputWrapper
};

import Indicator from './Indicators/Indicator';
import IndicatorGroup from './Indicators/IndicatorGroup';

export const Indicators = {
  Indicator,
  IndicatorGroup
};

export FunnelInputField from './FunnelInputField/FunnelInputField';
export GridFader from './GridFader/GridFader';
export HeartBtn from './HeartBtn/HeartBtn';
export Hero from './Hero/Hero';
export SquareHero from './Hero/SquareHero';
export Icon from './Icon/Icon';
export iconHelper from './Icon/iconHelper';
export LeftRight from './LeftRight/LeftRight';
export Link from './Link/Link';
export Loader from './Loader/Loader';

import BaseMarker from './Map/Markers/Marker';
import SpaceGroupMarker from './Map/Markers/SpaceGroupMarker';
import ControlLayer from './Map/ControlLayer/ControlLayer';
import Control from './Map/Control/Control';
import MarkableMap from './Map/MarkableMap';
// import mapTile from './Map/images/tile.jpg';

export const Map = {
  BaseMarker,
  SpaceGroupMarker,
  ControlLayer,
  Control,
  MarkableMap,
  // mapTile
};

export Markdown from './Markdown/Markdown';
export Medallion from './Medallion/Medallion';

import ModalAnimator from './Modal/ModalAnimator';
import ModalWindow, { WindowTitle as ModalWindowTitle } from './Modal/Window';
import ModalWithCross from './Modal/WithCross';

export const Modal = {
  ModalAnimator,
  ModalWindow,
  ModalWindowTitle
};

export Moment from './Moment/Moment';

import TabBar from './Navigation/TabBar/TabBar';
import TabBarItem from './Navigation/TabBar/TabBarItem';

export const Navigation = {
  TabBar,
  TabBarItem
};

export Notification from './Notification/Notification';
export Pagination from './Pagination/Pagination';
export PaginationTrack from './Pagination/PaginationTrack';
export Panel from './Panel/Panel';
export ParallaxContainer from './ParallaxContainer/ParallaxContainer';

export PhotoGrid from './PhotoGrid/RandomSix';

export ProgressSteps from './ProgressSteps/ProgressSteps';
export ScreenReadable from './ScreenReadable/ScreenReadable';
export SiblingTransition from './SiblingTransition/SiblingTransition';
export SignPost from './SignPost/SignPost';
export SocialLinks from './SocialLinks/SocialLinks';
export SpaceTypeIcon from './SpaceTypeIcon/SpaceTypeIcon';
export StepIcon from './StepIcon/StepIcon';
export StickyNode from './StickyNode/StickyNode';
export Tabs from './Tabs/Tabs';
export Tab from './Tabs/Tab';

export Tether from './Tether/Tether';
import {
  HORIZONTAL_ATTACHMENTS,
  VERTICAL_ATTACHMENTS,
} from './Tether/Tether';

export const TETHER_HORIZONTAL_ATTACHMENTS = HORIZONTAL_ATTACHMENTS;
export const TETHER_VERTICAL_ATTACHMENTS = VERTICAL_ATTACHMENTS;

export Tooltip from './Tooltip/Tooltip';

import IconLabel from './Type/IconLabel/IconLabel';
import Quote from './Type/Quote/Quote';
import SectionHeader from './Type/SectionHeader/SectionHeader';
import Statement from './Type/Statement/Statement';
import Synopsis from './Type/Synopsis/Synopsis';

export const Type = {
  IconLabel,
  Quote,
  SectionHeader,
  Statement,
  Synopsis
};

import BoxingGlove from './ValueIcons/ValueIconBoxingGlove';
import Handshake from './ValueIcons/ValueIconHandshake';
import NoBull from './ValueIcons/ValueIconNoBull';
import Open from './ValueIcons/ValueIconOpen';
import Scissors from './ValueIcons/ValueIconScissors';
import ThumbsUp from './ValueIcons/ValueIconThumbsUp';

export const ValueIcons ={
  BoxingGlove,
  Handshake,
  NoBull,
  Open,
  Scissors,
  ThumbsUp
};

export Video from './Video/Video';
export VideoWithRichPoster from './VideoWithRichPoster/VideoWithRichPoster';
export Wrapper from './Wrapper/Wrapper';